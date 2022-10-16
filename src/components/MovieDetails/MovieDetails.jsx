import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fechFilmDetails } from '../../utils/FechFilmDetails';
import { Box } from '../Box/Box';
import { NavLink } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FilmTitle,Score,OverviewTitle,ButtonGoBack,Overview,GenresTitle,NavLinkMoviesDetails,AddInformation } from './MovieDetails.styled';

export const MovieDetails = () => {
    const { renderId } = useParams();
    const [filmDetails, setFilmsDetails]  = useState('null');
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    

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
   


    const goBack = () => navigate(-1);


    return (
        <>
            
            <ButtonGoBack onClick={goBack}>
                <RiArrowGoBackFill></RiArrowGoBackFill> goBack
            </ButtonGoBack>
            <Box as="section" p={4} display="flex" boxShadow="0 5px 5px -5px rgba(0, 0, 0, .5)"> 
            
                <img src={`https://www.themoviedb.org/t/p/w500${poster_path}`} alt={title} width='300' />
                <Box p={4} >
                    <FilmTitle>{original_title} {receiveYear(release_date)}</FilmTitle>
                    <Score> User score: {receivePercentage(vote_average)} % </Score>
                    <OverviewTitle>Overview</OverviewTitle>
                    <Overview>{overview}</Overview>
                    <GenresTitle>Genres</GenresTitle>
                    {genres && <p>{ genres.map(item => item.name ).join(', ')}</p>}
                </Box>
                
            </Box>
            
            <Box boxShadow="0 5px 5px -5px rgba(0, 0, 0, .5)" display="block" p={4} >
                <AddInformation>Additional Information</AddInformation>
                <NavLinkMoviesDetails to="cast" > Cast</NavLinkMoviesDetails>
                <NavLinkMoviesDetails to="reviews"> Review</NavLinkMoviesDetails>
            </Box>
        </>

    )
}

// www.themoviedb.org/t/p/w500$/qvg75YJMfbHeDNirUrrgBMQImRn.jpg