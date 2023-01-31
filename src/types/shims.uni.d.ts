/// <reference types="@dcloudio/types" />

// 为 UniApp.Uni 扩展 $u 属性
declare interface Uni {
  $u: any;

  setClipboardData(options: UniNamespace.SetClipboardDataOptions): void | Promise<string>;
}

declare const weex: any;
