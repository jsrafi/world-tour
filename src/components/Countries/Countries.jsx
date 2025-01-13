import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'
import Visited from "../visited-countries/Visited";


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = (props) => {
        console.log(props)
        const newVisitedCountries = [...visitedCountries, props];
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedCountries2 = (props) => {
        const newVisitedCountries = visitedCountries.filter(country => country !== props);
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <h3>Visited Countries:{visitedCountries.length}</h3>
            <div>
                <div className="box-color">
                    {
                        visitedCountries.map(country => <Visited key={country.cca3} country={country}></Visited>)

                    }
                    
                </div>
            </div>
            <div className="country-style">
                {
                    countries.map(country => <Country key={country.cca3} props={country} handleVisitedCountries={handleVisitedCountries} handleVisitedCountries2={handleVisitedCountries2} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;