import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fechReviews } from '../../utils/FechReviews';
import { Box } from '../Box/Box';
import {TitleError,TitleAuthor,TextReviews,ItemReviews} from './Reviews.styled'



const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { renderId } = useParams();

    useEffect(() => {

        fechReviews(Number(renderId))
            .then((response) => {
                console.log(response.results);

                setReviews(response);
                
            })
            .catch(error => {
                Promise.reject(new Error(`${error.message}`))
            })
    },[renderId]);

    if (!reviews) {
        return null
    }

    console.log(reviews);




    return (
        <Box as="ul" p={4}>
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

// const Reviews = () => {

//     const [reviews, setResponse] = useState(null)
//     const { renderId } = useParams();
    
//     useEffect(() => {
//         fechReviews(Number(renderId))
//             .then(setResponse)
//             .catch(error => {
//                 Promise.reject(new Error(`${error.message}`))
//             })
//     }, [renderId]);

//     if (!reviews) {
//         return null
//     }

//     const { results } = reviews;

//     return (<ul>
//         {results.length !== 0
//             ? results.map(({ id, author, content }) => {
//                 return (
//                     <ItemReviews key={id}>
//                         <TitleAuthor>Author: {author}</TitleAuthor>
//                         <TextReviews> { content}</TextReviews>
//                     </ItemReviews>
//                     )
//                 })
//             : <p>  Sorry, we haven`t reviews yet!</p>
//         }
//     </ul>)
// }

// export default Reviews;



