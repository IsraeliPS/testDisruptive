import { config } from '../lib/config';
import { messariApi } from '../api/messariApi';
import { DataResponse, Datum } from '../interfaces/interfacesApi';

export const getTypesCoins = async () => {
  const conf = {
    headers: {
      'x-messari-api-key': config.api.key,
    },
  };

  try {
    const allData = await messariApi.get<DataResponse>(
      'https://data.messari.io/api/v2/assets',
      conf
    );

    let typesCoins: Datum[] = [];
    allData.data.data.map((data: Datum) => {
      if (
        data.name === 'Ethereum' ||
        data.name === 'Bitcoin' ||
        data.name === 'Cardano'
      ) {
        typesCoins = [...typesCoins, data];
      }
    });

    return typesCoins;
  } catch (err) {
    console.log('error axios', err);
  }
};
