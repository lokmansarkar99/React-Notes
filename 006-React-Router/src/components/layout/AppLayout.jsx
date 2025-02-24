import { Outlet, useNavigation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Loader from "./UI/Loader"


const AppLayout = () => {
  const navigation = useNavigation()
 

  if(navigation.state === "loading") {
    return <Loader />
  }
  return (
    <>
    <Header />
   <main className="mt-16">
   <Outlet />
   </main>
    <Footer />
    </>
  )
}

export default AppLayout