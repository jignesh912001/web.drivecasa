import { matchPath, useLocation } from 'react-router-dom';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

// export function useActiveLink(path, deep = true) {
//   const { pathname } = useLocation();

//   const normalActive = path ? !!matchPath({ path, end: true }, pathname) : false;

//   const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false;

//   return deep ? deepActive : normalActive;
// }


export function useActiveLink(path, children = [], deep = true) {
  const { pathname } = useLocation();
  const lgUp = useResponsive('up', 'lg');
  if (!lgUp) {
    const normalActive = path ? !!matchPath({ path, end: true }, pathname) : false;

    const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false;

    return deep ? deepActive : normalActive;

  } else {
    const isPathActive = (path) => path ? !!matchPath({ path, end: false }, pathname) : false;

    const normalActive = isPathActive(path);

    const deepActive = children?.some((child) => isPathActive(child?.path));

    return normalActive || deepActive;

  }
}
