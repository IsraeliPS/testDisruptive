import { data } from '../data/headers';

export const TableHeaders = () => {
  return (
    <tr>
      {data.map((cell) => {
        return <th key={cell}>{cell}</th>;
      })}
    </tr>
  );
};
