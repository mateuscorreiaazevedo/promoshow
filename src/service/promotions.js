import { api } from "./base";

export const promotionService = {
    getAll: (params) => {
        return api.get("/promotions?_embed=comments&_sort=id&_order=desc", { params })
    },
    save: ({ title, url, imageUrl, price }) => {
        return api.post("/promotions", { title, url, imageUrl, price:Number(price) })
    },
    getById: ({ id }) => {
        return api.get(`/promotions/${id}`)
    },
    update: ({ title, url, imageUrl, price, id }) => {
        return api.put(`/promotions/${id}`, { title, url, imageUrl, price:Number(price) })
    }
}