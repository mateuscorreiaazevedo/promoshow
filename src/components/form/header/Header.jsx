import { Link } from "react-router-dom";
import { HeaderContainer } from "./Styles";

export default function FormHeader() {
    return (
        <HeaderContainer>
            <Link to="/" className="form-title">Promoshow</Link>
        </HeaderContainer>
    );
}