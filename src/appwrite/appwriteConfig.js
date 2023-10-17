/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
import config from '../config/config.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.projectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage, 
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }

    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return this.databases.updateDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }


    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.databaseId,
                config.collectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.databaseId,
                config.collectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                config.databaseId,
                config.collectionId,
                queries
            )
        } catch (error) {
            throw error;
        }
    }


    // file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.bucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.bucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    getFile(fileId) {
        try {
            return this.bucket.getFilePreview(
                config.bucketId,
                fileId
            )
        } catch (error) {
            throw error;
        }
        
    }

}

const service = new Service();
export default service;