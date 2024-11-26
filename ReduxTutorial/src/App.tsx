import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./app/NavBar";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

function App() {
  return (
    <div className="bg-sky-900/80 ">
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
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
