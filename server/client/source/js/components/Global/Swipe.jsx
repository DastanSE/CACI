import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

export default class Swipe extends Component {
    render() {
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
                <div style={ { height: "500px"}  } >PANE 1</div>
                <div style={ { height: "500px"}  } >Panel 2</div>
                <div style={ { height: "500px"}  } >PANE 1</div>
            </ReactSwipe>
        )
    }
}
