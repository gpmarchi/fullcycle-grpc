import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { Category } from '../knex/entities/Category';

interface ICategoriesRepository {
  create(categoryData: ICreateCategoryDTO): Promise<Category>;

  findById(id: string): Promise<Category | undefined>;

  findByCourseId(courseId: string): Promise<Category>;

  findAll(): Promise<Category[]>;
}

export { ICategoriesRepository };
