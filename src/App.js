import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserOrdersPage from "./pages/UserOrdersPage";
import ProductsPage from "./pages/ProductPage";
import UserProfile from "./pages/UserProfilePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/orders" element={<UserOrdersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
