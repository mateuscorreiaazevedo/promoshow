import PromotionHeader from "../components/promotions/Header/Header";
import PromotionList from "../components/promotions/List";
import { usePromotions } from "../hooks/usePromotions";
import { useSearch } from "../hooks/useSearch";

export default function Promotions() {
    const { handleSearch, search } = useSearch()
    const { load, promotions } = usePromotions(search)
    
    return (
        <>
            <PromotionHeader {...{search, handleSearch}} />
            <PromotionList {...{load, promotions}} />
        </>
    )
}