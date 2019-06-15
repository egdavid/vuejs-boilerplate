import Repository from "./Repository";

const resource = "/base";
export default {
  get() {
    return Repository.get(`${resource}`);
  },

  getTeam(baseId) {
    return Repository.get(`${resource}/${baseId}`);
  },

  createTeam(payload) {
    return Repository.post(`${resource}`, payload);
  }
};
