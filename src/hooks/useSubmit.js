import { promotionService } from "../service/promotions";
import { useNavigate } from "react-router-dom";

export const useSubmit = (values) => {
    const navigate = useNavigate();
       
    function handleSubmit(e, id) {
        e.preventDefault();
        (async () => {
            if(id) {
                try {
                    await promotionService.update({ ...values, id })
                    navigate("/")
                } catch(err) {
                    console.error("algo errado no update")
                }
            } else {
                try {
                    await promotionService.save(values)
                    navigate("/")
                } catch(err) {
                    console.error("algo errado ao enviar o save")
                }
            }
        })()
    }

    return {
        handleSubmit
    };
}