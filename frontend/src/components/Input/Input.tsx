import { InputHTMLAttributes } from "react";
import { CampInput, Label, Wrapper } from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

    label ?: string
}

export default function Input({ label, ...props } : InputProps) {


    return <Wrapper>
                <Label>
                    {label}
                </Label>
                <CampInput 
                {...props}
                type="email" />
            </Wrapper>
    
}