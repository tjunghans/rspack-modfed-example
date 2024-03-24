
import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
        <div className="card">
            <button onClick={() => setCount(count => count + 1)}>
                count is {count} boo ja
            </button>
        </div>
	);
}

export default Counter;