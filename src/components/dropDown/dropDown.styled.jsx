import styled from 'styled-components'

export const MenuGroup = styled.div`
    position: relative;
    border-radius: 8px;
    span {
        padding: 10px;
    }
`

export const Menu = styled.div`
    z-index: 10;
    border-radius: 0.5em;
    box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.2);
    right: 10px;
    padding: 12px 20px;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    &,
    & * {
        opacity: ${(props) => (props.open ? '1' : '0')};
        visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
        transition: opacity 0.3s;
    }
    & > * {
        display: flex;
        padding: 5px;
        justify-content: flex-end;
        align-items: center;
    }
`

// export const ThreeDot = tw(ThreeDotIcon)`
// absolute w-4 inset-y-0 cursor-pointer mr-8 right-0 m-auto 
// `
// export const MenuItem = tw.div`
// relative
// `
