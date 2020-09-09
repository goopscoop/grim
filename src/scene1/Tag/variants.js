const style = {
  position: 'absolute',
  zIndex: 1,
  left: '40vw',
  bottom: '4vh'
};

const variants = {
  bigScreenInitial: {
    ...style
  },
  desktopInitial: {
    ...style
  },
  tabletInitial: {
    ...style,
    scale: 0.7,
    left: '30vw',
    bottom: '-2vh'
  },
  mobileInitial: {
    ...style,
    scale: 0.4,
    left: '20vw',
    bottom: '-11vh'
  },
  portraitInitial: {
    ...style
  }
};

export default variants;