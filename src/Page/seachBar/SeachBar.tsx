import styled from 'styled-components';

export default function SearchBar() {
  return (
    <Box>
      <input
        placeholder="Procure por uma cidade"
        //value={global.location }
        //onChange={(input) => global.setlocation(input.target.value)}
      />
      <img
        src="https://th.bing.com/th/id/OIP.J-NC5zdHendWhPtlgsY0LgHaHa?rs=1&pid=ImgDetMain"
        alt=""
      />
    </Box>
  );
}
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  width: 290px;
  height: 50px;
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  input {
    all: unset;
  }
  img {
    margin: 0 auto;
    width: 24px;
    height: 24px;
  }
`;
