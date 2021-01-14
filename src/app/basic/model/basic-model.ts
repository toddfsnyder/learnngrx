export interface basicContext {
    count: number;
    test: string;
  }
  
  export const initialBasicState: basicContext = {
    count: 1,
    test: "Init Data",
  };