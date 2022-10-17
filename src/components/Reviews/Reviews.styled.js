import styled from 'styled-components';

export const TitleError = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    color:  ${p => p.theme.colors.primary};
`

export const TitleAuthor = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
    color:  ${p => p.theme.colors.primary};
   
`

export const TextReviews = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
   
`
export const ItemReviews = styled.li`
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.l};
`


