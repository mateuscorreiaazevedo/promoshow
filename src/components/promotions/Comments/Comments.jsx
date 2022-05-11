import { CommentsContainer, CommentForm } from "./Style";
import { IoIosCloseCircle } from "react-icons/io";
import CommentsTree from "./Tree/Tree";
import ScreenModal from "../../modal/Modal";
import { commentService } from "../../../service/comments";
import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { useRef } from "react";

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
                console.log(commentRef.current.value)
                commentRef.current.value = ""
                setComment("")
                call(promotionId)
            })
            .catch(err => console.error(err.message))
    }

    
    function closeComments() {
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
                        name="comment"
                        ref={commentRef}
                    />
                    <button type="submit" onClick={sendComment}>
                        Enviar
                    </button>
                </CommentForm>
                {!!items.length ? items.map((item) => (
                    <CommentsTree {...item} key={item.id} callback={() => call(promotionId)} />
                )) : <p className="message-comments">Nenhum comentário listado para esta promoção</p>}
            </CommentsContainer>
       </ScreenModal>
    )
}