import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EnterpriseBusinessSol from "./pages/solutions/enterprise-business-solutions";
import EnterpriseNetwoekInf from "./pages/solutions/enterprise-network-infrastructure";
import AdvancedBusinessTelephone from "./pages/solutions/advanced-business-telephone";
import ServerToTheHome from "./pages/solutions/server-solution";
import SmartHomes from "./pages/solutions/smart-homes";
import Projects from "./pages/projects";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      secondary: {
        main: "#ffebcd",
      },
    },
    typography: {
      fontFamily: "wancore",
      h1: {
        fontFamily: "wancore-header",
      },
      h2: {
        fontFamily: "wancore-header",
      },
      h3: {
        fontFamily: "wancore-header",
      },
      h4: {
        fontFamily: "wancore-header",
      },
      h5: {
        fontSize: "30px",
      },
      h6: {
        fontSize: "25px",
      },
      body1: {
        fontSize: "15px",
      },
      body2: {
        fontSize: "20px",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/smart-home" element={<SmartHomes />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/enterprise-business-solutions"
              element={<EnterpriseBusinessSol />}
            />
            <Route
              path="/enterprise-network-infrastructure"
              element={<EnterpriseNetwoekInf />}
            />
            <Route path="/server-solution" element={<ServerToTheHome />} />
            <Route
              path="/advanced-business-telephone"
              element={<AdvancedBusinessTelephone />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
