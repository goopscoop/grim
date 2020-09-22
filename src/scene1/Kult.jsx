import React from 'react';
import kult from './media/Kult2.png'

const style = {
  position: 'absolute',
  right: '15vw',
  bottom: 0
}

const Kult = () => <img
  alt="Kult. The protagonist of Grim Curio. He's studying veil sign which floats omonously before him. Click to learn more."
  src={kult}
  style={style}
/>

export default Kult;