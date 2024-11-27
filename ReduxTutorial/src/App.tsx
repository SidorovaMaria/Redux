import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./app/NavBar";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import { useAppSelector } from "./app/hooks";
import { selectCurrentUsername } from "./features/auth/authSlice";
import LoginPage from "./features/auth/LoginPage";
import LoginError from "./features/auth/LoginError";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const username = useAppSelector(selectCurrentUsername);
  if (!username) {
    return <Navigate to="/" replace />;
  }
  return children;
};
function App() {
  return (
    <div className="bg-sky-900/80 min-h-[100vh] ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/loginError" element={<LoginError />} /> */}

          {/* Protected Route  */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route
                    path="/posts"
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
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
