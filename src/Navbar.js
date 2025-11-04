import { Link } from "react-router-dom"


const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form  className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search">Search For Something</label>
          <input
            id="search"
            type="text"
            placeholder="Search For Something"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
      </form>
                <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post" >Post</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/hire">Hire the Best</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>

    </nav>
  )
}

export default Navbar
