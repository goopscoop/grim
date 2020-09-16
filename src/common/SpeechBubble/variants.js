const hidden = {
  width: 0,
  top: '11vh',
  left: '33vw'
};

const animateIn = {
  scale: [0, 1, 1.2, 1],
  opacity: [0,1]
}

const common = {
  width: 'auto',
  height: 'auto'
};

const variants = {
  exit: {
    ...hidden,
    duration: 1
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
    maxHeight: 300,
    minWidth: 250,
    minHight: 150,
    maxWidth: 400,
    padding: '1rem 2rem',
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
