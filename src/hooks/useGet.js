import { useState } from "react"

export const useGet = (type, service ) => {
    const [items, setItems] = useState(type)

    async function call(params) {
        try {
            const response = await service(params)
            setItems(response.data)
        } catch(err) {
            console.error(err.message, "useApi error");
        }
    }
    
    return {
        call,
        items
    }
}