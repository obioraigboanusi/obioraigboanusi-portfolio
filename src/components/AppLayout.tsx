import Footer from './Footer';
import Sidebar from './Sidebar';

function AppLayout({ children }: any) {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="max-h-screen overflow-y-scroll no-scrollbar">
        {/* <nav>nav bar</nav> */}
        {children}
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
