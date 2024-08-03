import Header from "../../utils/Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="d-flex h-100vh h-100">
      <Sidebar />
      <div className="main-container">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
