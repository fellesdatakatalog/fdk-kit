export const flushPromises = () => new Promise(setImmediate);

export const sleep = (milliseconds: number) =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

export const cartesianProduct = (...args: any[][]): any[] => {
  const f = (a: any[], b: any[]): any[] =>
    ([] as any).concat(...a.map(d => b.map(e => ([] as any).concat(d, e))));

  const [a, b, ...c] = args;
  return b ? cartesianProduct(f(a, b), ...c) : a;
};
