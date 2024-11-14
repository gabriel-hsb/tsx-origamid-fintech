import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./contexts/DataContext";

import SaleId from "@/Pages/SaleId";
import Sales from "@/Pages/Sales";
import Settings from "@Pages/Settings";
import Summary from "@Pages/Summary";

import Header from "@Components/headerComponents/Header";
import SideNav from "@Components/SideNav";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="grid min-w-full min-h-screen grid-cols-1 gap-3 p-3 lg:p-5 lg:gap-5 md:grid-cols-240px-auto">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:id" element={<SaleId />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
