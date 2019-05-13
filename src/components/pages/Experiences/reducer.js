import jobsList from '../../../system/jobs.json';

const initialState = {
  jobs: jobsList,
};

export default function(state = initialState, action) {
  return state;
};