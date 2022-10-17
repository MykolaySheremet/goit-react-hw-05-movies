import { useState, useEffect, Suspense} from "react";
import { useParams, Outlet,useLocation} from "react-router-dom";
import { fechFilmDetails } from '../../utils/FechFilmDetails';
import { Box } from '../Box/Box';
import { RiArrowGoBackFill } from "react-icons/ri";
import NotFoundPictureBig from '../../img/bignophoto.jpg';
import { FilmTitle,Score,OverviewTitle,Overview,GenresTitle,NavLinkMoviesDetails,AddInformation,LinkGoBack } from './MovieDetails.styled';

const MovieDetails = () => {
    const { renderId } = useParams();
    const [filmDetails, setFilmsDetails] = useState('null');
    const [error, setError] = useState(null);
    // const navigate = useNavigate();
    const location = useLocation();
    // console.log("location.state.from",location.state.from);


    useEffect(() => {

        fechFilmDetails(Number(renderId))
            .then((response) => {
                // console.log(response)
                if (response.length === 0) {
                    setError(Error)
                    return Promise.reject(new Error(`Sorry, but we can't find Details this film. Try again.`))
                }
                setError(null);
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
    }

    function receivePercentage(number) {
        return (number*10).toFixed(0);
    }
   


    // const goBack = () => {
    //     return  <Navigate to="/" />;
    // }


    return (
        <>
            {error && <div>{error.message} </div>}
            <LinkGoBack to={location.state?.from?? "/movies"}> <RiArrowGoBackFill></RiArrowGoBackFill> </LinkGoBack>
            {/* <ButtonGoBack onClick={goBack}>
                <RiArrowGoBackFill></RiArrowGoBackFill> goBack
            </ButtonGoBack> */}
            <Box as="section" p={4} display="flex" boxShadow="0 5px 5px -5px rgba(0, 0, 0, .5)"> 
                
                {poster_path
                    ? <img src={`https://www.themoviedb.org/t/p/w500${poster_path}`} alt={title} width='300' />
                    : <img src={NotFoundPictureBig} alt={title} width='300' />
                }
                
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
                <NavLinkMoviesDetails to="cast" state={{ from: location.state?.from ?? '/movies' }} > Cast</NavLinkMoviesDetails>
                <NavLinkMoviesDetails to="reviews" state={{ from: location.state?.from ?? '/movies' }} > Review</NavLinkMoviesDetails>
            </Box>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </>

    )
}

export default MovieDetails;

