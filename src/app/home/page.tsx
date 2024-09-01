import Menu from "../_components/menu/menu";
import SessionLeft from "../_components/session/sessionLeft";
import SessionCollection from "../_components/sessionCollection/sessionCollection";

export default function Home() {
  return (
    <>
      <SessionLeft />
      <SessionCollection />
      <Menu />
    </>
  );
}