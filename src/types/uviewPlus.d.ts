// 参考：https://blog.csdn.net/qq1014156094/article/details/107316969
declare module 'uview-plus';

// 为 UniApp.Uni 扩展 $u 属性
declare namespace UniApp {
  export interface Uni {
    $u?: any;
  }
}
