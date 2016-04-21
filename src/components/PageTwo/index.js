import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';
import { slideLeft } from 'utils/Animations';

import './index.css';

export default React.createClass({

  displayName: 'PageTwo',

  propTypes: {
    direction: PropTypes.string,
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

  handleButtonClick() {
    const { router } = this.context;
    this.setState({
      action: 'push',
    });
    router.push('/three');
  },

  render() {
    const cx = classNames({
      two: true,
      'accent-color': true,
      'text-primary-color': true,
    });
    const { style } = this.state;

    return (
      <div className={ cx } style={ style }>
        <h1>PAGE TWO</h1>
        <Tappable className="button back" component="a" classBase="tappable"
          onTap={ this.handleBackButtonClick }
        >
          &laquo; Back
        </Tappable>
        <h1>With another...</h1>
        <Tappable className="button next" component="a" classBase="tappable"
          onTap={ this.handleButtonClick }
        >
          Next &raquo;
        </Tappable>
      </div>
    );
  },
});
