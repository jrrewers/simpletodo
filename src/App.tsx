import './App.css';
import React from "react";
import { TODOContextProvider} from "./Context";
import {TODOApp} from "./TODOApp";

function App() {

  return (
    <div className="App">
        <form onSubmit={e => {
            console.log('App.js:13', e)
            e.preventDefault()
        }}>
            <TODOContextProvider>
                <TODOApp />
            </TODOContextProvider>
        </form>
    </div>

  );
}

export default App;
