import { useState } from "react";
import PromotionCard from "./Card/Card";
import PromotionComments from "./Comments/Comments";

export default function PromotionList({ load, promotions }) {
    const [promotionId, setPromotionId] = useState(null);
    
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

            <PromotionComments 
                promotionId={promotionId}  
                closeModal={setPromotionId} 
            />
        </main>
    );
}