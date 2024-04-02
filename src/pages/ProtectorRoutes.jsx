import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import Header from "../shared/Header"


const ProtectorRoutes = () => {

  const trainer = useSelector(reducer => reducer.trainer)
  
  if (trainer.length >= 3) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
  } else {
    return <Navigate to={'/'} />
  }
}

export default ProtectorRoutes