import Button from "../_components/button/button";
import Menu from "../_components/menu/menu";
import SessionLeft from "../_components/session/sessionLeft";
import SessionCard from "../_components/sessionCard/sessionCard";
import SessionCollection from "../_components/sessionCollection/sessionCollection";
import SessionShop from "../_components/sessionShop/sessionShop";

export default function Home() {
  return (
    <>
      <SessionLeft />
      <SessionCollection />
      <Menu />
      <SessionCard />
      <Button />
      <SessionShop />
    </>
  );
}