const launch = async (dir) => {
  const task = Bun.spawn(['bun', 'run', 'dev'], {
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
  await launch('app')
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
