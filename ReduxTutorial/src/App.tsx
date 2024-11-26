import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./app/NavBar";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-sky-900/80">
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
