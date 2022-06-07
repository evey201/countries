import React from "react";
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg'
import {
    Wrapper,
    TitleWrapper,
    ButtonWrapper,
    Title,
    Button
} from './header.styled'


export const Header = ({ title }) => {
    // console.log('dsf')
    return (
        <>
            <Wrapper>
                <TitleWrapper>
                    <Title>{ title }</Title>
                </TitleWrapper>
                <ButtonWrapper>
                    <Button><MoonIcon height="25px" width="25px" /> Dark Mode</Button>
                </ButtonWrapper>
            </Wrapper>
        </>
    )
}