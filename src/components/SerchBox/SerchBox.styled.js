import styled from 'styled-components';

export const Form = styled.form`
display:flex;
gap: ${p => p.theme.space[3]}px;
padding-left: ${p => p.theme.space[4]}px;

`
export const Input= styled.input`

font-size: ${p => p.theme.fontSizes.l};

`
export const Button= styled.button`
border-radius: ${p => p.theme.borders.normals};
font-size: ${p => p.theme.fontSizes.l};



`



