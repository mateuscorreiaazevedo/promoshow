import PromotionCard from "./Card/Card";

export default function PromotionList({ load, promotions }) {

    if(load) {
        return <p>Carregando...</p>
    }

    return (
        <main>
            {promotions.map(promotion => (
                <PromotionCard {...promotion} key={promotion.id} />
            ))}
        </main>
    );
}