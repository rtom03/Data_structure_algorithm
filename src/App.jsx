import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import { route } from "./config/Routes"
import MainLayout from "./pages/MainLayout"


function App() {


  return (
    <>
     <Routes>
     <Route path="/" element={<MainLayout/>}>
     {route.map((to, index) =>
          route.index ? (
            <Route index element={to.element} key={index} />
          ) : (
            <Route path={to.path} element={to.element} key={index} />
          )
        )}
         </Route>
     </Routes>
    </>
  )
}

export default App
