import { inject, injectable } from 'tsyringe';

import { Category } from '../infra/knex/entities/Category';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

@injectable()
class ListCategoriesService {
  private categoriesRepository: ICategoriesRepository;

  constructor(
    @inject('CategoriesRepository')
    categoriesRepository: ICategoriesRepository,
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.findAll();

    return categories;
  }
}

export { ListCategoriesService };
