import * as Router from 'react-router-dom';
import Login from './pages/Authentication_page/Login.jsx';
import Otp from './pages/Authentication_page/Otp.jsx';
import Registration from './pages/Authentication_page/Registration.jsx';
import Home from './pages/Home/Home.jsx';
import ShopByConcern from './pages/ShopByConcern.jsx';
import ProductListing from './pages/ProductListing_page/ProductListing.jsx';
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div>
      <Router.BrowserRouter>
        <ScrollToTop />
        <Router.Routes>
          <Router.Route path="/" element={<Home />} />
          <Router.Route path="/Login" element={<Login />} />
          <Router.Route path="/Otp" element={<Otp />} />
          <Router.Route path="/Registration" element={<Registration />} />
          <Router.Route path="/ShopByConcern" element={<ShopByConcern />} />
          <Router.Route path="/ProductListing" element={<ProductListing />} />
        </Router.Routes>
      </Router.BrowserRouter>
    </div>
  );
}
export default App;
