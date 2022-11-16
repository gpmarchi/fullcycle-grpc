import { container } from 'tsyringe';

import { CategoriesRepository } from '@modules/courses/infra/knex/repositories/CategoriesRepository';
import { ICategoriesRepository } from '@modules/courses/repositories/ICategoriesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
