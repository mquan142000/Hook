import React from 'react';
import Timer from './component/Timer';
function App() {
    return (
        <div className="App">
            <Timer initialSeconds={10} />
        </div>
    );
}

export default App;
