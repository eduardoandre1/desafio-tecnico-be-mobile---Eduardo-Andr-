import styled from 'styled-components';
//import "resources/Logo Be.svg";
export default function Header() {
  return (
    <>
      <HeadStyle>
       <img src="resources/LogoBe.svg" alt="" />
      </HeadStyle>
    </>
  );
}
const HeadStyle = styled.div`
  background-color: white;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img{
    height: 60px;
    width: 60px;
    margin-left: 80px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;
