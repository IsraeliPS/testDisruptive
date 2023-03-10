import request from 'supertest';
import { app } from '../../src/index';

describe('tests in dataRouter', () => {
  test('testing route works', async () => {
    const res = await request(app).get('/data');

    expect(res.statusCode).toEqual(200);
    const valueResponse = res.body;
    expect(typeof valueResponse).toBe('object');
  });
});
