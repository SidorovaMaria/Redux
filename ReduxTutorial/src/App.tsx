import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./app/NavBar";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";

function App() {
  return (
    <div className="bg-sky-900/80 h-[100vh]">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          ></Route>
          <Route path="/posts/:postId" element={<SinglePostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
