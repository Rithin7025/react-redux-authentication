import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import store from "./store.js"
import { Provider } from "react-redux"
import HomeScreen from "./screens/HomeScreen.jsx"
import LoginScreen from "./screens/LoginScreen.jsx"
import RegisterScreen from "./screens/RegisterScreen.jsx"
import ProfileScreen from "./screens/ProfileScreen.jsx"
import PrivateRoute from "./components/PrivateRoute.jsx"
import AdLoginScreen from "./adminScreen/AdLoginScreen.jsx"
import AdPrivateRoute from "./components/AdPrivateRouter.jsx"
import AdHomeScreen from "./adminScreen/AdHomeScreen.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/adminlogin" element={<AdLoginScreen/>}/>


      <Route path='' element={<PrivateRoute/>}>

      <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      <Route path="" element={<AdPrivateRoute/>}>
              <Route path="/admin" element={<AdHomeScreen/>}/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    
  </Provider>
)
