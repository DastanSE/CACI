import React, { Component } from 'react';
import classNames from 'classnames/bind';

export default class JumuType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTypes: false,
      content: []
    };
  }

  onClick = () => {
    this.setState({
      showTypes: !this.state.showTypes,
    });
  };

  filter = (type) => {    
    return () => this.props.filterContent(type);
  }


  render() {
    const typesClass = classNames({
      'article-filter': true,
      disabled: !this.state.showTypes,
    });

    return (
      <div>
        <div className='jumu-type-name'>
          <h4 style={ { display: 'inline-block' } }>{this.props.typeName}</h4>
          {this.state.showTypes ? (
            <i className='fa fa-minus-circle fa-2x jumu-right' aria-hidden='true' style={{color: 'red'}} onClick={ this.onClick } />
          ) : (
            <i className='fa fa-plus-circle fa-2x jumu-right' aria-hidden='true' onClick={ this.onClick } />
          )}
        </div>

        <ul className={ typesClass }>
          {this.props.typesArray.map((data, index) => {
            return (
              <li key={ index } className='types' onClick={() => this.props.filterContent(data.type)}>
                <span>{data.type}</span>
              </li>
            );
          })}
        </ul>
        <div className='clear' />
      </div>
    );
  }
}
