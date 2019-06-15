import ExampleRepository from './ExampleRepository'

const repositories = {
  example: ExampleRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
