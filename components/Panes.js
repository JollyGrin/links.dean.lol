import React, { Component, Fragment } from 'react';
import Pane from './Pane';

export default class Panes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <section id='panes'>
          {this.props.table.map((pane, i) => (
            <div key={i} className='pane'>
              <h1 className='pane-title'>{pane.category}</h1>
              {pane.links.map((link, i) => (
                <Pane key={i} link={link} />
              ))}
            </div>
          ))}
        </section>
      </Fragment>
    );
  }
}
