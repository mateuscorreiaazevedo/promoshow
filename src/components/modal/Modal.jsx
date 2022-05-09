import ReactDOM from "react-dom";
import { Overlay, ScreenContainer } from "./Style";

export default function ScreenModal({ children, sreenIsOpen }) {
    if(!sreenIsOpen) {
        return null;
    }
    
    return ReactDOM.createPortal(
        <Overlay>
            <ScreenContainer>
                {children}
            </ScreenContainer>            
        </Overlay>
    , document.getElementById("modals-root"))
}