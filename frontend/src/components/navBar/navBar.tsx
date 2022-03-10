
import Logo from "../Logo/logo";
import { CardContact, Header, NameContact, Title } from "./navBar.styles";

export default function NavBar() {

    return (
        <Header>
            <div>
            <Title>GFMovie</Title>
            </div>
            <a href="https://github.com/GabrielCFigueiredo">
                <CardContact>
                    <Logo/>
                    <NameContact>/gabriel</NameContact>
                </CardContact>

            </a>
        </Header>
    )
    
}