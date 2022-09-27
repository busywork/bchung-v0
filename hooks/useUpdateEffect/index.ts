import { DependencyList, EffectCallback, useEffect } from 'react';
import useIsFirstRender from '../useIsFirstRender';

/*
 * https://usehooks-ts.com/react-hook/use-update-effect
 */

function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useUpdateEffect;
