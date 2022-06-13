import React from "react";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg'
import { ReactComponent as LightIcon } from '../../assets/icons/sun.svg'
import {
    Wrapper,
    TitleWrapper,
    ButtonWrapper,
    Title,
    Button
} from './header.styled'


export const Header = ({ title, currentTheme, toggleTheme  }) => {
    const isLightThemeActive = currentTheme === 'light';
    const navigate = useNavigate()
    const redirectHome = () => {
        navigate('/');
    }

    return (
        <>
            <Wrapper>
                <TitleWrapper>
                    <Title onClick={redirectHome}>{ title }</Title>
                </TitleWrapper>
                <ButtonWrapper>
                    <Button onClick={toggleTheme} >
                    { 
                        isLightThemeActive ? <MoonIcon height="18px" width="25px" /> : <LightIcon height="18px" width="25px" />
                    }
                    {" "}
                     { isLightThemeActive ? 'Dark Mode' : 'Light Mode'}</Button>
                </ButtonWrapper>
            </Wrapper>
        </>
    )
}