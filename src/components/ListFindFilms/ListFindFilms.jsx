import { Box } from '../Box/Box';
import { useLocation } from 'react-router-dom';
import { LinkFindFilms } from './ListFind.styled';
// import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';



export const ListFindFilms = ({ arrayFindFilms }) => {
    const location = useLocation();
    // console.log(arrayFindFilms);
    // console.log(location);

    return (

        <Box as="ul"  p={3} >
            {arrayFindFilms.map(({ title, id }) =>
                <li key={id}>
                    <LinkFindFilms to={`${id}`} state={{from: location }} >{title}</LinkFindFilms>
                </li>)}
        </Box>
    )
}

ListFindFilms.propTypes = {
    arrayFindFilms: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }))
}