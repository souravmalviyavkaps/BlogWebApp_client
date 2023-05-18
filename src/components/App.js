import {Home, Navbar, Categories, Login, Register, AdminHome, UsersList, Blogs, CategoryDetail, Profile, BlogDetails} from './'

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
        <Route path='/blogs/view-details/:id' element={<BlogDetails/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/admin/users' element={<UsersList/>} />
      </Routes>
      
    </BrowserRouter>
      
  )
}

export default App
