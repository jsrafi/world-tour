import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'
import Visited from "../visited-countries/Visited";
import WantToVisit from "../WantToVisit/WantToVisit";


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [wantToVisitedCountries, setWantToVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    // showing visited countries
    const handleVisitedCountries = (props) => {
        console.log(props)
        const newVisitedCountries = [...visitedCountries, props];
        setVisitedCountries(newVisitedCountries)
        handleWantToVisitedCountries2(props)
    }
    // deleteing not visited countries
    const handleVisitedCountries2 = (props) => {
        const newVisitedCountries = visitedCountries.filter(country => country !== props);
        setVisitedCountries(newVisitedCountries);
        
        
    }
    


//  showing want to visit countries
    const handleWantToVisitedCountries =(props) =>
    {
        const newWantToVisitedCountries = [...wantToVisitedCountries, props];
        setWantToVisitedCountries(newWantToVisitedCountries)
    }
    const handleWantToVisitedCountries2 =(props) =>
    {
        const newWantToVisitedCountries = wantToVisitedCountries.filter(country => country !== props);
        setWantToVisitedCountries(newWantToVisitedCountries);
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
                <hr />
                <h3>Want to Visit this Countries</h3>
                <div className="box-color">
                    {
                        wantToVisitedCountries.map(country =><WantToVisit key={country.cca3} country={country}></WantToVisit>)
                    }

                </div>
            </div>
            <div className="country-style">
                {
                    countries.map(country => <Country key={country.cca3} props={country} handleVisitedCountries={handleVisitedCountries} handleVisitedCountries2={handleVisitedCountries2}  handleWantToVisitedCountries={handleWantToVisitedCountries} handleWantToVisitedCountries2={handleWantToVisitedCountries2} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;