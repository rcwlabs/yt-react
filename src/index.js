import React from 'react';
import ReactDOM from 'react-dom';

const YT_API_KEY = process.env.TESTDBUSER;

const App = () => {
    return <div>Hey there from index</div>;
};

console.log("the key is: " + YT_API_KEY);

ReactDOM.render(<App />, document.getElementById('container'));