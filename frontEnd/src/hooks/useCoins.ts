import React, { useEffect, useState } from 'react';
import { messariApi } from '../api/messariApi';
import { DataResponse } from '../interfaces/interfacesApi';

export const useCoins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState<DataResponse>({} as DataResponse);

  const loadCoins = async () => {
    try {
      const resp = await messariApi.get<DataResponse>(
        'http://localhost:3000/data'
      );
      setCoins(resp.data);
      setIsLoading(false);
    } catch (err) {
      console.log('error axios', err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadCoins();
    }, 1000);
  }, []);

  return {
    isLoading,
    coins,
  };
};
