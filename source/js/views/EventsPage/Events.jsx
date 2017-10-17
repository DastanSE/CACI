import React, { Component } from 'react';
import { Row, Col, Media, Image } from 'react-bootstrap';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const grid = this.refs.grid;

    this.msnry = new Masonry(grid, {
      itemSelector: '.note',
      columnWidth: 200,
      gutter: 10,
      isFitWidth: true,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.notes.length !== prevProps.notes.length) {
      this.msnry.reloadItems();
      this.msnry.layout();
    }
  }

  render() {
    return (
      <section>
        {this.props.notes.map((note) => {
          return (
            <Cards key={ note.id }>
              {note.text}
            </Cards>
          );
        })}
      </section>
    );
  }
}
