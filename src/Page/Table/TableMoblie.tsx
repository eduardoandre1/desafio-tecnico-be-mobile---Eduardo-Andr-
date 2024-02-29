import styled from 'styled-components';

export default function TableMobile({ data }) {
  return (
    <div>
      <div> menu</div>
      <DetailsFormat>
        <summary>
          <img src="https://yt3.ggpht.com/ytc/AIdro_kiskoEuUllc8rEuH8Z1P7T0TXw7qACho7SyQALmg=s176-c-k-c0x00ffffff-no-rj" />
          <h1>nome</h1>
        </summary>
        <li>data</li>
        <li>cargo</li>
      </DetailsFormat>
      {data.map((data) => {
        return (
          <DetailsFormat>
            <summary>
              <img src={data.image} />
              <h1>{data.name}</h1>
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
