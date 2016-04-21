function slideLeftIn(action, component, done) {
  if (action === 'push') {
    requestAnimationFrame(() => {
      component.setState({
        style: {
          transform: 'translate(100%, 0)',
          WebkitTransform: 'translate(100%, 0)',
          zIndex: 2,
        },
      });
      requestAnimationFrame(() => {
        component.setState({
          style: {
            transform: 'translate(0, 0)',
            WebkitTransform: 'translate(0, 0)',
            transition: 'all .4s cubic-bezier(.1, .7, .1, 1)',
            WebkitTransition: 'all .4s cubic-bezier(.1, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            zIndex: 2,
          },
        });
        done();
      });
    });
  } else {
    requestAnimationFrame(() => {
      component.setState({
        style: {
          transform: 'translate(-20%, 0)',
          WebkitTransform: 'translate(-20%, 0)',
          opacity: 0.7,
          zIndex: 1,
        },
      });
      requestAnimationFrame(() => {
        component.setState({
          style: {
            transform: 'translate(0, 0)',
            WebkitTransform: 'translate(0, 0)',
            transition: 'all .4s cubic-bezier(.1, .7, .1, 1)',
            WebkitTransition: 'all .4s cubic-bezier(.1, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            opacity: 1,
            zIndex: 1,
          },
        });
        done();
      });
    });
  }
}

function slideLeftOut(action, component, done) {
  if (action === 'push') {
    requestAnimationFrame(() => {
      component.setState({
        style: {
          transform: 'translate(0, 0)',
          WebkitTransform: 'translate(0, 0)',
          opacity: 1,
          zIndex: 1,
        },
      });
      requestAnimationFrame(() => {
        component.setState({
          style: {
            transform: 'translate(-20%, 0)',
            WebkitTransform: 'translate(-20%, 0)',
            transition: ' .4s cubic-bezier(.1, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransition: 'all .4s cubic-bezier(.1, .7, .1, 1)',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            opacity: 0.7,
            zIndex: 1,
          },
        });
        setTimeout(done, 300);
      });
    });
  } else {
    requestAnimationFrame(() => {
      component.setState({
        style: {
          transform: 'translate(0, 0)',
          WebkitTransform: 'translate(0, 0)',
          zIndex: 2,
        },
      });
      requestAnimationFrame(() => {
        component.setState({
          style: {
            transform: 'translate(100%, 0)',
            WebkitTransform: 'translate(100%, 0)',
            transition: 'all .4s cubic-bezier(.1, .7, .1, 1)',
            transitionProperty: 'transform, opacity',
            WebkitTransition: '-webkit-transform .4s cubic-bezier(.1, .7, .1, 1)',
            WebkitTransitionProperty: '-webkit-transform, opacity',
            zIndex: 2,
          },
        });
        setTimeout(done, 300);
      });
    });
  }
}

export function slideLeft(component, options, done) {
  const { action, direction } = options;
  if (direction === 'in') {
    slideLeftIn(action, component, done);
  } else {
    slideLeftOut(action, component, done);
  }
}
