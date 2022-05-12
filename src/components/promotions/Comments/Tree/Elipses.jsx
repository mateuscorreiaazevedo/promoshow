import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Elipses } from "./Style"
import { commentService } from "../../../../service/comments";


export default function ElipsesTree({ id, callback }) {
    const [options, setOptions] = useState(false)

    function handleDelete() {
        commentService.delete(id)
        .then(() => callback())
        .catch(err => console.error(err.message))
    }

    return (
        <Elipses onClick={() => setOptions(!options)} alt="more options">
            <BsThreeDotsVertical className="dot" />
                {!!options &&(
                    <div className="options-btn">
                        <button onClick={handleDelete} className="btn">
                            Deletar
                        </button>
                    </div>
                )}
        </Elipses>
    )
}