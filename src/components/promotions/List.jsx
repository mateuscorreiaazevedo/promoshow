import { useState } from "react";
import PromotionCard from "./Card/Card";
import PromotionComments from "./Comments/Comments";
import DeleteScreen from "./Delete/Delete";

export default function PromotionList({ load, promotions }) {
    const [promotionId, setPromotionId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    
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
                    deletePromotion={setDeleteId}
                />
            )) : <p>Nenhum resultado encontrado...</p>}

            <PromotionComments 
                promotionId={promotionId}  
                closeModal={setPromotionId} 
            />
            <DeleteScreen 
                deleteId={deleteId}
                closeModal={setDeleteId}
            />
        </main>
    );
}