import React, { useRef, useCallback, useEffect } from 'react';
import { MenuGroup, Menu } from './dropDown.styled';

export const Dropdown = ({ open, setIsOpen, children, trigger }) => {
    const menuDropDownRef = useRef()

    const handleClick = useCallback(
        (e) => {
            e.stopPropagation();
            if (menuDropDownRef.current.contains(e.target)) {
                // inside click
                return
            }
            // outside click
            setIsOpen(false)
        },
        [setIsOpen]
    )

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [handleClick])
    return (
        <MenuGroup ref={menuDropDownRef}>
            {/* {
                trigger ||
                <ThreeDot
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!open)
                    }}
                />
            } */}
            <Menu open={open}>
                {children}
            </Menu>
        </MenuGroup>
    )
}
