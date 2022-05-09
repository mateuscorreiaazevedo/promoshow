import { useParams } from "react-router-dom";
import PromotionForm from "../components/form/Form";

export default function EditPromotion() {
    const { id } = useParams();

    return (
        <main>
            <h1 className="title-promoshow">Promoshow</h1>
            <PromotionForm id={id ? Number.parseInt(id) : null} />
        </main>
    );
}