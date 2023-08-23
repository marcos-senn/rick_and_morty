import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"





const Detail = ({origin}) => {

    const [character,setCharacter] = useState([])
    const {id} = useParams()
    

    useEffect( () => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            }
            
            else if(!data.name) {
                alert('No hay personajes con ese ID');
            }
        })
        
        return setCharacter([]);

    },[id])

    return(
        
        <div className="detailCardContainer animate__animated animate__fadeInDown">
            <div>
                <h3 className="card-name">{character.name}</h3>
            </div>
            <div>
                <h2>{`Especie | ${character.species}`}</h2>
                <h2>{`Genero | ${character.gender}`}</h2>
                <h2>{`Status | ${character.status}`}</h2>
                <h2>{`Origen | ${character.origin && character.origin.name}`}</h2>
            </div>
            <div> 
                <img src={character.image} alt=''/> 
            </div>
      </div>
    )
}

export default Detail