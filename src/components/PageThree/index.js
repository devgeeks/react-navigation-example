import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';
import { slideLeft } from 'utils/Animations';

import './index.css';

export default React.createClass({

  displayName: 'PageThree',

  propTypes: {
    children: PropTypes.object,
    direction: PropTypes.string,
    location: React.PropTypes.object,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    const { direction } = this.props;
    return {
      action: direction,
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

  handleBackButtonClick() {
    const { router } = this.context;
    this.setState({
      action: 'pop',
    });
    router.goBack();
  },

  render() {
    const cx = classNames({
      three: true,
      'text-primary-color': true,
    });
    const { style } = this.state;

    return (
      <div className={ cx } style={ style }>
        <h1>PAGE THREE</h1>
        <Tappable className="button back" component="a" classBase="tappable"
          onTap={ this.handleBackButtonClick }
        >
          &laquo; Back
        </Tappable>
      </div>
    );
  },
});
