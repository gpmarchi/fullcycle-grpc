import { plainToInstance } from 'class-transformer';
import { v4 as uuid } from 'uuid';

import { knex } from '@shared/infra/knex';

import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  public async create(categoryData: ICreateCategoryDTO): Promise<Category> {
    const id = uuid();

    await knex<Category>('categories').insert({
      id,
      ...categoryData,
    });

    const result = await knex<Category>('categories').where('id', id).first();

    const customer = plainToInstance(Category, result);

    return customer;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const category = await knex<Category>('categories').where({ id }).first();

    // const category = plainToInstance(Category, result);

    return category;
  }

  public async findByCourseId(courseId: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }

  public async findAll(): Promise<Category[]> {
    const categories = await knex<Category>('categories');

    return categories;
  }
}

export { CategoriesRepository };
