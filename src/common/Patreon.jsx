import React from 'react';
import patreon from './patreon.png'

const PatreonBtn = () => {
  const style = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    marginLeft: '-100px',
    zIndex: 1000
  }
  return (
    <div
      style={style}
    >
      <a href="https://www.patreon.com/bePatron?u=2582162">
        <img style={{width: 200}} src={patreon} />
      </a>
    </div>
  )
}

export default PatreonBtn;