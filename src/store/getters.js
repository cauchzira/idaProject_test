import * as RootGetters from "@/store/getter-types";
export default {
  [RootGetters.GET_ITEMS]: ({ dbItems }) => dbItems,
};
