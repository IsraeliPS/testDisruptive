import { TableHeaders } from './TableHeaders';
import { TableBody } from './TableBody';
import { useCoins } from '../hooks/useCoins';

export const TableData = () => {
  const { isLoading, coins } = useCoins();

  return (
    <div className='App'>
      <table>
        <thead>
          <TableHeaders />
        </thead>
        <tbody>
          {!isLoading &&
            coins.payload.map((coin, index) => {
              return <TableBody key={index} coin={coin} index={index} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
