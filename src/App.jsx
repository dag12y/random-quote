import { useState,useEffect } from "react"

function App() {
    return (
        <main className="w-screen h-screen flex items-center justify-center">
            <div
                className="container w-lg h-72 border-2 border-amber-300 rounded-2xl shadow-lg "
                style={{
                    backgroundImage: `url(https://picsum.photos/600/400
)`,
                }}
            ></div>
        </main>
    );
}

export default App
