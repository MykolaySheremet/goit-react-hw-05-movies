import { KEY, URL } from './FetchMovies';


export const fechCastsAboutFilm = async (id) => {
    const response = await fetch(`${URL}movie/${id}/credits?api_key=${KEY}`)
    
        if (response.ok) {
            return response.json();
        }
            return Promise.reject(new Error(`Sorry, but we can't find cast information about this film. Try more`))
}
    

