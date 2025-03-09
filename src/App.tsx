import { Dashboard } from "./components/Dashboard/index.tsx";
import { Header } from "./components/Header/index.tsx";
import { GlobalStyle } from "./styles/global.ts";


export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
