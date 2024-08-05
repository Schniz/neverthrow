import { readFile } from 'fs/promises'
import { Err, ResultAsync } from '../src'

describe('fs', () => {
  test('readFile a non-existent file returns Err', async () => {
    const path = '/xxx/yyy/zzz'
    const res = await ResultAsync.fromPromise(
      readFile(path, 'utf8'),
      (_e) => new Error(`cannot read file ${path}`),
    )

    expect(res).toBeInstanceOf(Err)
    expect(res._unsafeUnwrapErr()).toEqual(new Error(`cannot read file ${path}`))
  })
})
