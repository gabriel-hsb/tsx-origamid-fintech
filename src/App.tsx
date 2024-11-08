import DataContextProvider from "./contexts/DataContext";

import Summary from "@Pages/Summary";

import Header from "@Components/Header";
import SideNav from "@Components/SideNav";

function App() {
  return (
    <DataContextProvider>
      Fintech!
      <SideNav />
      <main>
        <Header />
        <Summary />
      </main>
    </DataContextProvider>
  );
}

export default App;
