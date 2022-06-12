import React from 'react'
import { CountryProvider } from './countries/provider'

export const Providers = ({ children }) => {
    return (
        <CountryProvider>
            {children}
        </CountryProvider>
    )
}