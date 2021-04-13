import resource from "../resource";
import QueryString from "../query-string";

let apiPrefix = process.env.MIX_API_ROUTE_PREFIX
  ? "/" + process.env.MIX_API_ROUTE_PREFIX
  : "/badaso-api";

export default {
  verify(data = {}) {
    return resource.post(apiPrefix + "/v1/verify-badaso", data);
  },
};
