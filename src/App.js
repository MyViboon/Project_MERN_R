import HeaderBar from "./layout/Headerbar";
import SideBar from "./layout/SideBar";

import { Routes, Route } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import Manage from "./components/admin/Manage";
import Dashboard from "./components/admin/Dashboard";
import ViewData from "./components/admin/ViewData";

function App() {
  return (
    <>
      <CssBaseline>
        <div className="app">
          <SideBar />
          <main className="content">
            <HeaderBar />
            <div className="content_body">
              <Box m="20px">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/admin/manage" element={<Manage />} />
                  <Route path="/admin/viewdata" element={<ViewData />} />
                </Routes>
              </Box>
            </div>
          </main>
        </div>
      </CssBaseline>
    </>
  );
}

export default App;
