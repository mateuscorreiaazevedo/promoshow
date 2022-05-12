import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Elipses } from "./Style"


export default function ElipsesTree({ deleteComment }) {
    const [options, setOptions] = useState(false)

    console.log(options)

    return (
        <Elipses onClick={() => setOptions(!options)}>
            <BsThreeDotsVertical className="dot" />
                {!!options &&(
                    <div className="options-btn">
                        <button onClick={deleteComment} className="btn">
                            Deletar
                        </button>
                    </div>
                )}
        </Elipses>
    )
}