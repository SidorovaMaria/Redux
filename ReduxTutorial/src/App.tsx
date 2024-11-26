import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./app/NavBar";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-teal-100">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
