import React, { Component } from "react";

class ItSOverNineThousand extends Component {
    state = {
        text: this.props.text
    };

    render() {
        return this.state.text;
    }
}

export default ItSOverNineThousand;