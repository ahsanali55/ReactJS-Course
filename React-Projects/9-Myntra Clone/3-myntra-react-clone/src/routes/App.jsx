import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import FetchItems from "../components/FetchItems";


function App() {
   const { currentlyFetching } = useSelector((state) => state.fetchStatus)


  return (
    <>
      <Header />
      <FetchItems />
      {currentlyFetching ? <LoadingSpinner/> : <Outlet />}
      
      <Footer />
    </>
  );
}

export default App;
