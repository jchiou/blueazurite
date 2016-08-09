import React, { Component } from 'react';
import TextEditor from '../container/TextEditor';
import Video from '../container/Video';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <TextEditor />
        </div>
        <div>
          <Video />
        </div>
      </div>
    );
  }
}

