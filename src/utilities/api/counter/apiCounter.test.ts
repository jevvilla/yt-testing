import { fetchFollowingCount } from './apiCounter';

describe('apiCounter', () => {
  it('fetchFollowingCount should fail', async () => {
    await expect(fetchFollowingCount(1, 2, true)).rejects.toMatch(
      'was not possible reaching the server'
    );
  });

  it('fetchFollowingCount should resolve correctly and return a value', async () => {
    await expect(fetchFollowingCount(1, 2)).resolves.toBe(3);
  });
});
