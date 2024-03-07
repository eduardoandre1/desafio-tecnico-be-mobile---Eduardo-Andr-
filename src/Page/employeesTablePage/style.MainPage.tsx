import styled from 'styled-components';

export const Conteiner = styled.div`
  width: ${window.innerWidth};
  height: 100vmax;
  background-color: #f0f0f0;
  font-size: calc(2vmin);
`

export const PageTitle = styled.div`
  height: 111px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    justify-content: left;
    align-items: flex-start;
    padding-bottom: 14px;
    div {
      width: 100%;
    }
  }
`;
