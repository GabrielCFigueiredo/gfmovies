import styled from "styled-components";
import Arrow from "../ArrowLeft/ArrowLeft";
import ArrowRight from "../ArrowRight/ArrowRight";

export default function Pagination() {

    return (
        <Wrapper>
            <Button disabled={false}>
                <Arrow/>
            </Button>
            <div>
                <Title>{`${1} de ${3}`}</Title>
            </div>
            <Button disabled={true}>
                <ArrowRight />  
            </Button>
             
        </Wrapper>
    )
    
}

const Wrapper = styled.div ` 

display: flex;
justify-content: center;
align-items: center;
gap: 16px;
margin-top: 20px;
`
const Title = styled.p ` 

margin: 0;
font-size: 12px;
  color: var(--color-primary);
`
const Button = styled.button ` 

:disabled{
    border: 1px solid #c2c2c2;
    cursor: unset; 

};
svg{
    filter: brightness(0) saturate(100%) invert(26%) sepia(19%) saturate(7395%) hue-rotate(234deg) brightness(89%) contrast(92%);
};
:disabled svg {
    filter: none;
}

`