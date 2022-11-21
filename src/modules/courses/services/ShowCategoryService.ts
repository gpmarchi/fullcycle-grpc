import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/error/AppError';

import { Category } from '../infra/knex/entities/Category';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

@injectable()
class ShowCategoryService {
  private categoriesRepository: ICategoriesRepository;

  constructor(
    @inject('CategoriesRepository')
    categoriesRepository: ICategoriesRepository,
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute(category_id: string): Promise<Category> {
    const category = await this.categoriesRepository.findById(category_id);

    if (!category) {
      throw new AppError('Category not found.', 404);
    }

    return category;
  }
}

export { ShowCategoryService };
