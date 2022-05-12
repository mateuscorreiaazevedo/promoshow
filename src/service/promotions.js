import { api } from "./base";

export const promotionService = {
    getAll: (params) => (
         api.get("/promotions?_embed=comments&_sort=id&_order=desc", { params })
    ),
    save: ({ title, url, imageUrl, price }) => (
         api.post("/promotions", { title, url, imageUrl, price:Number(price) })
    ),
    getById: ({ id }) => (
         api.get(`/promotions/${id}`)
    ),
    update: ({ title, url, imageUrl, price, id }) => (
         api.put(`/promotions/${id}`, { title, url, imageUrl, price:Number(price) })
    ),
    delete: (id) => (
        api.delete(`/promotions/${id}`)
    )
}