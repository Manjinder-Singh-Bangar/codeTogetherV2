import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import SearchPage from "./Pages/Search.jsx"
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx"
import NewPost from "./Components/NewPost.jsx"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import Logout from "./Pages/Logout.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        // Private Routes
          <Route path="" element={<ProtectedRoute />}>
            <Route path="" element={<Home />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="new-post" element={<NewPost />} />
          </Route>
          // Public Routes
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="signup" element={<Signup />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
