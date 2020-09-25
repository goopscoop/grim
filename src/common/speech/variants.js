const hidden = {
  minWidth: 100,
  minHight: 100,
  maxWidth: 100,
  maxHeight: 100,
  opacity: 0,
  top: '11vh',
  left: '33vw',
};

const animateIn = {
  scale: [0, 1, 1.2, 1],
  opacity: [0,null,null,1]
}

const animateOut = {
  scale: [1, 0.8, null, 0],
  opacity: [1,null,null,0]
}

const common = {
  // width: 'auto',
  // height: 'auto'
};

const variants = {
  exit: {
    ...hidden,
    ...animateOut,
    duration: 0.7
  },
  initial: {
    ...hidden
  },
  hidden: {
    ...hidden
  },
  bigScreenAnimate: {
    top: '10vh',
    left: '30vw',
    minHight: 150,
    maxHeight: 300,
    minWidth: 200,
    maxWidth: 300,
    ...common,
    ...animateIn
  },
  hover: {
    scale: 1.05,
    cursor: 'pointer'
  },
  tap: {
    scale: 'scale(0.95)'
  },
  desktopAnimate: {
    top: '9vh',
    left: '30vw',
    maxHeight: 100,
    minWidth: 200,
    minHight: 50,
    maxWidth: 400,
    padding: 20,
    ...common,
    ...animateIn
  },
  tabletAnimate: {
    top: '9vh',
    left: '30vw',
    maxHeight: 70,
    minWidth: 200,
    minHight: 30,
    maxWidth: 400,
    padding: 10,
    ...common,
    ...animateIn
  },
  mobileAnimate: {
    top: '1vh',
    right: '7vw',
    maxHeight: 100,
    minWidth: 100,
    minHight: 100,
    maxWidth: 400,
    padding: 20,
    ...common,
    ...animateIn
  }
};

export default variants;
