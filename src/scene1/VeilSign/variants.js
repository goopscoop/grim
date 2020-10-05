import {defaultAnimationVariants} from '../../common/utils';

const style = {
  position: 'absolute',
  left: '22.4vw',
  bottom: '30vh',
  zIndex: 100,
  cursor: 'pointer'
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
    bottom: '10vh',
    left: '13vw',
  },
  mobileInitial: {
    ...style,
    scale: 0.5,
    bottom: '8vh',
    left: '7vw',
  },
  portraitInitial: {
    ...style
  },
  ...defaultAnimationVariants()
};

export default variants;