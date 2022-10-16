const KEY = 'd10ae627731be10b94f32c7519263259';
const URL = 'https://api.themoviedb.org/3/';

function fechTrendingMovies () {
    
    return (fetch(`${URL}trending/movie/day?api_key=${KEY}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(
                new Error(`Sorry, but we can't find any films which are in trending today. Try more`)
            );
        }))
};

// console.log(FechTrendingMovies);
// console.log("FechTrendingMovies");


export { fechTrendingMovies, KEY,URL };
