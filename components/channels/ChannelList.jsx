import React from "react";
import PropTypes from "prop-types";

import Channel from "./Channel.jsx";

class ChannelList extends React.Component {
    render() {
        return (
            <ul>{
                this.props.channels.map(chan => {
                    return <Channel
                        channel={chan}
                        key={chan.id}
                        setChannel={this.props.setChannel}
                    />
                })
            }</ul>
        )
    }
}

// Propiedades relativas a la lista de canales.
ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired
}

// Usable por otros componentes.
export default ChannelList
