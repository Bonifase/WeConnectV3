import { FILTERED_BUSINESSES } from ".././actions";

export default function filteredBusinesses(state = [], action = {}) {
  switch (action.type) {
    case FILTERED_BUSINESSES:
      return action.filteredBusinesses;
    default:
      return state;
  }
}
