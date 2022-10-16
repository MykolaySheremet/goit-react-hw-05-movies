import SerchBox from "components/SerchBox/SerchBox"
import { useState, useEffect } from "react";
import { useSearchParams} from "react-router-dom";
import { fechQueryFilm } from '../utils/FechQueryFilm';
import { Box } from '../components/Box/Box';
import { ListFindFilms } from '../components/ListFindFilms/ListFindFilms';
import { Loader } from '../components/Loader/Loader';
import Notiflix from 'notiflix';



export const Movies = () => {
    const [findFilm, setFindFilm ] = useState([]);
    const [searchParams, setSerchParams] = useSearchParams();
    const serchQuery = searchParams.get('query');
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);

    // console.log(serchQuery);

    useEffect(() => {
        // console.log('works')

        if (serchQuery === "" || serchQuery === null) {
            return ;
        }

        setLoader(true);

        fechQueryFilm(serchQuery)
            .then(({ results }) => { 
                // console.log(results.length);
                if (results.length === 0) {
                    // console.log('works');
                    setFindFilm([]);
                    setLoader(false);
                    setError(Error);
                return Promise.reject(new Error(`Sorry, but we can't film with name ${serchQuery}. Try again.`))
                }
                setLoader(false);
                setFindFilm(results);
                setError(null);
            })
            .catch(error => {
        setError(error);
      })
    
    }, [serchQuery]);




    const serchFilm = value => {

        if (value === serchQuery) {
            return Notiflix.Notify.failure('Enter new query for serch, result of this query you already can see ');
        }
        setSerchParams(value !== "" ? {query:value} : {})

    }
    

  return (
    <main>
          <SerchBox onChange={serchFilm} value={serchQuery} />
          {loader && <Loader></Loader>}
          {error && <div>{error.message} </div>}
        {findFilm &&
        <Box as="ul" p={4}>
            {<ListFindFilms arrayFindFilms={findFilm}></ListFindFilms>}
        </Box>      
              
          } 
    </main>
  )
}
