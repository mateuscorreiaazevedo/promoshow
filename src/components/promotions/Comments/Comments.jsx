import { CommentsContainer, CommentForm } from "./Style";
import { IoIosCloseCircle } from "react-icons/io";
import CommentsTree from "./Tree/Tree";
import ScreenModal from "../../modal/Modal";
import { commentService } from "../../../service/comments";
import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";

export default function PromotionComments({ promotionId, closeModal }) {
    const { call, items } = useApi([], commentService.getAll);
    const [comment, setComment] = useState("")

    
    useEffect(() => {
        promotionId && (call(promotionId))
    }, [promotionId])
    
    function onChangeComment(e) {
        const { name, value } = e.target;
        setComment(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    
    function sendComment(e) {
        e.preventDefault();
        commentService
            .save({promotionId, ...comment})
            .then(() => {
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
                    />
                    <button type="submit" onClick={sendComment}>Enviar</button>
                </CommentForm>
                <CommentsTree comments={items} closeModal={closeComments}/>
            </CommentsContainer>
       </ScreenModal>
    )
}