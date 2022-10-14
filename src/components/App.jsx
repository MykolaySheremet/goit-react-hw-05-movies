import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { NotFound } from './NotFound/NotFound';




// console.log(FechTrendingMovies)


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home/>}/>
          {/* <Route path='home'  element={<Fech>home</Fech>}></Route> */}
          <Route path="movies" element={<div>movies</div>} />
          <Route path="movies/:renderId" element ={<MovieDetails></MovieDetails>}></Route>
          {/* <Route path="getes" element={<div>getes</div>}></Route> */}
          <Route path="*" element={<NotFound />}/>
        </Route>

      </Routes>
    </div>
  );
};
