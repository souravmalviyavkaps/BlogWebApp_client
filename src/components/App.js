import {Home, Navbar, Details, Categories, Login, Register, AdminHome, UsersList, Blogs, CategoryDetail, Profile} from './'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<AdminHome/>} />
        <Route path='/details' element={<Details/>}/>
        <Route path='/categories' element={<Categories/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/admin/users-list' element={<UsersList/>} />
        <Route path='/admin/blogs' element={<Blogs/>} />
        <Route path='/categories/view-details/:categoryId' element={<CategoryDetail/>} />
        <Route path='/users/profile' element={<Profile/>} />

      </Routes>
      
    </BrowserRouter>
      
  )
}

export default App
