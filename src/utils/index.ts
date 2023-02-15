import { isObject } from '@/utils/is'

/**
 * 深度合并
 * @param src
 * @param target
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  for (key in target) src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return src
}
