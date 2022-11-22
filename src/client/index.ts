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

const categoryStream = client.createCategoryStream((error, response) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  console.info(response);
});

const categoryRequest1 = new CreateCategoryRequest();
categoryRequest1.setName('Cat 25');
categoryRequest1.setDescription('Cat 25 desc');

const categoryRequest2 = new CreateCategoryRequest();
categoryRequest2.setName('Cat 26');
categoryRequest2.setDescription('Cat 26 desc');

const categoryRequest3 = new CreateCategoryRequest();
categoryRequest3.setName('Cat 27');
categoryRequest3.setDescription('Cat 27 desc');

categoryStream.write(categoryRequest1);
categoryStream.write(categoryRequest2);
categoryStream.write(categoryRequest3);

categoryStream.end();
