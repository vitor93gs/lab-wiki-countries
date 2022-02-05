

export function CountryDetails(props) {
    
    return(
        <a className="list-group-item list-group-item-action" href={props.a3c}>
            <img src={props.a2c} alt="imagem do país" />
            <p> 
                {props.name} 
            </p>
        </a>
    )
}