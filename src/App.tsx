import { useEffect } from "react";
import { Box } from "@mui/material";
import Layout from "./pages/layout/Layout";
import Loader from "./components/loader/Loader"; 
import LoaderContext, { useLoader } from "./context/LoaderContext";


const App = () => {
  const { loading, setLoading } = useLoader(LoaderContext);

  useEffect(() => {
    setLoading(true);

    const handlePageLoad = () => {
      setTimeout(() => setLoading(false), 300);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, [setLoading]);

  return (
    <Box component="main">
      
        <Layout />
    
    </Box>
  );
};

export default App;