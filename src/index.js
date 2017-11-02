import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import config from '../config';
import ytsearch from 'youtube-api-search';
import _ from 'lodash';

import Searchbar from './components/Searchbar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const YT_API_KEY = config.YT_API_KEY;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('drums');
    }

    videoSearch(term) {
        
        ytsearch({ key: YT_API_KEY, term: term }, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });

    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <Searchbar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));