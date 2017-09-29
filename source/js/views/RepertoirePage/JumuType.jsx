import React, { Component } from 'react';

export default class JumuType extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h4>{this.props.typeName}</h4>
        <ul className="article-filter">
          {
            this.props.typesArray.map((data, index) => {
              return (
                <li key={index}><a href="#" data-filter={data.typeFilterBy}>{data.type}</a></li>
              );
            })
          }
        </ul>
        <div className="clear"></div>
      </div>
    );
  }
}
