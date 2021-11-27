export const fetchFollowingCount = (
  count: number,
  incrementor: string | number,
  fail = false
): Promise<number> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject('was not possible reaching the server');
      }
      resolve(count + Number(incrementor));
    }, 1000);
  });
