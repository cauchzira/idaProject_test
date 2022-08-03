import * as MutationTypes from "./mutation-types";
function SortArray(x, y) {
  if (x.title < y.title) {
    return -1;
  }
  if (x.title > y.title) {
    return 1;
  }
  return 0;
}

export default {
  [MutationTypes.SET_ADD_ITEM]: (state, payload) => {
    state.dbItems.unshift(payload);
  },
  [MutationTypes.SET_DELETE_ITEM]: (state, payload) => {
    state.dbItems = state.dbItems.filter((el) => el.id !== payload);
  },
  [MutationTypes.SET_SORT_ITEMS]: (state, payload) => {
    if (payload === "min") {
      state.dbItems = state.dbItems.sort(
        (prev, next) => prev.price - next.price
      );
    } else if (payload === "max") {
      state.dbItems = state.dbItems.sort(
        (prev, next) => next.price - prev.price
      );
    } else if (payload === "name") {
      state.dbItems = state.dbItems.sort(SortArray);
    }
  },
};
