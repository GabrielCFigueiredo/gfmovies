import styled from "styled-components";


export const Wrapper = styled.button<{
    variant: 'danger' | 'text' | 'primary'
}> `  

background-color: var(--color-primary);
width: 180px;
height: 40px;
color: var(--bg-gray);
border-radius: 4px;
font-weight: 700;

`