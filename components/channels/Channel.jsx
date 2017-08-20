import React from "react";
import PropTypes from "prop-types";

class Channel extends React.Component {

    onClick(e) {
        e.preventDefault();
        const { setChannel, channel } = this.props;
        setChannel(channel)
    }

    render() {
        const { channel } = this.props; // Capturando las propTypes definidas.
        return (
            <li>
                <a onClick={this.onClick.bind(this)} >
                    {channel.name}
                </a>
            </li>
        )
    }

}

// Propiedades relativas a un canal.
Channel.propTypes = {
    channel: PropTypes.object.isRequired, // El propio objeto.
    setChannel: PropTypes.func.isRequired // Funcion setter.
}

// Usable por otros componentes.
export default Channel
