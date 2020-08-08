import React, { Component, Fragment } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer>
          <span>
            Created by <a href='https://dean.lol'>dean</a>
          </span>
          <span>
            Watch me make this site from{' '}
            <a href='https://twitter.com/dmasley/status/1291980970850213888'>
              design to deploy
            </a>
          </span>
        </footer>
      </Fragment>
    );
  }
}
