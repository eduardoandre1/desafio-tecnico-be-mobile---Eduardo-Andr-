import styled from "styled-components";

export const TableStyle = styled.div`
table {
  border-collapse: collapse;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-inline: initial;

}
thead {
  background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 16px 16px 0px 0px;
  gap: 32px;
  color : white;
  text-align: start;
  margin-left: 50px;
  th {
  text-align: start;
  width: fit-content;
  justify-items: center;
  align-items: center;
  padding: 40px;
}
}

tr {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 2em;
  font-size: 2em;
  line-height: 1em;
  height: 49px;
  justify-content: center;
  text-align: start;
  border-bottom: #ddd solid 2px;
  align-items: center;

}

tbody {
  tr:hover {background-color: orange;}
  color: black;
  img {
     height: 34px;
     width: 34px;
     border-radius: 50%;
     align-self: center;
     display: flex;
     justify-self: center;

  }
}
td {
  justify-content: center;
  align-content: center;
  padding: 40px;
}
`;
