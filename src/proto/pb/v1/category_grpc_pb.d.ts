// package: pb.v1
// file: pb/v1/category.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as pb_v1_category_pb from "../../pb/v1/category_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ICategoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCategory: ICategoryServiceService_ICreateCategory;
}

interface ICategoryServiceService_ICreateCategory extends grpc.MethodDefinition<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.CreateCategoryResponse> {
    path: "/pb.v1.CategoryService/CreateCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_v1_category_pb.CreateCategoryRequest>;
    requestDeserialize: grpc.deserialize<pb_v1_category_pb.CreateCategoryRequest>;
    responseSerialize: grpc.serialize<pb_v1_category_pb.CreateCategoryResponse>;
    responseDeserialize: grpc.deserialize<pb_v1_category_pb.CreateCategoryResponse>;
}

export const CategoryServiceService: ICategoryServiceService;

export interface ICategoryServiceServer extends grpc.UntypedServiceImplementation {
    createCategory: grpc.handleUnaryCall<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.CreateCategoryResponse>;
}

export interface ICategoryServiceClient {
    createCategory(request: pb_v1_category_pb.CreateCategoryRequest, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    createCategory(request: pb_v1_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    createCategory(request: pb_v1_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
}

export class CategoryServiceClient extends grpc.Client implements ICategoryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createCategory(request: pb_v1_category_pb.CreateCategoryRequest, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    public createCategory(request: pb_v1_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    public createCategory(request: pb_v1_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
}
