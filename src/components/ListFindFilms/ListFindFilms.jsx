import { Box } from '../Box/Box';
import { NavLink } from 'react-router-dom';

export const ListFindFilms = ({ arrayFindFilms }) => {
    return (

        <Box as="ul"  p={3} >
            {arrayFindFilms.map(({ title, id }) =>
                <li key={id}>
                    <NavLink to={`movies/${id}`} >{title}</NavLink>
                </li>)}
        </Box>
    )
}