import styled from "styled-components";

export const ActionsContainer = styled.div`
  margin: 3rem 60px;
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
  @media (min-width: 375px) and (max-width: 450px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 10px 5px; 
    align-items: start;
  }
`;


export const InputWrapper = styled.div`
  width: 30%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 450px) {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const ButtonWrapper = styled.div`
  width: 20%;
  position: relative;
  
  @media (max-width: 450px) {
    width: 50%;
    padding-top: 30px;
  }
`

export const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: left;
  padding-left: 20px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  cursor: pointer;
  top: 40px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  list-style: none;
  padding: 0;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  z-index: 20;
  
  
  @media (max-width: 450px) {
    top: 70px;
    
  }
`;

export const MenuItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 20px;
  margin: 5px 0;
  font-weight: 600;
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.veryDarkBlue : theme.colors.darkBlue)}; ;
`;