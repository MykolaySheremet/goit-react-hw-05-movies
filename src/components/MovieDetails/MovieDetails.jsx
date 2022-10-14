import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fechFilmDetails } from '../../utils/FechFilmDetails';
import { Box } from '../Box/Box';
import { NavLink } from 'react-router-dom';

export const MovieDetails = () => {
    const { renderId } = useParams();
    const [filmDetails, setFilmsDetails]  = useState('null');
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        setLoader(true);

        fechFilmDetails(renderId)
            .then((response) => {
                console.log(response)
                if (response.length === 0) {
                    setLoader(false);
                    setError(Error)
                    return Promise.reject(new Error(`Sorry, but we can't find Details this film. Try again.`))
                }
                setFilmsDetails(response);
            })
            .catch(error => {
            setError(error);
        })
    }, [renderId])
    
    if (!filmDetails) {
        return null;
    }

    const { poster_path, original_title,title, release_date, genres, overview, vote_average } = filmDetails;
    
    function receiveYear(dataFilm) {

        return new Date(dataFilm).getFullYear()
        // const data = new Date(dataFilm);
        // const year = data.getFullYear();
        // return year;
    }
    
    // const data = new Date(release_date)
    // const year = data.getFullYear()
    // console.log(vote_average);

    function receivePercentage(number) {
        return (number*10).toFixed(0);
    }
   






    return (
        <>
        <Box as="section" p={4} display="flex" > 
            
            <img src={`https://www.themoviedb.org/t/p/w500${poster_path}`} alt={title} width='300' />
            <h2>{original_title} {receiveYear(release_date)}</h2>
            <p> User score: {receivePercentage(vote_average)} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Overview</h4>
            {genres && <p>{ genres.map(item => item.name ).join(', ')}</p>}
            {/* <p>{genres.map((item)=>item.name)}</p> */}
            </Box>
            
        <div>Additional Information
                <NavLink to="cast" > Cast</NavLink>
                <NavLink to="reviews"> Review</NavLink>
        </div>
            </>

    )
}

// www.themoviedb.org/t/p/w500$/qvg75YJMfbHeDNirUrrgBMQImRn.jpg