import { q } from 'groqd'

export const body = q('body')
  .filter()
  .select({
    '_type == "block"': ['{...}', q.contentBlock()],
    '_type == "image"': {
      _type: q.literal('image'),
      asset: q('asset').grabOne('_ref', q.string()),
    },
    '_type == "codeBlock"': {
      _type: q.literal('codeBlock'),
      filePath: q.string().nullable(),
      codeObject: q.object({
        code: q.string(),
        language: q.string(),
      }),
    },
    default: {
      _key: q.string(),
      _type: ['"unsupported"', q.literal('unsupported')],
      unsupportedType: ['_type', q.string()],
    },
  })
