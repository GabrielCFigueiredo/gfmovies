import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

export default function Form(){

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return  <Wrapper>
                <FormListWrapper>
                    <ContainerImage>
                        <Image src={movie.image}  alt={movie.title}/>
                    </ContainerImage>
                    <ContainerTitle>
                        <p>{movie.title}</p>
                    </ContainerTitle>
                    <ContainerInput>
                        <Input
                        label="Informe seu Email"
                        placeholder="email"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label>informe sua avaliação</label>
                    </ContainerInput>
                    <ContainerInput>
                    <Select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Select>
                    </ContainerInput>
                    <ContainerButton>
                        <Button 
                        variant="primary"
                        label="Salvar"
                        />
                        
                        
                    </ContainerButton>
                </FormListWrapper>
                <ContainerButton>
                    <Link to={'/'}>
                    <Button
                        variant="primary"
                        label="Cancelar"
                        />
                    </Link>
                      
                    </ContainerButton>
            </Wrapper>
}

const Wrapper = styled.div `  

display: flex;
justify-content: center
`

const FormListWrapper = styled.form`
display: grid;
grid-template-columns: 1fr;
gap: 16px;
margin-top: 40px;
background-color: #fff;
width: 480px;
height: 620px;
border-radius: 8px;
`
const ContainerImage = styled.div ` 

display: flex;
justify-content: center;
gap: 16px;
`
const Image = styled.img `  

width: 480px;
height: 270px;
border-radius: 10px;
`
const ContainerTitle = styled.div `  

display: flex;
justify-content: center;
gap: 16px;
`
const ContainerInput = styled.div `  
padding-bottom: 20px;
display: flex;
justify-content: center;
gap: 8px;

`
const ContainerButton = styled.div `  

display: flex;
justify-content: center;
gap: 16px;
`
const Select = styled.select `  

height: 41px;
width: 441px;
border: 1px solid black;
border-radius: 4px;
background-color: transparent;
-webkit-appearance: none;
-moz-appearance: none;

`



