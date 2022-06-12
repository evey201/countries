import { useNavigate } from 'react-router-dom';
import {
    CustomBorderButton
} from './borderCountry.styled'
export const BorderCountry = ({ name }) => {
    let navigate = useNavigate();
    const handleClicked = () => {
        navigate(`/country/${name}`, { replace: false });
    }
    return ( 
        <>
            <CustomBorderButton onClick={handleClicked}>{name}</CustomBorderButton>
        </>
    );
}
