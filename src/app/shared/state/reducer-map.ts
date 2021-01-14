import { basicReducer } from "src/app/basic/state/basic.reducer";
import { componentReducer } from "src/app/compoentsactions/state/components.reducer";
import { learnReducer } from "src/app/effects/state/learn.reducer";

export const reducersMap = {
    basicContext: basicReducer,
    componentContext: componentReducer,
    learnContext: learnReducer
  };