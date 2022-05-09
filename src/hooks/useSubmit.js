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
                    console.error(err.message, "update error")
                }
            } else {
                try {
                    await promotionService.save(values)
                    navigate("/")
                } catch(err) {
                    console.error(err.message, "save error")
                }
            }
        })()
    }

    return {
        handleSubmit
    };
}