import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useSubmit } from "../../hooks/useSubmit";
import { promotionService } from "../../service/promotions";
import FormInput from "./input/Input";
import PromotionSubmit from "./submit/Submit";

export default function PromotionForm({ id }) {
    const [promotion, setPromotion] = useState();
    const { values, setValue } = useForm(promotion);
    const { handleSubmit } = useSubmit(values);

    useEffect(() => {
        if(id) {
            promotionService.getById({id})
                .then(res => setPromotion(res.data))
                .catch(() => console.error("algum problema no getById"))
        }
    }, [id])
    
    return (
        <form>
            <FormInput 
                nameId="title"
                text="Título"
                handleChange={setValue}
                defaultValue={promotion?.title ?? ""}
            />
            <FormInput 
                nameId="url"
                text="Link"
                handleChange={setValue}
                defaultValue={promotion?.url ?? ""}
            />
            <FormInput 
                nameId="imageUrl"
                text="Imagem (URL)"
                handleChange={setValue}
                defaultValue={promotion?.imageUrl ?? ""}
            />
            <FormInput 
                nameId="price"
                text="Preço"
                type="number"
                handleChange={setValue}
                defaultValue={promotion?.price ?? ""}
            />
            <PromotionSubmit 
                handleSubmit={(e) => handleSubmit(e, id)} 
            />
        </form>
    );
}