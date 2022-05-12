import { CommentsContainer, CommentForm } from "./Style";
import { IoIosCloseCircle } from "react-icons/io";
import CommentsTree from "./Tree/Tree";
import ScreenModal from "../../modal/Modal";
import { commentService } from "../../../service/comments";
import { useEffect, useState, useRef } from "react";
import { useApi } from "../../../hooks/useApi";

export default function PromotionComments({ promotionId, closeModal }) {
    const { call, items } = useApi([], commentService.getAll);
    const [comment, setComment] = useState("")
    const commentRef = useRef()
    
    useEffect(() => {
        promotionId && (call(promotionId))
    }, [promotionId])
    
    function onChangeComment(e) {
        const { value } = e.target;
        setComment(value)
    }
    
    function sendComment(e) {
        e.preventDefault();
        commentService
            .save({promotionId, comment})
            .then(() => {
                commentRef.current.value = ""
                call(promotionId)
            })
            .catch(err => console.error(err.message))
    }

    function closeComments() {
        window.location.reload()
        closeModal(null)
    }

    return (
       <ScreenModal sreenIsOpen={promotionId}>
            <CommentsContainer>
                <button className="close-btn" onClick={closeComments}>
                    <IoIosCloseCircle />
                </button>
                <h1 className="title-comments">Comentários</h1>
                <CommentForm>
                    <textarea
                        placeholder="Comentar..." 
                        className="comment-box" 
                        onChange={onChangeComment}
                        ref={commentRef}
                    />
                    <button type="submit" onClick={sendComment}>
                        Enviar
                    </button>
                </CommentForm>
                    <CommentsTree 
                        items={items} 
                        callback={() => call(promotionId)}
                        promotionId={promotionId}
                    />
            </CommentsContainer>
       </ScreenModal>
    )
}