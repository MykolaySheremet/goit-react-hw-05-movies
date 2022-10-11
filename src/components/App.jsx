import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path='home'  element={<div>Homes</div>}></Route>
          <Route path="movies" element={<div>Movies</div>}></Route>
        </Route>

      </Routes>
    </div>
  );
};
