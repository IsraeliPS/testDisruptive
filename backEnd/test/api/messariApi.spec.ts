
import { messariApi } from '../../src/api/messariApi';
import { DataResponse } from '../../src/interfaces/interfacesApi';
import { config } from '../../src/lib/config';


describe('tests in callback API', () => {
  test('fetches data successfully from an api', async () => {
    const url = 'https://data.messari.io/api/v2/assets';

    const conf = {
      headers: {
        'x-messari-api-key': config.api.key,
      },
    };

    const allData = await messariApi.get<DataResponse>(url, conf);

    expect(allData).toBeTruthy();
  });
});
