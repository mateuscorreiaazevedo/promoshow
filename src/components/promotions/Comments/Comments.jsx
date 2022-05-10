import { CommentsContainer, CommentForm } from "./Style";
import { IoIosCloseCircle } from "react-icons/io";
import CommentsTree from "./Tree/Tree";
import ScreenModal from "../../modal/Modal";
import { commentService } from "../../../service/comments";
import { useEffect } from "react";
import { useApi } from "../../../hooks/useApi";

export default function PromotionComments({ promotionId, closeModal }) {
    const { call, items } = useApi([], commentService.getAll);

    useEffect(() => {
        promotionId && (call(promotionId))
    }, [promotionId])

    return (
       <ScreenModal sreenIsOpen={promotionId}>
            <CommentsContainer>
                <button className="close-btn" onClick={() => closeModal(null)}>
                    <IoIosCloseCircle />
                </button>
                <h1 className="title-comments">Comentários</h1>
                <CommentForm>
                    <textarea placeholder="Commentar..." className="comment-box"></textarea>
                    <button type="submit">Enviar</button>
                </CommentForm>
                <CommentsTree comments={items} />
            </CommentsContainer>
       </ScreenModal>
    )
}