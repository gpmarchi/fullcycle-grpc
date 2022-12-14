// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pb_v1_category_pb = require('../../pb/v1/category_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_v1_Blank(arg) {
  if (!(arg instanceof pb_v1_category_pb.Blank)) {
    throw new Error('Expected argument of type pb.v1.Blank');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_v1_Blank(buffer_arg) {
  return pb_v1_category_pb.Blank.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_v1_Category(arg) {
  if (!(arg instanceof pb_v1_category_pb.Category)) {
    throw new Error('Expected argument of type pb.v1.Category');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_v1_Category(buffer_arg) {
  return pb_v1_category_pb.Category.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_v1_CategoryGetRequest(arg) {
  if (!(arg instanceof pb_v1_category_pb.CategoryGetRequest)) {
    throw new Error('Expected argument of type pb.v1.CategoryGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_v1_CategoryGetRequest(buffer_arg) {
  return pb_v1_category_pb.CategoryGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_v1_CategoryList(arg) {
  if (!(arg instanceof pb_v1_category_pb.CategoryList)) {
    throw new Error('Expected argument of type pb.v1.CategoryList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_v1_CategoryList(buffer_arg) {
  return pb_v1_category_pb.CategoryList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_v1_CreateCategoryRequest(arg) {
  if (!(arg instanceof pb_v1_category_pb.CreateCategoryRequest)) {
    throw new Error('Expected argument of type pb.v1.CreateCategoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_v1_CreateCategoryRequest(buffer_arg) {
  return pb_v1_category_pb.CreateCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_v1_CreateCategoryResponse(arg) {
  if (!(arg instanceof pb_v1_category_pb.CreateCategoryResponse)) {
    throw new Error('Expected argument of type pb.v1.CreateCategoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_v1_CreateCategoryResponse(buffer_arg) {
  return pb_v1_category_pb.CreateCategoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CategoryServiceService = exports.CategoryServiceService = {
  createCategory: {
    path: '/pb.v1.CategoryService/CreateCategory',
    requestStream: false,
    responseStream: false,
    requestType: pb_v1_category_pb.CreateCategoryRequest,
    responseType: pb_v1_category_pb.CreateCategoryResponse,
    requestSerialize: serialize_pb_v1_CreateCategoryRequest,
    requestDeserialize: deserialize_pb_v1_CreateCategoryRequest,
    responseSerialize: serialize_pb_v1_CreateCategoryResponse,
    responseDeserialize: deserialize_pb_v1_CreateCategoryResponse,
  },
  createCategoryStream: {
    path: '/pb.v1.CategoryService/CreateCategoryStream',
    requestStream: true,
    responseStream: false,
    requestType: pb_v1_category_pb.CreateCategoryRequest,
    responseType: pb_v1_category_pb.CategoryList,
    requestSerialize: serialize_pb_v1_CreateCategoryRequest,
    requestDeserialize: deserialize_pb_v1_CreateCategoryRequest,
    responseSerialize: serialize_pb_v1_CategoryList,
    responseDeserialize: deserialize_pb_v1_CategoryList,
  },
  createCategoryStreamBidirectional: {
    path: '/pb.v1.CategoryService/CreateCategoryStreamBidirectional',
    requestStream: true,
    responseStream: true,
    requestType: pb_v1_category_pb.CreateCategoryRequest,
    responseType: pb_v1_category_pb.Category,
    requestSerialize: serialize_pb_v1_CreateCategoryRequest,
    requestDeserialize: deserialize_pb_v1_CreateCategoryRequest,
    responseSerialize: serialize_pb_v1_Category,
    responseDeserialize: deserialize_pb_v1_Category,
  },
  listCategories: {
    path: '/pb.v1.CategoryService/ListCategories',
    requestStream: false,
    responseStream: false,
    requestType: pb_v1_category_pb.Blank,
    responseType: pb_v1_category_pb.CategoryList,
    requestSerialize: serialize_pb_v1_Blank,
    requestDeserialize: deserialize_pb_v1_Blank,
    responseSerialize: serialize_pb_v1_CategoryList,
    responseDeserialize: deserialize_pb_v1_CategoryList,
  },
  getCategory: {
    path: '/pb.v1.CategoryService/GetCategory',
    requestStream: false,
    responseStream: false,
    requestType: pb_v1_category_pb.CategoryGetRequest,
    responseType: pb_v1_category_pb.Category,
    requestSerialize: serialize_pb_v1_CategoryGetRequest,
    requestDeserialize: deserialize_pb_v1_CategoryGetRequest,
    responseSerialize: serialize_pb_v1_Category,
    responseDeserialize: deserialize_pb_v1_Category,
  },
};

exports.CategoryServiceClient = grpc.makeGenericClientConstructor(CategoryServiceService);
