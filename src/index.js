import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';

import Searchbar from './components/Searchbar';

const App = () => {
    return (
        <div>
            <Searchbar />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));