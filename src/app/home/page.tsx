import Brand from "../_components/homePage/brand/brand";
import Button from "../_components/homePage/button/button";
import Map from "../_components/homePage/map/map";
import Menu from "../_components/homePage/menu/menu";
import Payment from "../_components/homePage/payment/payment";
import SessionLeft from "../_components/homePage/session/sessionLeft";
import SessionCard from "../_components/homePage/sessionCard/sessionCard";
import SessionCollection from "../_components/homePage/sessionCollection/sessionCollection";
import SessionShop from "../_components/homePage/sessionShop/sessionShop";

export default function Home() {
  return (
    <>
      <SessionLeft />
      <SessionCollection />
      <Menu />
      <SessionCard />
      <Button />
      <SessionShop  />
      <Payment />
      <Map />
      <Brand />
    </>
  );
}