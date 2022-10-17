import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home';
// import { MovieDetails } from './MovieDetails/MovieDetails';
import { NotFound } from './NotFound/NotFound';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(()=> import('../components/Reviews/Reviews'))
const Cast = lazy(()=> import("../components/Cast/Cast"))


export const App = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <Routes>

        <Route path="/" element={<Layout></Layout>}>
          {/* <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} /> */}
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:renderId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews/>} />
            <Route path="cast" element={ <Cast/>} />
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Route>

      </Routes>
    </div>
  );
};
