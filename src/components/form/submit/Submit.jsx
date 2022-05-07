import { SubmitButton, SubmitContainer } from "./Style";

export default function PromotionSubmit({ handleSubmit }) {

    return (
        <SubmitContainer>
            <SubmitButton type="submit" onClick={handleSubmit}>Salvar</SubmitButton>
        </SubmitContainer>
    )
}