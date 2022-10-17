import { useState, useEffect } from "react";
import { fechTrendingMovies } from '../utils/FetchMovies';
import { ListTrandingMovies } from '../components/ListTrendingMovies/ListTrendingMovies';
import { Loader } from '../components/Loader/Loader';
import { useLocation } from 'react-router-dom';

export const Home = () => {
    const [trendingMovies, setTrendingPictures] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();

    // console.log('details. location',location.state);



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
            setLoader(false);
            setError(null);
            setTrendingPictures(results);
        })
      .catch(error => {
        setError(error);
      })
     },[])    
    
    return (
        <>
            {error && <div>{error.message} </div>}
            {loader && <Loader></Loader>}
            <ListTrandingMovies arrayTrendingMovies={trendingMovies} state={{from: location}}> </ListTrandingMovies >
        </>
        
    );
};