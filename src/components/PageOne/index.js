import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

import page from 'components/Page';

import './index.css';

const PageOne = React.createClass({

  displayName: 'PageOne',

  propTypes: {
    setAction: React.PropTypes.func,
    style: PropTypes.object,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  handleButtonClick() {
    const { router } = this.context;
    const { setAction } = this.props;
    setAction('push');
    router.push('/two');
  },

  render() {
    const { style } = this.props;
    const cx = classNames({
      one: true,
      'default-primary-color': true,
      'text-primary-color': true,
    });

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

export default page(PageOne);
