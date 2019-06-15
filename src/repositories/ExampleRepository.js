import Repository from "./Repository";

const resource = "https://jsonplaceholder.typicode.com/posts";
export default {
  get() {
    return Repository.get(`${resource}`);
  },

  getExample(exampleId) {
    return Repository.get(`${resource}/${exampleId}`);
  },

  createExample(payload) {
    return Repository.post(`${resource}`, payload);
  }
};
