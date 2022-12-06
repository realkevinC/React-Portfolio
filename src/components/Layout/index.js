import Sidebar from '../Sidebar';
import './index.scss';
// create a functional component
import { Outlet } from 'react-router-dom'
// display html and body tag

const Layout = () => {
    return (
        <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
    )
}

export default Layout