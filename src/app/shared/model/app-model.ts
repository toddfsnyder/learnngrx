import { basicContext } from "src/app/basic/model/basic-model";
import { componentContext } from "src/app/compoentsactions/model/component-model";
import { learnContext } from "src/app/effects/model/learn-model";

export interface appContext {
    basicContext: basicContext,
    componentContext: componentContext,
    learnContext: learnContext
  }