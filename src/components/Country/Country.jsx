import { useState } from 'react';
import './Country.css'

const Country = ({ props ,handleVisitedCountries,handleVisitedCountries2,handleWantToVisitedCountries,handleWantToVisitedCountries2}) => {
    // console.log(props)
    const { name, flags, population, area } = props;
    const { common } = name;
    const [visit, setVisit] = useState(false)


    const setData =()=>
        {
            setWantToVisit(false);
        }
    
    // console.log(handleVisitedCountries)

    const visiting = () => {
        setVisit(!visit)
        visit? handleVisitedCountries2(props): handleVisitedCountries(props) 
        visit && setData();
    }
    const [wantToVisit, setWantToVisit] = useState(false);
    const wantVisit = () => {
        setWantToVisit(!wantToVisit)
        wantToVisit? handleWantToVisitedCountries2(props): handleWantToVisitedCountries(props) 
    }
    return (
        <div className='country'>
            <h3 >name:{common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area:{area}</p>
            <div className='gaping'>
                <button className={visit ? 'bg2' : 'bg1'} onClick={visiting}>{visit ? "visited" : "visit"}</button>
                {
                    visit ? "" : <button className={wantToVisit ? 'bg2' : 'bg1'} onClick={wantVisit}>{wantToVisit? 'want to visit' : 'not interested'}</button>

                }
                {/* {

                    visit ? "" : `${wantToVisit? "i will visit there" : "i still didn't think about this country"}`
            
                } */}
            </div>
        </div>


    );
};

export default Country;