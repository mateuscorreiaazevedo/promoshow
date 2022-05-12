import { api } from "./base";

export const commentService = {
    getAll: (promotionId) => (
        api.get("/comments", {
            params: {
                promotionId,
                _expand: "user"
            }
        })
    ),
    save: ({ comment, promotionId, userId = 1}) => (
        api.post("/comments", {comment, promotionId: Number(parseInt(promotionId)), userId})
    ),
    delete: (id) => (
        api.delete(`/comments/${id}`)
    )
}