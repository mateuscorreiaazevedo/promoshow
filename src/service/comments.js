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
    save: ({ comment, promotionId, userId = 1, parentId = null }) => (
        api.post("/comments", {
            comment, 
            promotionId: Number(promotionId),
            userId,
            parentId: parentId ? Number(parentId) : null
        })
    ),
    delete: (id) => (
        api.delete(`/comments/${id}`)
    )
}