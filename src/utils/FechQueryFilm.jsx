import { KEY, URL } from './FetchMovies';

function fechQueryFilm(query) {
    
    return (fetch(`${URL}search/movie?api_key=${KEY}&query=${query}`)
        .then(response => {
            if (response.ok) {
                // console.log(response);
                return response.json();
            }

            return Promise.reject(
                new Error(`Sorry, but we can't find any films with name ${query}. Try more`)
            );
        }))
};

export { fechQueryFilm };
    

    
    
    
