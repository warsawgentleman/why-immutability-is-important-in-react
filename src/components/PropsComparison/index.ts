import { BadClass, GoodClass } from "./Classes";
import { BadFunction, GoodFunction } from "./Functions";

export const PropsComparison = {
  Classes: {
    Good: GoodClass,
    Bad: BadClass
  },
  Functions: {
    Good: GoodFunction,
    Bad: BadFunction
  }
};

export * from "./Container";
