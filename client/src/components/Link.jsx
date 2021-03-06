import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const Link = (props) => (
  <div id="link">
    <div id="link-message">
      <CopyToClipboard text={`http://localhost:3000/?id=${props.myId}`}>
        <button className="btn btn-primary btn-sm">Copy share link</button>
      </CopyToClipboard>
    </div>
  </div>
);

Link.propTypes = {
  myId: React.PropTypes.string,
};

export default Link;