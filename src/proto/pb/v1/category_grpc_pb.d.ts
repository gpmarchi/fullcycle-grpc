// package: pb.v1
// file: pb/v1/category.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as pb_v1_category_pb from "../../pb/v1/category_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ICategoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCategory: ICategoryServiceService_ICreateCategory;
    createCategoryStream: ICategoryServiceService_ICreateCategoryStream;
    createCategoryStreamBidirectional: ICategoryServiceService_ICreateCategoryStreamBidirectional;
    listCategories: ICategoryServiceService_IListCategories;
    getCategory: ICategoryServiceService_IGetCategory;
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
interface ICategoryServiceService_ICreateCategoryStream extends grpc.MethodDefinition<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.CategoryList> {
    path: "/pb.v1.CategoryService/CreateCategoryStream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_v1_category_pb.CreateCategoryRequest>;
    requestDeserialize: grpc.deserialize<pb_v1_category_pb.CreateCategoryRequest>;
    responseSerialize: grpc.serialize<pb_v1_category_pb.CategoryList>;
    responseDeserialize: grpc.deserialize<pb_v1_category_pb.CategoryList>;
}
interface ICategoryServiceService_ICreateCategoryStreamBidirectional extends grpc.MethodDefinition<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.Category> {
    path: "/pb.v1.CategoryService/CreateCategoryStreamBidirectional";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<pb_v1_category_pb.CreateCategoryRequest>;
    requestDeserialize: grpc.deserialize<pb_v1_category_pb.CreateCategoryRequest>;
    responseSerialize: grpc.serialize<pb_v1_category_pb.Category>;
    responseDeserialize: grpc.deserialize<pb_v1_category_pb.Category>;
}
interface ICategoryServiceService_IListCategories extends grpc.MethodDefinition<pb_v1_category_pb.Blank, pb_v1_category_pb.CategoryList> {
    path: "/pb.v1.CategoryService/ListCategories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_v1_category_pb.Blank>;
    requestDeserialize: grpc.deserialize<pb_v1_category_pb.Blank>;
    responseSerialize: grpc.serialize<pb_v1_category_pb.CategoryList>;
    responseDeserialize: grpc.deserialize<pb_v1_category_pb.CategoryList>;
}
interface ICategoryServiceService_IGetCategory extends grpc.MethodDefinition<pb_v1_category_pb.CategoryGetRequest, pb_v1_category_pb.Category> {
    path: "/pb.v1.CategoryService/GetCategory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_v1_category_pb.CategoryGetRequest>;
    requestDeserialize: grpc.deserialize<pb_v1_category_pb.CategoryGetRequest>;
    responseSerialize: grpc.serialize<pb_v1_category_pb.Category>;
    responseDeserialize: grpc.deserialize<pb_v1_category_pb.Category>;
}

export const CategoryServiceService: ICategoryServiceService;

export interface ICategoryServiceServer extends grpc.UntypedServiceImplementation {
    createCategory: grpc.handleUnaryCall<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.CreateCategoryResponse>;
    createCategoryStream: grpc.handleClientStreamingCall<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.CategoryList>;
    createCategoryStreamBidirectional: grpc.handleBidiStreamingCall<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.Category>;
    listCategories: grpc.handleUnaryCall<pb_v1_category_pb.Blank, pb_v1_category_pb.CategoryList>;
    getCategory: grpc.handleUnaryCall<pb_v1_category_pb.CategoryGetRequest, pb_v1_category_pb.Category>;
}

export interface ICategoryServiceClient {
    createCategory(request: pb_v1_category_pb.CreateCategoryRequest, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    createCategory(request: pb_v1_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    createCategory(request: pb_v1_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    createCategoryStream(callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientWritableStream<pb_v1_category_pb.CreateCategoryRequest>;
    createCategoryStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientWritableStream<pb_v1_category_pb.CreateCategoryRequest>;
    createCategoryStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientWritableStream<pb_v1_category_pb.CreateCategoryRequest>;
    createCategoryStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientWritableStream<pb_v1_category_pb.CreateCategoryRequest>;
    createCategoryStreamBidirectional(): grpc.ClientDuplexStream<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.Category>;
    createCategoryStreamBidirectional(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.Category>;
    createCategoryStreamBidirectional(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.Category>;
    listCategories(request: pb_v1_category_pb.Blank, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    listCategories(request: pb_v1_category_pb.Blank, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    listCategories(request: pb_v1_category_pb.Blank, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    getCategory(request: pb_v1_category_pb.CategoryGetRequest, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.Category) => void): grpc.ClientUnaryCall;
    getCategory(request: pb_v1_category_pb.CategoryGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.Category) => void): grpc.ClientUnaryCall;
    getCategory(request: pb_v1_category_pb.CategoryGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.Category) => void): grpc.ClientUnaryCall;
}

export class CategoryServiceClient extends grpc.Client implements ICategoryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createCategory(request: pb_v1_category_pb.CreateCategoryRequest, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    public createCategory(request: pb_v1_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    public createCategory(request: pb_v1_category_pb.CreateCategoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CreateCategoryResponse) => void): grpc.ClientUnaryCall;
    public createCategoryStream(callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientWritableStream<pb_v1_category_pb.CreateCategoryRequest>;
    public createCategoryStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientWritableStream<pb_v1_category_pb.CreateCategoryRequest>;
    public createCategoryStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientWritableStream<pb_v1_category_pb.CreateCategoryRequest>;
    public createCategoryStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientWritableStream<pb_v1_category_pb.CreateCategoryRequest>;
    public createCategoryStreamBidirectional(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.Category>;
    public createCategoryStreamBidirectional(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pb_v1_category_pb.CreateCategoryRequest, pb_v1_category_pb.Category>;
    public listCategories(request: pb_v1_category_pb.Blank, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    public listCategories(request: pb_v1_category_pb.Blank, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    public listCategories(request: pb_v1_category_pb.Blank, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.CategoryList) => void): grpc.ClientUnaryCall;
    public getCategory(request: pb_v1_category_pb.CategoryGetRequest, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.Category) => void): grpc.ClientUnaryCall;
    public getCategory(request: pb_v1_category_pb.CategoryGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.Category) => void): grpc.ClientUnaryCall;
    public getCategory(request: pb_v1_category_pb.CategoryGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_v1_category_pb.Category) => void): grpc.ClientUnaryCall;
}
