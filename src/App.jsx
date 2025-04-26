import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LawyerDetails from './pages/LawyerDetails';
import MyAppointments from './pages/MyAppointments';
import BlogPage from './pages/BlogPage';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 🧠 AppLayout: for common layout with optional footer
const AppLayout = ({ children }) => {
  const location = useLocation();

  // This is the only reliable way to detect 404 — use pathname and check if it's unmatched
  const isNotFoundPage = location.pathname !== '/' &&
    location.pathname !== '/my-appointments' &&
    location.pathname !== '/blogs' &&
    !location.pathname.startsWith('/lawyer/');

  return (
    <>
      <ToastContainer />
      <Navbar />
      {children}
      {!isNotFoundPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="/my-appointments"
          element={
            <AppLayout>
              <MyAppointments />
            </AppLayout>
          }
        />
        <Route
          path="/blogs"
          element={
            <AppLayout>
              <BlogPage />
            </AppLayout>
          }
        />
        <Route
          path="/lawyer/:id"
          element={
            <AppLayout>
              <LawyerDetails />
            </AppLayout>
          }
        />

        {/* 404 - No Footer */}
        <Route path="*" element={<><Navbar /><NotFound /></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
