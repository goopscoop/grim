const style = {
  position: 'absolute',
  zIndex: 100,
  transform: 'scale(1)',
  opacity: 1,
  top: 0,
  left: '45vw'
};

const variants = {
  bigScreenAnimate: {
    ...style
  },
  bigScreenHidden: {
    ...style,
    opacity: 0,
    top: '200px'
  },
  bigScreenHover: {
    ...style,
    transform: 'scale(1.1)',
    cursor: 'pointer'
  },
  bigScreenTap: {
    ...style,
    transform: 'scale(0.95)'
  },
  desktopAnimate: {
    ...style,
    transform: 'scale(0.9)',
  },
  desktopHidden: {
    ...style,
    opacity: 0,
    transform: 'scale(0.9)',
    top: '200px'
  },
  desktopHover: {
    ...style,
    transform: 'scale(1.0)',
    cursor: 'pointer'
  },
  desktopTap: {
    ...style,
    transform: 'scale(0.85)'
  },
  tabletAnimate: {
    ...style,
    transform: 'scale(0.6)'
  },
  tabletHidden: {
    ...style,
    opacity: 0,
    left: '20vw',
    top: '100px',
    transform: 'scale(0.6)'
  },
  tabletHover: {
    ...style,
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: 'scale(0.7)'
  },
  tabletTap: {
    ...style,
    transform: 'scale(0.65)'
  },
  mobileAnimate: {
    ...style,
    top: '-80px',
    left: '120px',
    transform: 'scale(0.4)'
  },
  mobileHidden: {
    ...style,
    opacity: 0,
    top: '100px',
    left: '100px',
    transform: 'scale(0.4)'
  },
  mobileHover: {
    ...style,
    top: '-70px',
    left: '110px',
    transform: 'scale(0.45)'
  },
  mobileTap: {
    ...style,
    transform: 'scale(0.4)'
  },
  portraitAnimate: {
    ...style,
    transform: 'scale(0.5)',
    left: '10vw'
  },
  portraitHidden: {
    ...style,
    opacity: 0,
    top: '150px',
    left: '10vw'
  },
  portraitHover: {
    ...style,
    transform: 'scale(0.6)',
    left: '10vw'
  }
};

export default variants;