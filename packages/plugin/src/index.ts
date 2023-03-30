/**
 * 
 * @param a 参数a
 * @param b  参数b
 * @returns 
 * @beta
 */
export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
