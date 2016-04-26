import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

import page from 'components/Page';

import './index.css';

const PageTwo = React.createClass({

  displayName: 'PageTwo',

  propTypes: {
    direction: PropTypes.string,
    setAction: React.PropTypes.func,
    style: PropTypes.object,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  handleBackButtonClick() {
    const { router } = this.context;
    const { setAction } = this.props;
    setAction('pop');
    router.goBack();
  },

  handleButtonClick() {
    const { router } = this.context;
    const { setAction } = this.props;
    setAction('push');
    router.push('/three');
  },

  render() {
    const { style } = this.props;
    const cx = classNames({
      two: true,
      'accent-color': true,
      'text-primary-color': true,
    });

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

export default page(PageTwo);
