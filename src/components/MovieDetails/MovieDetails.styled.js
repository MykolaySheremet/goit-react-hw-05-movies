import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Img = styled(img)'

// display: block
//

export const FilmTitle = styled.h2`
margin-bottom: ${p => p.theme.space[4]}px;
`

export const Score = styled.p`
margin-bottom: ${p => p.theme.space[3]}px;
`
export const OverviewTitle = styled.h3`
margin-bottom: ${p => p.theme.space[4]}px;
`

export const Overview = styled.p`
margin-bottom: ${p => p.theme.space[3]}px;
`

export const GenresTitle = styled.h3`
margin-bottom: ${p => p.theme.space[4]}px;
`
export const NavLinkMoviesDetails = styled(NavLink)`
display: block;
margin-bottom: ${p => p.theme.space[3]}px;
`

export const AddInformation = styled.h4`
margin-bottom: ${p => p.theme.space[4]}px;
`
export const ButtonGoBack = styled.button`
color: ${p => p.theme.colors.primary};
padding: ${p => p.theme.space[2]}px;
font-weight: ${p => p.theme.fontWeights.bold};
margin-left: ${p => p.theme.space[4]}px;
`