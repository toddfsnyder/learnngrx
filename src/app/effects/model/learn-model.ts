import { Customer } from "src/app/shared/model/customer";

export interface learnContext {
    count: number;
    test: string;
    customers: Customer[];
    filterId: number;
    selectedCustomer: Customer;
  }
  
  export const initialLearnState: learnContext = {
    count: 1,
    test: "Init Data",
    customers: [],
    filterId: 0,
    selectedCustomer: new Customer()
  };