import {Info} from './info.styled'

export const BasicInfo = ({ title, value, isArray }) => {
    return ( 
        <>
            <Info>
                <span>{title}: </span>
                {isArray ? value.join(', ') : value}
            </Info>
        </>
    );
}
