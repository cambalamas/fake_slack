import React from 'react';
import PropTypes from "prop-types";

import ChannelForm from './ChannelForm.jsx'
import ChannelList from './ChannelList.jsx'

class ChannelSection extends React.Component {
    render() {
        return (
            <div>
                <ChannelList { ...this.props } />
                <ChannelForm { ...this.props } />
            </div>
        )
    }
}

// Las propiedades de los hijos.
ChannelSection.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired
}

// Hacerlo visible.
export default ChannelSection
