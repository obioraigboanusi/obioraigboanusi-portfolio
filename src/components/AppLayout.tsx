import Sidebar from './Sidebar';

function AppLayout({ children }: any) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-h-screen overflow-y-scroll no-scrollbar">
        {/* <nav>nav bar</nav> */}
        {children}
        {/* <footer>footer</footer> */}
      </div>
    </div>
  );
}

export default AppLayout;
