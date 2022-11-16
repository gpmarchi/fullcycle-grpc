import { ICreateCourseDTO } from '@modules/courses/dtos/ICreateCourseDTO';

import { Course } from '../infra/knex/entities/Course';

interface ICoursesRepository {
  create(coursesData: ICreateCourseDTO): Promise<Course>;

  findById(id: string): Promise<Course | undefined>;

  findByCategoryId(category_id: string): Promise<Course[]>;

  findAll(): Promise<Course[]>;
}

export { ICoursesRepository };
