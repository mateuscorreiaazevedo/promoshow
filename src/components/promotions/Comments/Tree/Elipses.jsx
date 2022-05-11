import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { Elipses } from "./Style"


export default function ElipsesTree({ deleteComment }) {

    return (
        <Elipses>
            <HiOutlineMenuAlt4 />
            <ul>
                <li>
                    <button onClick={deleteComment} className="btn">
                        Deletar
                    </button>
                </li>
            </ul>
        </Elipses>
    )
}