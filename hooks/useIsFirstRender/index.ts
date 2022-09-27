import { useRef } from 'react';

/*
 * https://usehooks-ts.com/react-hook/use-is-first-render
 */

function useIsFirstRender(): boolean {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}

export default useIsFirstRender;
