import React from 'react';

import ChannelSection from './channels/ChannelSection.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: []
        };
    }
    addChannel(name) {
        let { channels } = this.state;
        channels.push({ id: channels.length, name });
        this.setState({ channels });
        // TODO: Send to the server.
    }
    setChannel(activeChannel) {
        this.setState({ activeChannel });
        // TODO: Get channel messages
    }
    render() {
        return (
            <ChannelSection
                channels={this.state.channels}
                addChannel={this.addChannel.bind(this)}
                setChannel={this.setChannel.bind(this)}
            />
        )
    }
}

// Hacerlo visible.
export default App
