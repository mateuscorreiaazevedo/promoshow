import { api } from "./base";

export const commentService = {
    getAll: (promotionId) => (
        api.get("/comments", {
            params: {
                promotionId,
            }
        })
    )
}