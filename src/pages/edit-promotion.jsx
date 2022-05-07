import { useParams } from "react-router-dom";
import PromotionForm from "../components/form/Form";
import FormHeader from "../components/form/header/Header";

export default function EditPromotion() {
    const { id } = useParams();

    return (
        <main>
            <FormHeader />
            <PromotionForm id={id ? Number.parseInt(id) : null} />
        </main>
    );
}