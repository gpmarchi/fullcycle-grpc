// package: pb.v1
// file: pb/v1/category.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Category extends jspb.Message { 
    getId(): string;
    setId(value: string): Category;
    getName(): string;
    setName(value: string): Category;
    getDescription(): string;
    setDescription(value: string): Category;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Category;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateCategoryRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateCategoryRequest;
    getDescription(): string;
    setDescription(value: string): CreateCategoryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCategoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCategoryRequest): CreateCategoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCategoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCategoryRequest;
    static deserializeBinaryFromReader(message: CreateCategoryRequest, reader: jspb.BinaryReader): CreateCategoryRequest;
}

export namespace CreateCategoryRequest {
    export type AsObject = {
        name: string,
        description: string,
    }
}

export class CreateCategoryResponse extends jspb.Message { 

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): Category | undefined;
    setCategory(value?: Category): CreateCategoryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCategoryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCategoryResponse): CreateCategoryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCategoryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCategoryResponse;
    static deserializeBinaryFromReader(message: CreateCategoryResponse, reader: jspb.BinaryReader): CreateCategoryResponse;
}

export namespace CreateCategoryResponse {
    export type AsObject = {
        category?: Category.AsObject,
    }
}