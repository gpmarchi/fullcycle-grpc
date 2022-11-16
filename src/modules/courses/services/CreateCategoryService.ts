import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/error/AppError';

import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../infra/knex/entities/Category';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

@injectable()
class CreateCategoryService {
  private categoriesRepository: ICategoriesRepository;

  constructor(
    @inject('CategoriesRepository')
    categoriesRepository: ICategoriesRepository,
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const registeredCategory = await this.categoriesRepository.findByName(name);

    if (registeredCategory) {
      throw new AppError('Category already registered.', 400);
    }

    const category = await this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateCategoryService };
