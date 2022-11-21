// package: pb.v1
// file: pb/v1/category.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Blank extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Blank.AsObject;
    static toObject(includeInstance: boolean, msg: Blank): Blank.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Blank, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Blank;
    static deserializeBinaryFromReader(message: Blank, reader: jspb.BinaryReader): Blank;
}

export namespace Blank {
    export type AsObject = {
    }
}

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

export class CategoryList extends jspb.Message { 
    clearCategoriesList(): void;
    getCategoriesList(): Array<Category>;
    setCategoriesList(value: Array<Category>): CategoryList;
    addCategories(value?: Category, index?: number): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryList.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryList): CategoryList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryList;
    static deserializeBinaryFromReader(message: CategoryList, reader: jspb.BinaryReader): CategoryList;
}

export namespace CategoryList {
    export type AsObject = {
        categoriesList: Array<Category.AsObject>,
    }
}

export class CategoryGetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): CategoryGetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryGetRequest): CategoryGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryGetRequest;
    static deserializeBinaryFromReader(message: CategoryGetRequest, reader: jspb.BinaryReader): CategoryGetRequest;
}

export namespace CategoryGetRequest {
    export type AsObject = {
        id: string,
    }
}
