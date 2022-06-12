import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { InputContainer, InputElement, Icon } from "./searchInput.styled";

export const SearchInput = ({ onChange, value, placeholder, ...props }) => {
  return (
    <>
      <InputContainer>
        <Icon><SearchIcon height="18px" width="25px" /></Icon>
        <InputElement type="search" onChange={ onChange } value={value} placeholder={placeholder} {...props} />
      </InputContainer>
    </>
  );
};
