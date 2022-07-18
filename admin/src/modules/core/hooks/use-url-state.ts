import { useCallback, useEffect, useRef } from 'react';
import qs from 'qs';
// hooks
import { useForceUpdate } from 'modules/core/hooks/use-force-update';
// services
import { getHistory } from 'modules/core/services/history.service';

export const useUrlState = <T>(name: string, initialValue: T) => {
  // hooks
  const { forceUpdate } = useForceUpdate();
  // refs
  const valueRef = useRef<T>(initialValue);

  useEffect(() => {
    const { search } = getHistory().location;

    const parsedSearch = qs.parse(search.replace('?', ''));

    const valueFromUrl = parsedSearch[name];

    if (valueFromUrl === undefined) {
      getHistory().push({
        search: `?${qs.stringify({ [name]: valueRef.current })}`,
      });
    } else {
      valueRef.current = ((valueFromUrl === 'true') as unknown) as T;
      forceUpdate();
    }
  }, [name, forceUpdate]);

  const setState = useCallback(
    (value: T) => {
      valueRef.current = value;
      getHistory().push({
        search: `?${qs.stringify({ [name]: valueRef.current })}`,
      });
    },
    [name]
  );

  return [valueRef.current, setState] as const;
};
