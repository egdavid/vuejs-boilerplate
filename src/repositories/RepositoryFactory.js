import BaseRepository from './BaseRepository'

const repositories = {
  base: BaseRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
