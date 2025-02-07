import { createContext } from "react";
import useAxiosCountry from "../hooks/useAxiosCountry";

export const CountryContext = createContext();

const MyContext = ({ children }) => {
    const countries = useAxiosCountry();

    const values = {
        countries
    }

    return (
        <CountryContext.Provider value={values}>
            {children}
        </CountryContext.Provider>
    );
};

export default MyContext;