import { Outlet,useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AdminHeader from "./components/AdminHeader"

const App = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin')
  return (
    <>
      {isAdminPage ? <AdminHeader/> : <Header/>}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  )
}

export default App
