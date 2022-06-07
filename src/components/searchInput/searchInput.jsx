import {
    InputContainer,
    InputElement
} from './searchInput.styled'



export const SearchInput = ({ placeholder, ...props }) => {
    return ( 
        <>
            <InputContainer>
                <InputElement type="search" placeholder={placeholder} {...props}/>
            </InputContainer>
        </>
    );
}
