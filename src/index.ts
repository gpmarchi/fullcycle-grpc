import { CategoriesRepository } from '@modules/courses/infra/knex/repositories/CategoriesRepository';

const categoriesRepository = new CategoriesRepository();

categoriesRepository.create({
  name: 'Programming',
  description: 'Programming languages courses',
});
