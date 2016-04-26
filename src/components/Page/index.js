import React from 'react';
import { slideLeft } from 'utils/Animations';

export default function (InnerPage) {
  return React.createClass({

    propTypes: {
      direction: React.PropTypes.string,
    },

    getInitialState() {
      const { direction } = this.props;
      return {
        action: direction || 'pop',
      };
    },

    setAction(action) {
      this.setState({
        action,
      });
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

    render() {
      return (
        <InnerPage
          { ...this.state }
          { ...this.props }
          setAction={ this.setAction }
        />
      );
    },
  });
}
