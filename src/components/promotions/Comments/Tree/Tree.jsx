import { ListComments } from "./Style"
import { VscKebabVertical } from "react-icons/vsc";

export default function CommentsTree({ comments, closeModal }) {
    if(!comments) {
        return <p>Carregando...</p>
    }
    return (
        <ListComments>
            {!!comments.length ? comments.map(item => (
                <li key={item.id}>
                    <img src={item.user.avatarUrl} alt={item.user.name} />
                    <div className="user-container">
                        <h3>{item.user.name}</h3>
                        <p>{item.comment}</p>
                    </div>
                        <section className="elipes-btn" onClick={closeModal}>
                            <VscKebabVertical />
                        </section>
                </li>
            )) : <p className="message-comments">Nenhum comentário listado para esta promoção</p>}
        </ListComments>
    )
}