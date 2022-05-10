import { ListComments } from "./Style"

export default function CommentsTree({ comments }) {
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
                        <p>"{item.comment}"</p>
                    </div>
                </li>
            )) : <p>Nenhum comentário listado para esta promoção</p>}
        </ListComments>
    )
}