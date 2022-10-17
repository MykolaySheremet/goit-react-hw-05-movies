// import { Header } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Box } from '../Box/Box';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';




export const Layout = () => {
    return (
        <Box>
            <AppBar></AppBar>
            <Suspense fallback={null}>
                <Outlet></Outlet>
            </Suspense>
        </Box>
        

    )
}