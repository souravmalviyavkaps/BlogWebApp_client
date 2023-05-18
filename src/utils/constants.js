
const API_ROOT = `http://localhost:8002`;
export const API_URLS = {
    // home
    home: (limit)=> `${API_ROOT}/blogs?limit=${limit}`, 

    //users
    create: ()=> `${API_ROOT}/users/create`,
    createSession: ()=> `${API_ROOT}/users/create-session`,
    profile: ()=> `${API_ROOT}/users/profile`,

    //admin
    addBlog: ()=> `${API_ROOT}/admin/add-blog`,
    dashboard: ()=> `${API_ROOT}/admin`,
    addUser: ()=> `${API_ROOT}/admin/add-user`,
    addCategory: ()=> `${API_ROOT}/admin/add-category`,
    fetchUsers: ()=> `${API_ROOT}/admin/fetch-users`,
    

    //blogs
    fetchBlogs: (limit)=> `${API_ROOT}/blogs?limit=${limit}`,
    fetchBlogById: (id)=> `${API_ROOT}/blogs/details/${id}`,
    postBlog: ()=> `${API_ROOT}/blogs/post-blog`,
    fetchCategories: ()=> `${API_ROOT}/blogs/fetch-categories`,
    fetchCategoryById: (id)=> `${API_ROOT}/blogs/fetch-category/${id}`,
    updateBlog: (id)=> `${API_ROOT}/blogs/update/${id}`,
    deleteBlog: (id)=> `${API_ROOT}/blogs/delete/${id}`,



}