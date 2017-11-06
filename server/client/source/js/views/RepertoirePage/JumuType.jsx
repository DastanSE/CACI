import React, { Component } from 'react';
import classNames from 'classnames/bind';

export default class JumuType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTypes: false,
    };
  }

  onClick() {
    this.setState({
      showTypes: !this.state.showTypes,
    });
  }

  render() {
    const typesClass = classNames({
      'article-filter': true,
      disabled: !this.state.showTypes,
    });
    return (
      <div>
        <div className='jumu-type-name'>
          <h4 style={{display: 'inline-block'}}>{this.props.typeName}</h4>
          {this.state.showTypes ? (
            <i className='fa fa-minus-circle fa-2x' aria-hidden='true' style={{display: 'inline-block', float: 'right', color: 'red'}} onClick={ this.onClick.bind(this) } />
          ) : (
            <i className='fa fa-plus-circle fa-2x' aria-hidden='true' style={{display: 'inline-block', float: 'right'}} onClick={ this.onClick.bind(this) } />
          )}
        </div>

        <ul className={ typesClass }>
          {this.props.typesArray.map((data, index) => {
            return (
              <li key={ index }>
                <a href='#' data-filter={ data.typeFilterBy }>
                  {data.type}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='clear' />
      </div>
    );
  }
}
