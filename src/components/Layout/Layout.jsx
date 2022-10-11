// import { Header } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Box } from '../Box/Box';
import { Outlet } from 'react-router-dom';




export const Layout = () => {
    return (
        <Box>
            <AppBar></AppBar>
            <Outlet></Outlet>
        </Box>
        

    )
}