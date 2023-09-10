import { useState } from "react";

const State = () => {

    const [counter, setCounter] = useState(0);

    const [like, setLike] = useState(false);

    return(
        <div>
            <h2>Counter</h2>
            <h2>{counter}</h2>
            <button onClick={() => setCounter((value) => value + 1) }>Increase</button>
            <button onClick={() => setCounter((value) => value - 1) }>Decrease</button>

            <h2>Like Reaction</h2>
            <h2>{like?'like':'dislike'}</h2>
            <button onClick={() => setLike((value) => !value) }>Like/Unlike</button>
        </div>
    )
}

export default State;