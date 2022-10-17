import { Box, LiItem, TitleNameCast,TitleCaracter } from './Cast.styled';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fechCastsAboutFilm } from '../../utils/FechCastsAboutFilms';
import imageNotFound from '../../img/user.jpg';


const Cast = () => {
    const [cast, setCast] = useState(null);
    const {renderId} = useParams();
    const [error, setError] = useState(null);


    useEffect(() => {
        
        fechCastsAboutFilm(Number(renderId))
            .then(response => {
                if (response.cast.length === 0) {

                    setError(Error)
                    return Promise.reject(new Error(`Sorry, but we can't find cast information about this film. Try again.`))
                }

                setError(null);
                setCast(response.cast)
                
            }).catch(error => {
                setError(error)
            })
            

    }, [renderId]);
        
    if (!cast) {
        return null
    }

    
    return (

        <Box as="ul">
            {error && <div>{error.message} </div>}
            {cast.length > 0
                ? cast.map(({ id, profile_path, original_name, character }) => { 
               
                    return  (
                        <LiItem key={id}>
                            {profile_path
                                ? <img src={`https://www.themoviedb.org/t/p/w500${profile_path}`} alt={original_name} width='100' />
                                : <img src={imageNotFound} alt={original_name} width='100' />
                            }                          
                            <TitleNameCast> {original_name}</TitleNameCast>
                            <TitleCaracter > Character: {character}</TitleCaracter>
                        </LiItem>
                    )
                })
                : <p> Cast information about this film dont found! </p>}
        </Box>
    )
}

export default Cast;
