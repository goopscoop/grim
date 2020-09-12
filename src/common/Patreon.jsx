import React from 'react';
import patreon from './patreon.png'

const PatreonBtn = () => {
  const style = {
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: '-100px',
    zIndex: 1000
  }

  // TODO:
  // 1. Make move to catch attention
  // 2. On Hover, pull up a small modal
  // 3. Modal should contain images of patreon rewards
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