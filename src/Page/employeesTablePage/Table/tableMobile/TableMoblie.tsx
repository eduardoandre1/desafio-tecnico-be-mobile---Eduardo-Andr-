import { SlArrowDown } from 'react-icons/sl';
import { DetailsFormat , TableHeader } from './style.TableMobile';

export default function TableMobile({ data }) {
  return (
    <div>
      <TableHeader>
        <h1>FOTO</h1>
        <h1>NOME</h1>
        <h1>.</h1>
      </TableHeader>
      {data.map((data) => {
        return (
          <DetailsFormat>
            <summary>
              <img src={data.image} />
              <h1>{data.name}</h1>
              <SlArrowDown color='blue'/>
            </summary>
            <ul>
              <li>
                <p><strong>Cargo</strong></p>
                <p>{data.job}</p>
              </li>
              <li>
                <p><strong>Data de admissão</strong></p>
                <p>{data.admission_date}</p>
              </li>
              <li>
                <p><strong>Telephone</strong></p>
                <p>{data.phone}</p>
              </li>
            </ul>
          </DetailsFormat>
        );
      })}
    </div>
  );
}

