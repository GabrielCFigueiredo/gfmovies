import { ReactComponent as StarFull } from "../../assets/star-full.svg";
import { ReactComponent as StarHalf } from "../../assets/star-half.svg";
import { ReactComponent as StarEmpty } from "../../assets/star-empty.svg";
import styled from "styled-components";


export default function MovieStar() {

    return (
        <Wrapper>
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </Wrapper>
    )
    
}

const Wrapper = styled.div ` 

width: 132px;
height: 26.4px;
`