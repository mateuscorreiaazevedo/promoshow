import ScreenModal from "../../modal/Modal";
import { ButtonsArea, DeleteSection, DeleteTitle } from "./Style";
import { promotionService } from "../../../service/promotions";

export default function DeleteScreen({ closeModal, deleteId }) {

    async function deletePromotion() {
        try {
            await promotionService.delete(deleteId)
            window.location.reload()
        } catch (err) {
            console.error(err.message);
        }
    }

    if(!deleteId) {
        return null
    }
    
    return (
        <ScreenModal sreenIsOpen={deleteId}>
            <DeleteSection>
                <DeleteTitle>Você deseja Excluir esta promoção?</DeleteTitle>
                
                <ButtonsArea>
                    <button className="btn-ok" onClick={deletePromotion}>Sim</button>
                    <button className="btn-close" onClick={() => closeModal(null)}>Cancelar</button>
                </ButtonsArea>
            </DeleteSection>
        </ScreenModal>
    )
}