import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { InputContainer, InputElement, Icon } from "./searchInput.styled";

export const SearchInput = ({ placeholder, ...props }) => {
  return (
    <>
      <InputContainer>
        <Icon><SearchIcon height="18px" width="25px" /></Icon>
        <InputElement type="search" placeholder={placeholder} {...props} />
      </InputContainer>
    </>
  );
};
