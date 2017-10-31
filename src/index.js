import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import config from '../config';
import ytsearch from 'youtube-api-search';

import Searchbar from './components/Searchbar';

const YT_API_KEY = config.YT_API_KEY;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        ytsearch({ key: YT_API_KEY, term: 'drums' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <Searchbar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));