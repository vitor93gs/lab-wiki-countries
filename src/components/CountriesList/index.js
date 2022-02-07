import { Link } from 'react-router-dom';

const arrPaises = require('../../countries.json');

export function CountriesList(props) {
    // const {pais.alpha3Code} = useParams()
    function setImage(current){
        return (`https://flagpedia.net/data/flags/icon/72x54/${current.toLowerCase()}.png`)
    }
    
    return (
        <>
            <div className="col-5">
                <div className="list-group">
                    {
                        arrPaises.map((current,index) => {
                           
                            return (
                                <Link className="list-group-item list-group-item-action" to={`/${current.alpha3Code}`} onClick={(index) => {
                                    props.set(index)
                                }}>
                                    <img src={setImage(current.alpha2Code)} alt="imagem do país" />
                                    <p> 
                                        {current.name.official} 
                                    </p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
    
}


// onClick={handleLink(current)}
//     function handleLink(cur){
//     props.set(cur)
// }