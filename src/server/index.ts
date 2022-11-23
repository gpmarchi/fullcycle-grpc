import 'reflect-metadata';
import '@shared/container';

import * as timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import { CategoryServiceService } from 'proto/pb/v1/category_grpc_pb';
import {
  CreateCategoryRequest,
  CreateCategoryResponse,
  Category,
  Blank,
  CategoryList,
  CategoryGetRequest,
} from 'proto/pb/v1/category_pb';
import { container } from 'tsyringe';

import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerReadableStream,
  ServerUnaryCall,
  ServerDuplexStream,
} from '@grpc/grpc-js';
import { CreateCategoryService } from '@modules/courses/services/CreateCategoryService';
import { ListCategoriesService } from '@modules/courses/services/ListCategoriesService';
import { ShowCategoryService } from '@modules/courses/services/ShowCategoryService';

const createCategory = async (
  call: ServerUnaryCall<CreateCategoryRequest, CreateCategoryResponse>,
  callback: sendUnaryData<CreateCategoryResponse>,
) => {
  const createCategory = container.resolve(CreateCategoryService);

  try {
    const category = await createCategory.execute({
      name: call.request.getName(),
      description: call.request.getDescription(),
    });

    const response = new CreateCategoryResponse();

    const categoryResponse = new Category();
    categoryResponse.setId(category.id);
    categoryResponse.setName(category.name);
    categoryResponse.setDescription(category.description);

    const createdAt = new timestamp_pb.Timestamp();
    createdAt.fromDate(new Date(category.created_at));
    categoryResponse.setCreatedAt(createdAt);

    const updatedAt = new timestamp_pb.Timestamp();
    updatedAt.fromDate(new Date(category.updated_at));
    categoryResponse.setUpdatedAt(updatedAt);

    response.setCategory(categoryResponse);

    callback(null, response);
  } catch (error) {
    console.log(error);
    callback(error, null);
  }
};

const createCategoryStream = async (
  call: ServerReadableStream<CreateCategoryRequest, CategoryList>,
  callback: sendUnaryData<CategoryList>,
) => {
  const createCategory = container.resolve(CreateCategoryService);

  const categoriesResponse = new CategoryList();
  const categories: Category[] = [];

  call.on('data', async (createCategoryRequest: CreateCategoryRequest) => {
    try {
      const category = await createCategory.execute({
        name: createCategoryRequest.getName(),
        description: createCategoryRequest.getDescription(),
      });

      const categoryResponse = new Category();
      categoryResponse.setId(category.id);
      categoryResponse.setName(category.name);
      categoryResponse.setDescription(category.description);

      const createdAt = new timestamp_pb.Timestamp();
      createdAt.fromDate(new Date(category.created_at));
      categoryResponse.setCreatedAt(createdAt);

      const updatedAt = new timestamp_pb.Timestamp();
      updatedAt.fromDate(new Date(category.updated_at));
      categoryResponse.setUpdatedAt(updatedAt);

      categories.push(categoryResponse);

      categoriesResponse.setCategoriesList(categories);
    } catch (error) {
      callback(error, null);
    }
  });

  call.on('end', () => {
    callback(null, categoriesResponse);
  });
};

const createCategoryStreamBidirectional = async (
  call: ServerDuplexStream<CreateCategoryRequest, Category>,
) => {
  const createCategory = container.resolve(CreateCategoryService);

  let categoryResponse = new Category();

  call.on('data', async (createCategoryRequest: CreateCategoryRequest) => {
    try {
      const category = await createCategory.execute({
        name: createCategoryRequest.getName(),
        description: createCategoryRequest.getDescription(),
      });

      categoryResponse = new Category();
      categoryResponse.setId(category.id);
      categoryResponse.setName(category.name);
      categoryResponse.setDescription(category.description);

      const createdAt = new timestamp_pb.Timestamp();
      createdAt.fromDate(new Date(category.created_at));
      categoryResponse.setCreatedAt(createdAt);

      const updatedAt = new timestamp_pb.Timestamp();
      updatedAt.fromDate(new Date(category.updated_at));
      categoryResponse.setUpdatedAt(updatedAt);

      call.write(categoryResponse);
    } catch (error) {
      call.emit('error', error);
    }
  });

  call.on('end', () => {
    call.end();
  });
};

const listCategories = async (
  call: ServerUnaryCall<Blank, CategoryList>,
  callback: sendUnaryData<CategoryList>,
) => {
  const listCategories = container.resolve(ListCategoriesService);

  try {
    const categories = await listCategories.execute();

    const categoriesResponse = new CategoryList();

    categories.forEach(category => {
      const categoryResponse = new Category();
      categoryResponse.setId(category.id);
      categoryResponse.setName(category.name);
      categoryResponse.setDescription(category.description);

      const createdAt = new timestamp_pb.Timestamp();
      createdAt.fromDate(new Date(category.created_at));
      categoryResponse.setCreatedAt(createdAt);

      const updatedAt = new timestamp_pb.Timestamp();
      updatedAt.fromDate(new Date(category.updated_at));
      categoryResponse.setUpdatedAt(updatedAt);

      categoriesResponse.addCategories(categoryResponse);
    });

    callback(null, categoriesResponse);
  } catch (error) {
    console.log(error);
    callback(error, null);
  }
};

const getCategory = async (
  call: ServerUnaryCall<CategoryGetRequest, Category>,
  callback: sendUnaryData<Category>,
) => {
  const showCategory = container.resolve(ShowCategoryService);

  try {
    const category_id = call.request.getId();

    const category = await showCategory.execute(category_id);

    const categoryResponse = new Category();
    categoryResponse.setId(category.id);
    categoryResponse.setName(category.name);
    categoryResponse.setDescription(category.description);

    const createdAt = new timestamp_pb.Timestamp();
    createdAt.fromDate(new Date(category.created_at));
    categoryResponse.setCreatedAt(createdAt);

    const updatedAt = new timestamp_pb.Timestamp();
    updatedAt.fromDate(new Date(category.updated_at));
    categoryResponse.setUpdatedAt(updatedAt);

    callback(null, categoryResponse);
  } catch (error) {
    console.log(error);
    callback(error, null);
  }
};

const server = new Server();

server.addService(CategoryServiceService, {
  createCategory,
  createCategoryStream,
  createCategoryStreamBidirectional,
  listCategories,
  getCategory,
});

server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
  server.start();

  console.log('server is running on 0.0.0.0:4000');
});
