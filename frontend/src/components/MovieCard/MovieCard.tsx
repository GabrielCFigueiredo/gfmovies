import styled from "styled-components";
import Button from "../Button/Button";
import MovieScore from "../MovieScore/MovieScore";

export default function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <Wrapper>
            <WrapperDiv>
                <div>
                    <Image src={movie.image} alt={movie.title}/>
                </div>
                <div>
                    <MovieScore />
                </div>
                <div>
                <Button 
                    variant="primary"
                    label="Avaliar"
                    />
                 </div>  
            </WrapperDiv>
            <WrapperDiv>
                <div>
                    <Image src={movie.image} alt={movie.title}/>
                </div>
                <div>
                    <MovieScore />
                </div>
                <div>
                <Button 
                    variant="primary"
                    label="Avaliar"
                    />
                 </div>  
            </WrapperDiv>
            <WrapperDiv>
                <div>
                    <Image src={movie.image} alt={movie.title}/>
                </div>
                <div>
                    <MovieScore />
                </div>
                <div>
                <Button 
                    variant="primary"
                    label="Avaliar"
                    />
                 </div>  
            </WrapperDiv>
            <WrapperDiv>
                <div>
                    <Image src={movie.image} alt={movie.title}/>
                </div>
                <div>
                    <MovieScore />
                </div>
                <div>
                <Button 
                    variant="primary"
                    label="Avaliar"
                    />
                 </div>  
            </WrapperDiv>
            <WrapperDiv>
                <div>
                    <Image src={movie.image} alt={movie.title}/>
                </div>
                <div>
                    <MovieScore />
                </div>
                <div>
                <Button 
                    variant="primary"
                    label="Avaliar"
                    />
                 </div>  
            </WrapperDiv>
            <WrapperDiv>
                <div>
                    <Image src={movie.image} alt={movie.title}/>
                </div>
                <div>
                    <MovieScore />
                </div>
                <div>
                <Button 
                    variant="primary"
                    label="Avaliar"
                    />
                 </div>  
            </WrapperDiv>
            
        </Wrapper>
    )
    
}

const Wrapper = styled.div `  

display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 32px;
margin-top: 20px;
border: 1px solid red;
max-height: 100vh;
width: 100%;
place-items: center;

`

const WrapperDiv = styled.div `  

border: 1px solid blue;
height: 349px;
width: 260px;
display:flex;
justify-content: start;
align-items: center;
flex-direction: column;
gap: 32px;
background-color: #fff;
border-radius: 10px;

`
const Image = styled.img `  

width: 260px;
height: 147px;
border-radius: 10px 10px 0 0;
`
