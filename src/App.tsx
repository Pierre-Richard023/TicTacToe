import Game from "./Components/game/game.tsx";

const App = () => {

    return (
        <>
            <main className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                        Morpion en ligne
                    </h2>
                    <Game />
                </div>
            </main>
        </>
    )
}

export default App
