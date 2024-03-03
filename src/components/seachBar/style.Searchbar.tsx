import styled from "styled-components";

export const Box = styled.div`
display: flex;
justify-content: space-between;
position: relative;
align-items: center;
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
  width: 80px;
  height: 19px;
  margin-left: 5%;
}
img {
  position: absolute;
  right: 0;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  cursor: pointer;
}
`;