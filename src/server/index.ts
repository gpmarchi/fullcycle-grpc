import 'reflect-metadata';

import { CategoryServiceService } from 'proto/pb/v1/category_grpc_pb';
import {
  CreateCategoryRequest,
  CreateCategoryResponse,
  Category,
} from 'proto/pb/v1/category_pb';
import { container } from 'tsyringe';

import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from '@grpc/grpc-js';
import { CreateCategoryService } from '@modules/courses/services/CreateCategoryService';

import '@shared/container';

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
    categoryResponse.setCreatedAt(category.created_at);
    response.setCategory(categoryResponse);

    console.log(response);

    callback(null, response);
  } catch (error) {
    console.log(error);
    callback(error, null);
  }
};

const server = new Server();

server.addService(CategoryServiceService, { createCategory });

server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
  server.start();

  console.log('server is running on 0.0.0.0:4000');
});
