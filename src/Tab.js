'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { emptyFunc } from './utils';

const Style = {
  container: {
    position: 'relative',
    height: 48,
    padding: 0,
    cursor: 'pointer'
  },

  textContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,

    // Without this, Safari briefly fades the text color whilst ::active.
    WebkitFontSmoothing: 'subpixel-antialiased'
  }
};

const Tab = ({ children, onClick, style, className }) => {
  return (
    <div style={Style.container} onClick={onClick} className={ className }>
      <div style={{ ...Style.textContainer, ...style }}>
        {children}
      </div>
    </div>
  );
};

Tab.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Tab.defaultProps = {
  style: {},
  onClick: emptyFunc,
  className: null
};

export default Tab;
