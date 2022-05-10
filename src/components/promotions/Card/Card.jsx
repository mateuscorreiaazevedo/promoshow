import { Link } from "react-router-dom";
import { CardComments, CardFooter, CardImage, CardInfo, CardLinks, CardPrice, CardSection } from "./Style";

export default function PromotionCard({ title, url, imageUrl, id, price, comments, screenIsOpen }) {


    return (
        <CardSection>
            <CardImage src={imageUrl} alt={title} />
            <CardInfo>
                <h2 className="card-title">{title}</h2>
                <CardPrice>R${price}</CardPrice>
                <CardFooter>
                    <CardComments>
                        {comments.length > 0 &&(
                            <p className="comment-content">"{comments[0].comment}"</p>
                        )}
                        <button type="button" className="comment-btn" onClick={() => screenIsOpen(id)}>
                            {comments.length}
                            {comments.length > 1 ? " Comentários" : " Comentário"}
                        </button>
                    </CardComments>
                    <CardLinks>
                        <a href={url} target="_blank" className="card-btn">Acessar</a>
                        <Link to={`/edit/${id}`} className="card-btn">Editar</Link>
                        <a type="button" className="card-btn">Deletar</a>
                    </CardLinks>
                </CardFooter>
            </CardInfo>
        </CardSection>
    );
}