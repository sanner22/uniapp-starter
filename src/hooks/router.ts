import { Navigates } from '@/utils/router/navigates'
import { useRouterStore } from '@/state/modules/router'
import type { RouteLocationNormalized } from '@/types/router/route'

const router = new Navigates()

/**
 * 路由hook
 */
export function useRouter() {
  return router
}

/**
 * 获取当前Route信息
 * 推荐在onLoad中调用此hook
 * getCurrentPages方法在不同平台有差异
 * 在微信小程序中只有在onLoad中才能获取到query
 * @return RouteLocationNormalized
 */
export function useRoute(): RouteLocationNormalized {
  const currentPages = getCurrentPages()
  const currentPage = currentPages[currentPages.length - 1]
  const path = currentPage?.route || ''
  const routerStore = useRouterStore()
  const currentRoute = routerStore.getRoutes?.get(path)
  let query = {}

  // #ifndef MP-WEIXIN
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  query = currentPage?.$page?.options || {}
  // #endif

  // #ifdef MP-WEIXIN
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  query = currentPage?.options || {}
  // #endif
  return {
    currentPages,
    currentPage,
    path,
    currentRoute,
    query,
  }
}
