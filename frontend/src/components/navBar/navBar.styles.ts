import styled from "styled-components";

export const Header = styled.div ` 

height: 60px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--color-primary);
color: #fff;
padding: 0 15px;

@media  (min-width:700px) {
    padding: 0 50px;
}

`
export const CardContact = styled.div ` 

display: flex;
align-items: center;

font-size: 12px;
cursor: pointer;
`
export const Title = styled.h1 `  

font-weight: 700;
font-family: 'Open Sans', sans-serif;
font-size: 24px;
`
export const NameContact = styled.span `  

margin: 0 0 0 10px;
`