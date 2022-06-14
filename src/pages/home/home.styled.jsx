import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  border: 1px solid ${({ theme }) => theme.colors.veryDarkBlue};
  min-height: 100vh;
`;

export const ActionsContainer = styled.div`
  margin: 3rem 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;


  @media (max-width: 375px) {
    margin: 3rem 18px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

`;

export const InputWrapper = styled.div`
  width: 30%;
  @media (max-width: 375px) {
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  width: 20%;
  @media (max-width: 375px) {
    width: 50%;
  }
`

export const Button = styled.button`
  display: flex;
  outline: none;
  background-color: white;
  align-items: center;
  border: hidden;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  ${'' /* margin: 3rem 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding-right: 20px;
  padding-left: 20px; */}
    margin: 3rem;
    display: grid;
    grid-auto-flow: row;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, minmax(200px, 0fr));
    grid-template-rows: repeat(auto-fill, minmax(330px, 0fr));
    gap: 15px 10px;
}



  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin: 3rem 40px;
  }
`
