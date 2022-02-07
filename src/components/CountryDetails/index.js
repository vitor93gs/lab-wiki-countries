import styles from "./styles.module.css"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const arrPaises = require('../../countries.json');



export function CountryDetails(props) {
    
    // const [country, setCountry] = useState(arrPaises[props.index]);
    const params = useParams()
    const country = arrPaises.find((current) => {
      return current.alpha3Code === params.alpha3Code
    })

    const flag = `https://flagpedia.net/data/flags/h80/${country.alpha2Code.toLowerCase()}.png`

    return(
        <>
           <div class="col-7">
            <img src={flag} alt="country flag" className={styles.style2}/>
            <h1>{country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className={styles.style1} >Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((current) => {
                        return (
                          <Link className="" to={`/${current}`}>
                            <h3>{current}</h3>
                          </Link>
                        )
                      })}
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
    )
}