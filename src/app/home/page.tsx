import Button from "../_components/button/button";
import Map from "../_components/map/map";
import Menu from "../_components/menu/menu";
import Payment from "../_components/payment/payment";
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
      <Payment />
      <Map />
    </>
  );
}