import { ListComments } from "./Style"
import { commentService } from "../../../../service/comments";
import { useEffect, useState } from "react";
import ElipsesTree from "./Elipses";

export default function CommentsTree({ id, user, comment, callback }) {
    const [deleteComment, setDeleteComment] = useState(null);
        
    useEffect(() => {
        if(deleteComment) {
            commentService.delete(deleteComment)
            .then(() => callback())
            .catch(() => console.error("deu ruim ao deletar comentário"))
        }
    }, [deleteComment])

    if(!comment) {
        return <p>Carregando...</p>
    }
    
    return (
        <ListComments>
                <li>
                    <img src={user.avatarUrl} alt={user.name} />
                    <div className="user-container">
                        <h3>{user.name}</h3>
                        <p>{comment}</p>
                    </div>
                    <ElipsesTree deleteComment={() => setDeleteComment(id)} />
                </li>
        </ListComments>
    )
}