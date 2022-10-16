import { Box } from '../Box/Box';
import { ImHome3, ImFilm } from "react-icons/im";
import {NavItem} from './NavItem.styled'

const navItems = [
  { href: '/', text: 'Home', icon: ImHome3 },
  { href: 'movies', text: 'Movies', icon: ImFilm },
];


export const AppBar = () => {
    return (
        <Box as="header"  p={4} boxShadow="0 5px 5px -5px rgba(0, 0, 0, .5)" mb={4} >
            <Box as="nav" gridGap={5} display='flex'>
                {navItems.map(({ href, text, icon: Icon }) => <NavItem to={href} key={href} end
                    > <Icon size="32"></Icon>{text}</NavItem>)}
            </Box>
        </Box>
    )
}