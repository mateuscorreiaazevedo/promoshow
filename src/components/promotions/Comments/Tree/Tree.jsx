import { useState } from "react";
import { CommentItem } from "../Comment-item";

export default function CommentsTree({ callback, items, promotionId }) {
    const currentComment = useState();
    const comments = items.filter(item => !item.parentId).map(comment => ({
            ...comment,
            childrens: items.filter(item => item.parentId === comment.id)
        })
    );
    
    if(!items) {
        return <p>Carregando...</p>
    };
    
    return (
        <div>
            {!!comments.length ? comments.map(item => (
                <CommentItem 
                    currentComment={currentComment} 
                    key={item.id}
                    callback={callback} 
                    promotionId={promotionId}
                    {...item} 
                />
            )) : 
                <p className="message-comments">
                    Nenhum comentário listado para esta promoção
                </p>
            }
        </div>
    );
}