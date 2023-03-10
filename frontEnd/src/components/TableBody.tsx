import { Payload } from '../interfaces/interfacesApi';

import Bitcoin from '../assets/825540.png';
import Cardano from '../assets/cardano.png';
import Ethereum from '../assets/ethereum.png';

interface Props {
  coin: Payload;
  index: number;
}

export const TableBody = ({ coin, index }: Props) => {
  const shortNumber = (number: number) => {
    let newNumber = Math.trunc(number).toString();
    if (number > 1e9) {
      const position = newNumber.toString().length - 9;
      newNumber = newNumber.substring(0, position) + ' B';
      return newNumber;
    }
    if (number > 1e6) {
      const position = newNumber.toString().length - 6;
      newNumber = newNumber.substring(0, position) + ' M';
      return newNumber;
    }
  };

  const coinName = (name: string) => {
    switch (name) {
      case 'Bitcoin':
        return <img src={Bitcoin} />;
      case 'Ethereum':
        return <img src={Ethereum} />;
      case 'Cardano':
        return <img src={Cardano} />;
    }
  };

  const colorValue = (value: any) => {
    if (value >= 0) return <td className='green'>{`$ ${value}`}</td>;
    else return <td className='red'>{`$ ${value}`}</td>;
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {coinName(coin.name)}
        <span className='blue'>{`${coin.name}`}</span>{` - ${coin.symbol}`}
      </td>
      {colorValue(coin.metrics.market_data.price_usd.toLocaleString())}
      {colorValue(
        coin.metrics.market_data.percent_change_usd_last_1_hour.toFixed(2)
      )}
      {colorValue(
        coin.metrics.market_data.percent_change_usd_last_24_hours.toFixed(2)
      )}
      <td>grafica</td>
      <td>{`$ ${shortNumber(
        coin.metrics.marketcap.current_marketcap_usd
      )}`}</td>
      <td>{`$ ${shortNumber(
        coin.metrics.market_data.real_volume_last_24_hours
      )}`}</td>
      {colorValue(coin.metrics.roi_data.percent_change_last_1_week.toFixed(2))}
      {colorValue(coin.metrics.roi_data.percent_change_last_1_month.toFixed(2))}
      {colorValue(coin.metrics.roi_data.percent_change_year_to_date.toFixed(2))}
    </tr>
  );
};
