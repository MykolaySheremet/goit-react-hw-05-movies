import { Box } from '../Box/Box';
import { TrendingItem } from './ListTrendingMovies.styled';

export const ListTrandingMovies = ({ arrayTrendingMovies }) => {
    // console.log(arrayTrendingMovies);
    return (
        
        <Box as="ul"  p={3} >
            {arrayTrendingMovies.map(({ title, id }) =>
                <li key={id}>
                    <TrendingItem to={`movies/${id}`} >{title}</TrendingItem>
                </li>)}
        </Box>
            )

}