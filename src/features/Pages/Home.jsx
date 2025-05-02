import { useLoaderData } from "react-router-dom";
import Menu from "../menu/Menu";
import Header from "../ui/Header";
import Hero from "../ui/Hero";

function Home() {
  const caps = useLoaderData();
  return (
    <div>
      <Header />
      <Hero />
      <Menu caps={caps} />
    </div>
  );
}
export default Home;
