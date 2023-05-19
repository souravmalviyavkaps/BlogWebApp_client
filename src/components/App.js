import {Home, Navbar, Categories, Login, Register, AdminHome, UsersList, Blogs, CategoryDetail, Profile, BlogDetails, ViewBlogDetails, OtherProfile, PaymentPage, CheckoutSuccess, NotFound} from './'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<AdminHome/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/admin/blogs' element={<Blogs/>} />
        <Route path='/categories/view-details/:categoryId' element={<CategoryDetail/>} />
        <Route path='/users/profile' element={<Profile/>} />
        <Route path='/users/other-user/:id' element = {< OtherProfile/>}/>
        <Route path='/blogs/view-details/:id' element={<ViewBlogDetails/>}/>
        <Route path='/blogs/edit-details/:id' element={<BlogDetails/>} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/admin/users-list' element={<UsersList/>} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/checkout-success' element={<CheckoutSuccess/>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </BrowserRouter>
      
  )
}

export default App
