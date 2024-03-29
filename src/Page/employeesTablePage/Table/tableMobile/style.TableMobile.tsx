import styled from "styled-components";

export const DetailsFormat = styled.details`
width: 90%;
margin-left: auto;
margin-right: auto;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
background-color: white;

ul {
  all: unset;
  padding-top: 14px;
}
li {
  all: unset;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  vertical-align: bottom;
  padding: 0 14px;
  border-bottom: 2px dashed whitesmoke;
  p {
    all: unset;
  }
}
li + li {
margin-top: 14px }
summary {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
  padding: 14px 14px;
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
export const TableHeader = styled.div`
width: 90%;
margin-left: auto;
margin-right: auto;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 14px 0px;
gap: 32px;

height: 47px;

background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
border-radius: 8px 8px 0px 0px;
margin: 0 auto;
color: #ffffff;

h1 {
  margin: 0 auto;
}
`;
