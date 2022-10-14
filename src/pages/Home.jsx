import { useState, useEffect } from "react";
import { fechTrendingMovies } from '../utils/FetchMovies';
import { ListTrandingMovies } from '../components/ListTrendingMovies/ListTrendingMovies';

export const Home = () => {
    const [trendingMovies, setTrendingPictures] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => {

    setLoader(true);
    setError(null);

      
    fechTrendingMovies()
        .then(({ results }) => { 
            
            if (results === 0) {
            setLoader(false);
            setError(Error)
            return Promise.reject(new Error(`Sorry, but we can't find TrendingsMovies today. Try again.`))
            }

            setTrendingPictures(results);
        })
      .catch(error => {
        setError(error);
      })
     },[])    
    
    return (
        <ListTrandingMovies arrayTrendingMovies={trendingMovies}> </ListTrandingMovies >
    );
};