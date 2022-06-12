import React, {useMemo} from 'react';
import { BasicInfo } from '../../components';
import { BorderCountry } from './borderCountry';
import { useParams, useNavigate } from 'react-router-dom'
import { useCountries } from "../../hooks";
import { 
    OverallContainer,
    InfoContainer,
    Image,
    Info,
    Title,
    CustomButton,
    BorderCountries,
    BorderCountryList
} from "./country.styled";


export const CountryDetails = () => {
    const { getCountryByName, getCountryByAltSpelling } = useCountries();
    const { name } = useParams();
    let navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }
    const country = useMemo(() => getCountryByName(name), [getCountryByName, name])
    const addCommaToNumber= (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const getLanguages = (languages) => {
        if (!languages) return;
        return Object.values(languages);
    };

    const getCurrency = (currency) => {
        if (!currency) return;
        return Object.values(currency).map((curr) => curr.name);
      };

    return ( 
        <>
            <OverallContainer>
                <CustomButton onClick={goBack}>Back</CustomButton>
                <InfoContainer>
                    <Image src={country?.flags?.png} alt="flag" />
                    <Info>
                        <Title>{country?.name?.common}</Title>
                        <div>
                            <BasicInfo  title="Native Name" value={Object.values(country?.name?.nativeName)[0]?.common} />
                            <BasicInfo  title="Population" value={addCommaToNumber(country.population)} />
                            <BasicInfo  title="Region" value={country?.continents?.[0]} />
                            <BasicInfo  title="Sub Region" value={country?.subregion} />
                            <BasicInfo  title="Capital" value={country?.capital} />
                        </div>
                        <div>
                            <BasicInfo title='Top Level Domain' value={country?.tld} />
                            <BasicInfo title='Currencies' value={getCurrency(country?.currencies)} isArray />
                            <BasicInfo title='Languages' value={getLanguages(country?.languages)} isArray />
                        </div>
                        {
                            country?.borders ? (
                                <BorderCountries>
                                    <div>Border Countries:</div>
                                    <BorderCountryList>
                                        {
                                            country?.borders?.map((altSpelling) => {
                                                const getCountryByAlt = getCountryByAltSpelling(altSpelling);
                                                return <BorderCountry name={getCountryByAlt?.name?.common} key={getCountryByAlt?.name?.common} /> 
                                            })
                                        }
                                    </BorderCountryList>
                                </BorderCountries>
                            ) : 'No data available'
                        }
                    </Info>
                </InfoContainer>
            </OverallContainer>
        </>
    );
}
 