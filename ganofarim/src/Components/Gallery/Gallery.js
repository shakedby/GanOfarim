import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <h1> {this.props.password}</h1>
            </div>
        )
    }
}
export default Gallery;