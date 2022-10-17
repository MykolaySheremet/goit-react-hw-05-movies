import { Box } from '../Box/Box';
import { NavLink,useLocation } from 'react-router-dom';
// import { useLocation } from "react-router-dom";



export const ListFindFilms = ({ arrayFindFilms }) => {
    const location = useLocation();
    // console.log(location);

    return (

        <Box as="ul"  p={3} >
            {arrayFindFilms.map(({ title, id }) =>
                <li key={id}>
                    <NavLink to={`${id}`} state={{ from: location }} >{title}</NavLink>
                </li>)}
        </Box>
    )
}