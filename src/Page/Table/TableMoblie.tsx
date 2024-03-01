import styled from 'styled-components';

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
              <h1>icone</h1>
            </summary>
            <ul>
              <li>{data.admission_date}</li>
              <li>{data.phone}</li>
              <li>{data.job}</li>
            </ul>
          </DetailsFormat>
        );
      })}
    </div>
  );
}

const DetailsFormat = styled.details`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  background-color: azure;
  summary {
    background-color: beige;
    display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 14px 0px;
gap: 32px;
    img {
      height: 34px;
      width: 34px;
      border-radius: 50%;
    }
  }
  summary:hover {
    background-color: orange;
  }
`;
const TableHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 14px 0px;
gap: 32px;

height: 47px;

background: linear-gradient(180deg, #5A84C0 0%, #594ED2 100%);
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
border-radius: 8px 8px 0px 0px;
margin: 0 auto;
color: #FFFFFF;

h1 {
  margin: 0 auto;
}
`
