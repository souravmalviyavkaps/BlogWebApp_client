import { useEffect, useState } from 'react'
import { getBlogById } from '../api'
import { Link, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const ViewBlogDetails = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState({})
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchBlogById = async id => {
      const res = await getBlogById(id)
      console.log(res.data.data)
      setBlog(res.data.data)
    }
    fetchBlogById(id)

    if (Cookies.get('user')) {
      const user = JSON.parse(Cookies.get('user'))
      setUserData(user)
      console.log('user', user)
    }
  }, [])

  return (
    <>
      <h1 style={styles.heading}>Blogs</h1>

      {(userData && userData.role == 'admin') ||
      (userData && userData._id === blog.user) ? (
        <div>
          <Link
            to={'/blogs/edit-details/' + blog._id}
            style={{ fontSize: 30, backgroundColor: 'lightgrey', padding: 10 }}>
            {' '}
            Edit blog
          </Link>
        </div>
      ) : (
        ''
      )}

      <hr />

      <h3
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'purple',
          textAlign: 'center',
        }}>
        {blog.title}
      </h3>

      <div>
        <img
          style={styles.image}
          src={'http://localhost:8002/' + blog.img}
          alt="product-img"
          style={styles.image}
        />
      </div>

      <div
        style={{
          backgroundColor: 'lightyellow',
          color: 'black',
          padding: '5px',
          fontSize: 21,
          width: '80vw',
          margin: 'auto',
        }}>
        {blog.body}
      </div>
    </>
  )
}

const styles = {
  heading: {
    fontSize: 50,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bolder',
  },
  image: {
    width: '50vw',
    height: '50vh',
    borderRadius: 20,
    padding: 5,
    display: 'block',
    margin: 'auto',
  },
}
export default ViewBlogDetails
