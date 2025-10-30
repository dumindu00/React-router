import Feed from "./Feed"


const Home = ({posts}) => {
  return (
    <main className="Home">
      
        {posts.length ? (
          <Feed
            posts={posts}
          />
        ) : (
          <p>
            No post to show!
          </p>
        )}
      
    </main>
  )
}

export default Home
