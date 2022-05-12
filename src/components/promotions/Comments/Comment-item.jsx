import { useRef, useState } from "react";
import { commentService } from "../../../service/comments";
import ElipsesTree from "./Tree/Elipses";
import { AnswerButton, CommentBox } from "./Tree/Style";
import { CommentSection } from "./Style";

export const CommentItem = (props) => {
    const { 
        user,
        comment,
        id,
        callback,
        currentComment, 
        childrens = [],
        disableAnswer = false,
        promotionId,
        tag: Tag = "li"
    } = props;

    const [activeComment, setActiveComment] = currentComment;
    const [value, setValue] = useState("")
    const commentRef = useRef();
    
    function handleAnswer() {
        setActiveComment(prev => prev === id ? null : id)
    }

    function answerSubmit(ev) {
        ev.preventDefault();

        commentService.save({ 
            comment: value, 
            promotionId: promotionId,
            parentId: id
        }).then(() => {
            commentRef.current.value = ""
            handleAnswer()
            callback()
            
        }).catch(err => console.error(err.message))
    }

    return (
        <CommentSection>
            <Tag className="comment-box">
                <div className="comment-content">
                    <img src={user.avatarUrl} alt={user.name} className="image-user" />
                    <div className="user-container">
                        <h3>{user.name}</h3>
                        <p>{comment}</p>
                        {!disableAnswer && (
                            <AnswerButton type="button" onClick={handleAnswer}>
                                Responder
                            </AnswerButton>
                        )}
                    </div>
                    <ElipsesTree id={id} callback={callback} />
                </div>
                <div>
                    {childrens.map(child => (
                    <CommentItem 
                            currentComment={currentComment} 
                            key={child.id}
                            callback={callback} 
                            {...child}
                            disableAnswer 
                            tag="ol"
                        />
                    ))}
                </div>
                <div>
                    {activeComment === id && (
                        <CommentBox>
                            <textarea
                                className="answer-field"
                                placeholder="Responder..."
                                onChange={(e) => setValue(e.target.value)}
                                ref={commentRef}
                            />
                            <button type="button" className="send-btn" onClick={answerSubmit} >
                                Enviar
                            </button>
                        </CommentBox>
                    )}
                </div>
            </Tag>
        </CommentSection>
    )
}