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

// remove matched values
export const removeMatchedValues = <T extends object>(
  obj: T,
  valuesToRemove: any[]
): Partial<T> => {
  const _obj = { ...obj };

  for (const [key, value] of Object.entries(obj)) {
    if (valuesToRemove.includes(value)) {
      // @ts-ignore
      delete _obj[key];
    }
  }

  return _obj;
};
