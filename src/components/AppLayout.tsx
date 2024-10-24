import Footer from './Footer';
import Navbar from './Navbar';

function AppLayout({ children }: any) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
      <Navbar />
      <div className="grow"> {children}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
