import { useEffect, useState } from "react";
import { promotionService } from "../service/promotions";
import { debouncePromise } from "../utils/debounceHelper";

export const usePromotions = (search) => {
    const [promotions, setPromotions] = useState([]);
    const [load, setLoad] = useState(true);
    const { debounced } = debouncePromise(promotionService.getAll)
    const params = {};
    
    if(search) {
        params.title_like = search;
    }

    
    useEffect(() => {
        debounced(params)
            .then(response => setPromotions(response.data))
            .catch(err => console.error(err.message))
            .finally(() => setLoad(false))
    }, [search])

    
    return {
        promotions,
        load,
    };
}