import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fechReviews } from '../../utils/FechReviews';
import { Box } from '../Box/Box';
import {TitleError,TitleAuthor,TextReviews,ItemReviews} from './Reviews.styled'



const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { renderId } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {

        fechReviews(Number(renderId))
            .then((response) => {
                // console.log(response.results);

                setReviews(response);
                setError(null);
                
            })
            .catch(error => {
                setError(error)
            })
    },[renderId]);

    if (!reviews) {
        return null
    }

    // console.log(reviews);




    return (
        <Box as="ul" p={4}>
            {error && <div>{error.message} </div>}
            {reviews.results.length !== 0
                
                ? reviews.results.map(({ id, author, content }) => {
                    //  console.log(reviews);
                    return (
                        <ItemReviews key={id}>
                            <TitleAuthor>Author: {author}</TitleAuthor>
                            <TextReviews>{content}</TextReviews>
                        </ItemReviews>
                    )
                })
                : <TitleError> Sorry, we haven`t reviews yet!</TitleError>
                }
                
        </Box>
    )
}


export default Reviews;





