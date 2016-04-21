import React, { PropTypes } from 'react';
//import CSSTransitionGroup from 'react-addons-css-transition-group';
import TransitionGroup from 'react-addons-transition-group';

export default React.createClass({

  displayName: 'App',

  propTypes: {
    children: PropTypes.object,
    location: PropTypes.object,
  },

  render() {
    const {
      location: { pathname: key, action: direction },
    } = this.props;
    const props = {
      key,
      direction: direction.toLowerCase(),
    };

    return (
      <div className="app">
        <TransitionGroup
          className="transition"
        >
          { React.cloneElement(this.props.children || <div />, props) }
        </TransitionGroup>
      </div>
    );
  },
});
