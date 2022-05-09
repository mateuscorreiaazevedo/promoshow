import { useEffect } from "react";
import { useGet } from "../../hooks/useGet";
import { useForm } from "../../hooks/useForm";
import { useSubmit } from "../../hooks/useSubmit";
import { promotionService } from "../../service/promotions";
import FormInput from "./input/Input";
import PromotionSubmit from "./submit/Submit";

export default function PromotionForm({ id }) {
    const { call, items } = useGet([], promotionService.getById)
    const { values, setValue } = useForm(items);
    const { handleSubmit } = useSubmit(values);

    useEffect(() => {
        if(id) {
            call({id})
        }
    }, [id]);
    
    return (
        <form>
            <FormInput 
                nameId="title"
                text="Título"
                handleChange={setValue}
                defaultValue={items?.title ?? ""}
            />
            <FormInput 
                nameId="url"
                text="Link"
                handleChange={setValue}
                defaultValue={items?.url ?? ""}
            />
            <FormInput 
                nameId="imageUrl"
                text="Imagem (URL)"
                handleChange={setValue}
                defaultValue={items?.imageUrl ?? ""}
            />
            <FormInput 
                nameId="price"
                text="Preço"
                type="number"
                handleChange={setValue}
                defaultValue={items?.price ?? ""}
            />
            <PromotionSubmit 
                handleSubmit={(e) => handleSubmit(e, id)} 
            />
        </form>
    );
}