// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pb_v1_category_pb = require('../../pb/v1/category_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

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
};

exports.CategoryServiceClient = grpc.makeGenericClientConstructor(CategoryServiceService);