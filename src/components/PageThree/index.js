import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

import page from 'components/Page';

import './index.css';

const PageThree = React.createClass({

  displayName: 'PageThree',

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

  render() {
    const { style } = this.props;
    const cx = classNames({
      three: true,
      'text-primary-color': true,
    });

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

export default page(PageThree);
