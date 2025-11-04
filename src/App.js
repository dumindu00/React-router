import { useState } from "react"
import About from "./About"
import Header from "./Header"
import Home from "./Home"
import Navbar from "./Navbar"
import Post from "./Post"
import Hire from "./Hire"
import Footer from "./Footer"
import { Route, Routes, useNavigate } from "react-router-dom"
import PostPage from "./PostPage"
import NewPost from "./NewPost"
import Profile from "./Profile"


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      datetime: "JULY",
      body: "sdkl;"
    },
    {
      id: 2,
      title: "Second Post",
      datetime: "AUGUST",
      body: "sdklsdkl;"
    },
    {
      id: 3,
      title: "Third Post",
      datetime: "MAY",
      body: "sdklsdklsdkl;"
    }
  ])


  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')


  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let navigate = useNavigate()

  const handleDelete = (id) => {
      const postsList = posts.filter(post => post.id !== id)
      setPosts(postsList)
      navigate('/')
  }

  const handleSubmit = () => {
    
  }


  
  return (
    <div className="App">
      <Header title="Find Anything You Need"
      />
      <Navbar
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home
          posts={posts}
        />} />
        <Route path="/post" element={<NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
        />} />
        <Route path="/post/:id" element={<PostPage
          posts={posts}
          handleDelete={handleDelete}
        />} />

        <Route path="/about" element={<About />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    <Footer
    
    />
    </div>
  )
}

export default App