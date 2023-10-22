/**
 * Launch an application.
 * @param { string } dir - The directory of the application.
 * @param { string[] } [commandOptions] - (Optional) The launch options.
 * @returns { Promise<void> }
 */
const launch = async (dir, commandOptions = []) => {
  const task = Bun.spawn(['bun', 'run', 'dev', ...commandOptions], {
    cwd: dir,
    env: process.env,
  })

  for await (const log of task.stdout) {
    console.log(new TextDecoder().decode(log))
  }

  for await (const error of task.stderr) {
    console.error(new TextDecoder().decode(error))
  }
}

const launchApp = async () => {
  await launch('app', ['--host'])
}

const launchStudio = async () => {
  await launch('studio')
}

const args = process.argv.slice(2)
const launchArg = args[0]

switch (launchArg) {
  case '--app':
    launchApp()
    break
  case '--studio':
    launchStudio()
    break
  default:
    launchApp()
    launchStudio()
}
