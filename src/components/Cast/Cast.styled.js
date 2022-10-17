import styled from 'styled-components';

export const Box = styled.ul`
display:flex;
flex-wrap: wrap;
gap: 15px;
`

export const LiItem = styled.li`
width: 180px;
font-size: ${p => p.theme.fontSizes.m};

`
export const TitleNameCast = styled.p`
margin-top: ${p => p.theme.space[4]}px;
font-weight: ${p => p.theme.fontWeights.bold};
`
export const TitleCaracter = styled.p`
margin-top: ${p => p.theme.space[3]}px;

`
