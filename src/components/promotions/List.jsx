import PromotionCard from "./Card/Card";
import { IoIosCloseCircle } from "react-icons/io";
import ScreenModal from "../modal/Modal";
import PromotionComments from "./Comments/Comments";
import { useEffect, useState } from "react";
import { commentService } from "../../service/comments";
import { useGet } from "../../hooks/useGet";

export default function PromotionList({ load, promotions }) {
    const [promotionId, setPromotionId] = useState(null);
    const { call, items} = useGet([], commentService.getAll);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if(promotionId) {
            call(promotionId).then(() => setOpenModal(true))
        }
    }, [promotionId])

    function closeModal() {
        setPromotionId(null)
        setOpenModal(false)
    }

    if(load) {
        return <p>Carregando...</p>
    }

    return (
        <main>
            {!!promotions.length ? promotions.map(promotion => (
                <PromotionCard 
                    {...promotion} 
                    key={promotion.id}
                    screenIsOpen={setPromotionId}
                />
            )) : <p>Nenhum resultado encontrado...</p>}
            <ScreenModal sreenIsOpen={openModal}>
                <PromotionComments>
                    <button className="close-btn" onClick={closeModal}>
                        <IoIosCloseCircle />
                    </button>
                    <h1 className="title-comments">Comentários</h1>
                    {items.length ? items.map(item => (
                        <p className="comments">"{item.comment}"</p>
                    )) : <p>Nenhum comentário listado para esta promoção.</p>}
                </PromotionComments>
            </ScreenModal>
        </main>
    );
}