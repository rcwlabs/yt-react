import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import config from '../config';
import ytsearch from 'youtube-api-search';

import Searchbar from './components/Searchbar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

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
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));