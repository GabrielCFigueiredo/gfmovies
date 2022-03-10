import styled from "styled-components";


export const Wrapper = styled.label `
display: flex;
flex-direction: column;
justify-content: space-between;

height: 56px;

`
export const Label = styled.span `
font-size: 14px;
font-weight: 500;
color: #274060;
position: relative;
left: 5px;
`

export const CampInput = styled.input `
height: 41px;
width: 441px;
font-size: 18px;
font-weight: 500;
color: #274060;
outline: none;
border: 1px solid black;
border-radius: 4px;
background-color: transparent;



::placeholder{
    position: relative;
    left: 20px;
    
}


`