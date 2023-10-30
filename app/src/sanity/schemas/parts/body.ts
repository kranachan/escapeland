import { q, sanityImage } from 'groqd'

export const body = q('body')
  .filter()
  .select({
    '_type == "block"': ['{...}', q.contentBlock()],
    '_type == "image"': ['{...}', sanityImage('').schema],
    '_type == "codeBlock"': [
      '{...}',
      q.object({
        _key: q.string().nullable(),
        _type: q.string(),
        code: q.string(),
        language: q.string(),
      }),
    ],
    default: {
      _key: q.string(),
      _type: ['"unsupported"', q.literal('unsupported')],
      unsupportedType: ['_type', q.string()],
    },
  })
