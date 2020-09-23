import React, {createContext, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

let deviceContext;
const getDeviceContext = () => {
  if (!deviceContext) {
    deviceContext = createContext({});
  }
  return deviceContext;
};

const Prefix = {
  BIG_SCREEN: 'bigScreen',
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
  PORTRAIT: 'portrait'
};

export const DeviceProvider = ({children}) => {
  const [prefix, setPrefix] = useState('');
  const DeviceContext = getDeviceContext();
  const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isDesktop = useMediaQuery({ minWidth: 1224, maxWidth: 1823 });
  const isTablet = useMediaQuery({ minWidth: 897, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 896 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isRetina = useMediaQuery({ minResolution: '2dppx' });

  useEffect(() => {
    if (isPortrait) {
      setPrefix(Prefix.PORTRAIT);
      return;
    }

    if (isBigScreen && prefix !== Prefix.BIG_SCREEN) {
      setPrefix(Prefix.BIG_SCREEN);
    } else if (isDesktop && prefix !== Prefix.DESKTOP) {
      setPrefix(Prefix.DESKTOP);
    } else if (isTablet && prefix !== Prefix.TABLET) {
      setPrefix(Prefix.TABLET);
    } else if (isMobile && prefix !== Prefix.MOBILE) {
      setPrefix(Prefix.MOBILE);
    }
  }, [setPrefix, isPortrait, isBigScreen, isDesktop, isTablet, isRetina, isMobile, prefix]);

  return (
    <DeviceContext.Consumer>
      {(context) => {
        return <DeviceContext.Provider value={{
          isBigScreen,
          isDesktop,
          isTablet,
          isMobile,
          isPortrait,
          isRetina,
          prefix
        }}>
          {!!prefix && children}
        </DeviceContext.Provider>
      }}
    </DeviceContext.Consumer>
  );
}

export const useDevice = () => {
  return React.useContext(getDeviceContext());
}
