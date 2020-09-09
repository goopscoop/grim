const style = {
  position: 'absolute',
  left: '22.4vw',
  bottom: '30vh'
};

const variants = {
  bigScreenInitial: {
    ...style
  },
  desktopInitial: {
    ...style,
    scale: 0.9,
    bottom: '28vh',
    left: '17vw',
  },
  tabletInitial: {
    ...style,
    scale: 0.7,
    bottom: '28vh',
    left: '13vw',
  },
  mobileInitial: {
    ...style
  },
  portraitInitial: {
    ...style
  }
};

export default variants;