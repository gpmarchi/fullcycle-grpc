import { CategoriesRepository } from './courses/infra/knex/repositories/CategoriesRepository';

const categoriesRepository = new CategoriesRepository();

categoriesRepository.create({
  name: 'Programming',
  description: 'Programming languages courses',
});
