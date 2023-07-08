import Sidebar from './Sidebar';

function AppLayout({ children }: any) {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <section>
        <nav>nav bar</nav>
        {children}
        <footer>footer</footer>
      </section>
    </div>
  );
}

export default AppLayout;
