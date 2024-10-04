'use client'
import Header from "./components/Header";
import { useTheme } from "./providers/ThemeProvider";

const Home=()=> {
  const { theme } = useTheme();
  console.log(theme,"FFFFFFFF");
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline text-red-800">
        Hello world!
      </h1>
    </>

  );
}

export default Home;
