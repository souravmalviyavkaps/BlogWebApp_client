import { API_URLS } from "../utils/constants.js"
import axios from 'axios';
import Cookies from "js-cookie";

export const fetchBlogs = async(limit)=>{
    try {
        const res = await axios.get(API_URLS.home(limit));
        const data = res.data;
        if(res.data.success){
            return {
                data,
                success: true
            }
        }

        throw new Error(res.message);  

    } catch (error) {
        console.log('Error in fetching blogs : ', error);
        return {
            success: false,
            message: error.message
        }
    }
}

export const login = async(body)=>{
    try {
        const res = await axios.post(API_URLS.createSession(), body);
        const data = res.data;
        
        if(res.data.success){
            return {
                data,
                success: true
            }
        }
        throw new Error(res.message);
    } catch (error) {
        console.log('Error while logging in :', error);
        return {
            success: false,
            message: error.message
        }
    }
}

export const register = async (body) => {
    try {
        const res = await axios.post(API_URLS.create(), body);
        const data = res.data;
        if(res.data.success){
            return {
                data,
                success: true
            }
        }
        throw new Error(res.message);

    } catch (error) {
        console.log('Error while registerng user : ', error);
        return {
            success: false,
            message: error.message
        }
    }
}

export const readProfile = async ()=>{
    try {
        const res = await axios.get(API_URLS.profile());
        const data = res.data;
        if(res.data.success){
            return {
                data,
                success: true
            }
        }
        throw new Error(res.message);

    } catch (error) {
        console.log('Error while reading profile : ', error);
        return {
            success: false,
            message: error.message
        }
    }
}

export const updateProfile = async (body)=>{
    try {
        const res = await axios.patch(API_URLS.profile(), body, {
            headers: {
                Authorization: 'Bearer '+Cookies.get('token'),
            }
        });
        const data = res.data;
        if(res.data.success){
            return {
                data,
                success: true
            }
        }
        throw new Error(res.message);

    } catch (error) {
        console.log('Error while updating profile : ', error);
        return {
            success: false,
            message: error.message
        }
    }
}

export const fetchCategories = async()=>{
    try {
        const res = await axios.get(API_URLS.fetchCategories());
        if(res.data.success){
            return {
                data: res.data.data,
                message: "Categories fetched successfully",
                success: true
            }
        }
        console.log(res)
        throw new Error(res.message);
    } catch (error) {
        console.log('Error while fetching categories :', error.message )
        return {
            success: false,
            message: error.message
        }
    }
}

export const fetchUsers = async()=>{
    try {
        const res = await axios.get(API_URLS.fetchUsers(), 
        {headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }});
        if(res.data.success){
            return {
                data: res.data.data,
                message: "Users fetched successfully",
                success: true
            }
        }
        console.log(res)
        throw new Error(res.message);
    } catch (error) {
        console.log('Error while fetching users :', error.message )
        return {
            success: false,
            message: error.message
        }
    }
} 

export const postBlog = async(body)=>{
    try {
        const res = await axios.post(API_URLS.postBlog(), body, {
            headers: {
                Authorization: 'Bearer '+Cookies.get('token'),
                "Content-Type": 'multipart/form-data'
            }
        });
        console.log('api called')
        if(res.data.success){
            return {
                success: true,
                data: res.data,
                message: 'Blog posted successfully !!'
            }
        }
        throw new Error(res.message);
    } catch (error) {
        console.log('Error while posting blog : ', error);
        return {
            success: false,
            message: error.message
        }
    }
}

export const fetchCategoryById = async(id)=> {
    try {
        const res = await axios.get( API_URLS.fetchCategoryById(id), {
            headers: {
                Authorization: 'Bearer '+Cookies.get('token'),
            }
        })
        if(res.data.success){
            return {
                data: res.data.data,
                message: "Category fetched successfully",
                success: true
            }
        }
        throw new Error(res.message);
    } catch (error) {
        console.log('Error while posting blog : ', error);
        return {
            success: false,
            message: error.message
        }
    }
}