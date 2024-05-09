// Libraries
import { Outlet } from 'react-router-dom';

// Components
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <div className="grid">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;