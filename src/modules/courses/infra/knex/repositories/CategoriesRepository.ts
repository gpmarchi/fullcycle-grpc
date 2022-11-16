import { plainToInstance } from 'class-transformer';
import { v4 as uuid } from 'uuid';

import { ICreateCategoryDTO } from '@modules/courses/dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '@modules/courses/repositories/ICategoriesRepository';
import { knex } from '@shared/infra/knex';

import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  public async create(categoryData: ICreateCategoryDTO): Promise<Category> {
    const id = uuid();

    await knex<Category>('categories').insert({
      id,
      ...categoryData,
    });

    const result = await knex<Category>('categories').where('id', id).first();

    const category = plainToInstance(Category, result);

    return category;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const category = await knex<Category>('categories').where({ id }).first();

    return category;
  }

  public async findByCourseId(course_id: string): Promise<Category> {
    const result = await knex<Category>('categories')
      .select(
        'categories.id',
        'categories.name',
        'categories.description',
        'categories.created_at',
        'categories.updated_at',
      )
      .leftJoin('courses', 'categories.id', 'courses.category_id')
      .where('courses.id', course_id)
      .first();

    const category = plainToInstance(Category, result);

    return category;
  }

  public async findAll(): Promise<Category[]> {
    const categories = await knex<Category>('categories');

    return categories;
  }
}

export { CategoriesRepository };
