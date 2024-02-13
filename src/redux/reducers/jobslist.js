import { JOBS_LIST } from "../actions";

const initalState = {
 jobs: [],
};

const jobsListreducer = (state = initalState, action) => {
 switch (action.type) {
  case JOBS_LIST:
   return {
    ...state,
    joblist: action.payload,
   };
  default:
   return state;
 }
};

export default jobsListreducer;
