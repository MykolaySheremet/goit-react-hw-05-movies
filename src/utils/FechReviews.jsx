import { KEY, URL } from './FetchMovies';

export const fechReviews = async (id) => {
        const response = await fetch(`${URL}movie/${id}/reviews?api_key=${KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`Sorry, but we can't find reviews information about this film. Try more`))
}
