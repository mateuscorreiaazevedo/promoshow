import { Input, InputContainer, Label } from "./Style";

export default function FormInput({ type = "search", text, nameId, handleChange, defaultValue }) {
    return (
        <InputContainer>
            <Label htmlFor={nameId}>{text}:</Label>
            <Input 
                type={type} 
                name={nameId} 
                id={nameId}
                onChange={handleChange}
                defaultValue={defaultValue} 
            />
        </InputContainer>
    );
}