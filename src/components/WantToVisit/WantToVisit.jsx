
const WantToVisit = ({country}) => {
    return (
        <div>
            <p key={country.cca3}>{country.name.common}</p>
            <img className="flags" key={country.cca3} src={country.flags.png}></img>
        </div>
    );
};

export default WantToVisit;