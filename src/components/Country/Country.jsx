import './Country.css'

const Country = ({props}) => {
    console.log(props)
    const {name,flags} = props;
    const {common} = name;
    return (
        <div className='country'>
            <h3>name:{common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;