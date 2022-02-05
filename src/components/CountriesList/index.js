import {CountryDetails} from '../CountryDetails';

const ArrPaises = require('../../countries.json');


export function CountriesList() {
    const infoArray = ArrPaises.map((current) => {
        return(
            [current.alpha3Code , `https://flagpedia.net/data/flags/icon/72x54/${current.alpha2Code.toLowerCase()}.png` , current.name.official]
        )
    }
    )
    
    return (
        <>
            <div className="col-5">
                <div className="list-group">
                    {
                        infoArray.map((current) => {
                            return (
                                <>
                                <CountryDetails a3c={current[0]} a2c={current[1]} name={current[2]}/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}