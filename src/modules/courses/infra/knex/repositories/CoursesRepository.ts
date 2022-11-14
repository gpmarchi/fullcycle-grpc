import { plainToInstance } from 'class-transformer';
import { v4 as uuid } from 'uuid';

import { ICreateCourseDTO } from '@modules/courses/dtos/ICreateCourseDTO';
import { knex } from '@shared/infra/knex';

import { ICoursesRepository } from '../../repositories/ICoursesRepository';
import { Course } from '../entities/Course';

class CoursesRepository implements ICoursesRepository {
  public async create(courseData: ICreateCourseDTO): Promise<Course> {
    const id = uuid();

    await knex<Course>('courses').insert({
      id,
      ...courseData,
    });

    const result = await knex<Course>('courses').where('id', id).first();

    const course = plainToInstance(Course, result);

    return course;
  }

  public async findById(id: string): Promise<Course | undefined> {
    const course = await knex<Course>('courses').where({ id }).first();

    return course;
  }

  public async findByCategoryId(category_id: string): Promise<Course[]> {
    const courses = await knex<Course>('courses').where({
      category_id,
    });

    return courses;
  }

  public async findAll(): Promise<Course[]> {
    const courses = await knex<Course>('courses');

    return courses;
  }
}

export { CoursesRepository };
