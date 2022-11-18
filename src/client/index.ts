import { CategoryServiceClient } from 'proto/pb/v1/category_grpc_pb';
import { CreateCategoryRequest } from 'proto/pb/v1/category_pb';

import { credentials } from '@grpc/grpc-js';

const client = new CategoryServiceClient(
  'localhost:4000',
  credentials.createInsecure(),
);

const request = new CreateCategoryRequest();

request.setName('Category 1');
request.setDescription('Category 1 description');

client.createCategory(request, (error, response) => {
  if (error) {
    console.log(error);

    process.exit(1);
  }

  console.info(response.getCategory());
});
