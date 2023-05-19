import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  let user
  if (Cookies.get('user')) {
    user = JSON.parse(Cookies.get('user'))
  }
  const handleLogout = async e => {
    e.preventDefault();
    await Cookies.remove('user');
    await Cookies.remove('token');
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Blogen
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            {user && user.role == 'admin' ? (
              <>
                <li className="nav-item px-2">
                  <Link to="/" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/blogs" className="nav-link">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/categories" className="nav-link">
                    Categories
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to="/admin/users" className="nav-link">
                    Users
                  </Link>
                </li>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown mr-3">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown">
                      <i className="fas fa-user" /> Welcome {user.fname}
                    </Link>
                    <div className="dropdown-menu">
                      <Link to={'/users/profile'} className="dropdown-item">
                        <i className="fas fa-user-circle" /> Profile
                      </Link>
                      <Link href="settings.html" className="dropdown-item">
                        <i className="fas fa-cog" /> Settings
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogout}>
                      <i className="fas fa-user-times" /> Logout
                    </Link>
                  </li>
                </ul>
              </>
            ) : user ? (
              <>
                <li className="nav-item px-2">
                  <Link to="/blogs" className="nav-link">
                    Blogs
                  </Link>
                </li>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown mr-3">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown">
                      <i className="fas fa-user" /> Welcome {user.fname}
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="profile.html" className="dropdown-item">
                        <i className="fas fa-user-circle" /> Profile
                      </Link>
                      <Link href="settings.html" className="dropdown-item">
                        <i className="fas fa-cog" /> Settings
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link" onClick={handleLogout}>
                      <i className="fas fa-user-times" /> Logout
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <li className="nav-item px-2">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
