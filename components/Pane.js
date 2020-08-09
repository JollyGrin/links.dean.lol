import React, { Component, Fragment } from 'react';
import { iconSelect } from '../lib/parse';

export default class Pane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className='linkBox'>
          <div className='icon'>
            <a href={this.props.link.url} target='_blank'>
              <i className={`${iconSelect(this.props.link.type)}`} />
            </a>
          </div>
          <div className='text'>
            <h1>{this.props.link.title}</h1>
            <h3>{this.props.link.desc}</h3>
          </div>
        </div>
      </Fragment>
    );
  }
}
