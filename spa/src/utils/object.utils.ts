// singleton
const SINGLETON_KEY = Symbol();

export type Singleton<T extends new (...args: any[]) => any> = T & {
  [SINGLETON_KEY]: T extends new (...args: any[]) => infer I ? I : never;
};
export const singleton = <T extends new (...args: any[]) => any>(
  classTarget: T
) => {
  return new Proxy(classTarget, {
    construct(target: Singleton<T>, argumentsList, newTarget) {
      // Skip proxy for children
      if (target.prototype !== newTarget.prototype) {
        return Reflect.construct(target, argumentsList, newTarget);
      }

      if (!target[SINGLETON_KEY]) {
        // eslint-disable-next-line no-param-reassign
        target[SINGLETON_KEY] = Reflect.construct(
          target,
          argumentsList,
          newTarget
        );
      }

      return target[SINGLETON_KEY];
    },
  });
};

// path
const isInteger =
  Number.isInteger ||
  function isInteger(n) {
    // @ts-ignore
    return n << 0 === n;
  };

export const isString = (x: any) => {
  return Object.prototype.toString.call(x) === '[object String]';
};

export const nth = (offset: any, list: any) => {
  const idx = offset < 0 ? list.length + offset : offset;

  return isString(list) ? list.charAt(idx) : list[idx];
};

export const paths = (pathsArray: any[], obj: any): any => {
  // eslint-disable-next-line no-shadow
  return pathsArray.map((paths) => {
    let val = obj;
    let idx = 0;
    let p;

    while (idx < paths.length) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      if (val == null) {
        return undefined;
      }

      p = paths[idx];
      val = isInteger(p) ? nth(p, val) : val[p];
      idx += 1;
    }

    return val;
  });
};

export const path = (pathAr: any[], obj: any) => {
  return paths([pathAr], obj)[0];
};

export const prop = <T = any>(p: string) => (obj: any): T => {
  // eslint-disable-next-line no-shadow
  const paths = p.split('.');

  return path(paths, obj);
};
