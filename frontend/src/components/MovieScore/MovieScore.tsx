import styled from "styled-components";
import MovieStar from "../MovieStar/MovieStar";

export default function MovieScore() {

    const score = 3.5
    const count = 13

    return (
        <Wrapper>
            <CardDiv >
                <WrapperScore>{score > 0 ? score.toFixed(1) : '-'}</WrapperScore>
            </CardDiv >
            <CardDiv  style={{marginLeft: "15px"}}>
                <MovieStar />
            </CardDiv >
            <CardDiv >
                <WrapperCount>{count} avaliações</WrapperCount>
            </CardDiv >
            
        </Wrapper>
    )
    
}

const Wrapper = styled.div ` 

width: 132px;
height: 62px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const WrapperScore = styled.p ` 

color: #FFBB3A;
font-weight: 700;
font-size: 16px;
`

const WrapperCount = styled.p ` 

color: #989898;
font-weight: 400;
font-size: 12px;
`

const CardDiv = styled.div `  

padding: 5px 0;
`