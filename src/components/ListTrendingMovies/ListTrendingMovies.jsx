import { Box } from '../Box/Box';
import { TrendingItem } from './ListTrendingMovies.styled';
import { useLocation } from 'react-router-dom';

export const ListTrandingMovies = ({ arrayTrendingMovies }) => {
     const location = useLocation();

    // console.log(arrayTrendingMovies);
    return (
        
        <Box as="ul"  p={3} >
            {arrayTrendingMovies.map(({ title, id }) =>
                <li key={id}>
                    <TrendingItem to={`movies/${id}`} state={{ from: location }}>{title}</TrendingItem>
                </li>)}
        </Box>
            )

}