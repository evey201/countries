import React from "react";
import { SearchInput } from "../searchInput";
import { useSelect } from "downshift";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import {
  ActionsContainer,
  InputWrapper,
  ButtonWrapper,
  CustomButton,
  DropdownMenu,
  MenuItem
} from "./filter.styled";


const items = ["", "Africa", "America", "Asia", "Europe", "Oceania"];

export const Filters = ({
  inputValue,
  setInputValue,
  handleitemChanged,
  selectedItem: selectedValue,
}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    selectedItem: selectedValue,
    onSelectedItemChange: handleitemChanged,
  });

  return (
    <>
      <ActionsContainer>
        <InputWrapper>
          <SearchInput
            value={inputValue}
            placeholder="Search for a new country..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </InputWrapper>
        <ButtonWrapper>
            <CustomButton type="button" {...getToggleButtonProps()} >
                {selectedItem || 'All Countries'}
            <span><ArrowIcon height='25px' width='25px' /></span>
            </CustomButton>
            <DropdownMenu {...getMenuProps()}>
                {
                    isOpen && items.map((item, index) => (
                        <MenuItem isHighlighted={highlightedIndex === index} key={`${item}${index}`} {...getItemProps({ item, index })} >
                            {item || 'All Countries'}
                        </MenuItem>
                    ))
                }
            </DropdownMenu>
        </ButtonWrapper>
      </ActionsContainer>
    </>
  );
};
