import SerchBox from "components/SerchBox/SerchBox"
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fechQueryFilm } from '../utils/FechQueryFilm';
import { Box } from '../components/Box/Box';
import { ListFindFilms } from '../components/ListFindFilms/ListFindFilms';



export const Movies = () => {
    const [findFilm, setFindFilm ] = useState([]);
    const [searchParams, setSerchParams] = useSearchParams();
    const serchQuery = searchParams.get('query');
    const [error, setError] = useState(null);

    console.log(serchQuery);

    useEffect(() => {
        console.log('works')

        if (serchQuery === "" || serchQuery === null) {
            return;
        }

        fechQueryFilm(serchQuery)
            .then(({ results }) => { 
                console.log(results);
                if (results === 0) {
                // setLoader(false);
                // setError(Error)
                return Promise.reject(new Error(`Sorry, but we can't film with name ${serchQuery}. Try again.`))
                }

                setFindFilm(results);
            })
            .catch(error => {
        setError(error);
      })
    
    }, [serchQuery]);




    const serchFilm = value => {
        setSerchParams(value !== "" ? {query:value} : {})

        console.log(value);
    }
    

  return (
    <main>
        <SerchBox onChange={serchFilm} />
        {findFilm &&
        <Box as="ul" p={4}>
            {<ListFindFilms arrayFindFilms={findFilm}></ListFindFilms>}
        </Box>      
              
          } 
    </main>
  )
}
