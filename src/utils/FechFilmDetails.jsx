import { KEY, URL } from './FetchMovies';

console.log("key", URL);
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

function fechFilmDetails (id) {
    
    return (fetch(`${URL}/movie/${id}?api_key=${KEY}`)
        .then(response => {
            if (response.ok) {
                console.log("works")
                return response.json();
            }

            return Promise.reject(
                new Error(`Sorry, but we can't find details information about this film. Try more`)
            );
        }))
};

export {fechFilmDetails};

