export function throttle(fn:Function, gapTime:number) {
  let last = 0; // 上次执行时间 第一次马上执行
  return function (...args: any[]) {
    let nowTime = Date.now(); // 当前时间
    // 当前时间-上次执行的时间是否超过间隔时间 就执行回调
    if (nowTime - last > gapTime) {
      // @ts-ignore
      fn.apply((this as any), ...args); // ...arr为fn的参数
      last = nowTime;
    }
  };
}
