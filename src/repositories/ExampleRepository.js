import Repository from "./Repository";

const resource = "https://jsonplaceholder.typicode.com/posts";
export default {
  get() {
    return Repository.get(`${resource}`);
  },

  getExemple(exampleId) {
    return Repository.get(`${resource}/${exampleId}`);
  },

  createExemple(payload) {
    return Repository.post(`${resource}`, payload);
  }
};
