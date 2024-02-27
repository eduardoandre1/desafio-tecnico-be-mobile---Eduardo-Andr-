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
  background-color: orange;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img{
    height: 60px;
    width: 60px;
    margin-left: 40px;
  }
`;
