import styled from "styled-components";
import MovieCard from "../components/MovieCard/MovieCard";
import MovieScore from "../components/MovieScore/MovieScore";
import MuvieStar from "../components/MovieStar/MovieStar";
import Pagination from "../components/Pagination/Pagination";


export default function Home() {

    return (
        <>
            <Pagination/> 
            <MovieCard />
        </>
    )
};

const Wrapper = styled.div ` 

display: flex;
justify-content: center;
`