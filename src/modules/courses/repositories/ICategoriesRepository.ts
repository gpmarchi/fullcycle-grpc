import { ICreateCategoryDTO } from '@modules/courses/dtos/ICreateCategoryDTO';

import { Category } from '../infra/knex/entities/Category';

interface ICategoriesRepository {
  create(categoryData: ICreateCategoryDTO): Promise<Category>;

  findById(id: string): Promise<Category | undefined>;

  findByName(name: string): Promise<Category | undefined>;

  findByCourseId(course_id: string): Promise<Category>;

  findAll(): Promise<Category[]>;
}

export { ICategoriesRepository };
