import {useAppSelector} from "../../hooks/reduxHooks.ts";
import Square from "../square/square.tsx";

const Board = () =>{

    const square = useAppSelector((state) => state.game.squarePosition)

    return(
        <>
            <div className="grid grid-cols-3 h-96 w-96">
                {
                    square.map((obj, index) => (
                        <Square key={index} position={obj} />
                    ))
                }
            </div>
        </>
    )
}


export default Board