import Board from "../board/board.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {reset} from "../../store/reducer/gameReducer.ts";

import NinjaBlack from "../../assets/ninja-black.svg";
import NinjaRed from "../../assets/ninja-red.svg";

const Game = () => {


    const dispatch = useAppDispatch();
    const winner = useAppSelector((state) => state.game.winner);
    const value = useAppSelector((state) => state.game.value);
    const playable = useAppSelector((state) => state.game.playable);

    return (
        <>

            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                <div className="">

                    <div className="">
                        {
                            winner == null && playable &&
                            <div className="flex align-center my-4 gap-2">
                                <p>Joueur : </p>
                                <img className="w-8 h-8" src={value == "red" ? NinjaRed : NinjaBlack}
                                     alt={value}/>
                            </div>
                        }
                        {!playable &&
                            <div className="">
                                {
                                    winner == null &&
                                    <p> Match nul !!</p>
                                }
                                {
                                    winner != null &&
                                    <>
                                        <img className="w-12 h-12"
                                             src={winner == "red" ? NinjaRed : NinjaBlack}
                                             alt={value}/>
                                        <span>à gagné </span>
                                    </>
                                }

                            </div>}
                    </div>
                </div>

                <Board/>


                <div className="">

                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2focus:outline-none"
                            onClick={() => dispatch(reset())}

                    >
                        Rejouer
                    </button>

                </div>
            </div>

        </>
    )
}


export default Game