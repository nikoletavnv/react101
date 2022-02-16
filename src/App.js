import "./App.css";
import BlogPost from "./components/BlogPost";
import posts from "./data/blogposts.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">React 101</header>
      {posts.map((post) => (
        <BlogPost text={post.text} comments={post.comments} />
      ))}
    </div>
  );
}

export default App;
