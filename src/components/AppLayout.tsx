import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function AppLayout({ children }: any) {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <div className=""> {children}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
