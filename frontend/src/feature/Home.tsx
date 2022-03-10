import styled from "styled-components";
import Pagination from "../components/Pagination/Pagination";


export default function Home() {

    return (
        <Wrapper>
            <Pagination/>  
        </Wrapper>
    )
};

const Wrapper = styled.div ` 

display: flex;
justify-content: center;
`