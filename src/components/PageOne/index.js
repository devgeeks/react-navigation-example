import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';
import { slideLeft } from 'utils/Animations';

import './index.css';

export default React.createClass({

  displayName: 'PageOne',

  propTypes: {
    children: PropTypes.object,
    direction: PropTypes.string,
    location: PropTypes.object,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    const { direction } = this.props;
    return {
      action: direction || 'pop',
      style: {},
    };
  },

  componentWillLeave(done) {
    const { action } = this.state;
    slideLeft(this, {
      action,
      direction: 'out',
    }, done);
  },

  componentDidLeave() {
    // reset to default
    this.setState({
      action: 'pop',
    });
  },

  componentWillEnter(done) {
    const { action } = this.state;
    slideLeft(this, {
      action,
      direction: 'in',
    }, done);
  },

  componentDidEnter() {
    // reset to default
    this.setState({
      action: 'pop',
    });
  },

  handleButtonClick() {
    const { router } = this.context;
    this.setState({
      action: 'push',
    });
    router.push('/two');
  },

  render() {
    const cx = classNames({
      one: true,
      'default-primary-color': true,
      'text-primary-color': true,
    });
    const { style } = this.state;

    return (
      <div className={ cx } style={ style }>
        <h1>PAGE ONE</h1>
        <Tappable className="button next" component="a" classBase="tappable"
          onTap={ this.handleButtonClick }
        >
          Next &raquo;
        </Tappable>
      </div>
    );
  },
});
