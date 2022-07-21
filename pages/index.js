import Head from "next/head";
import Body from "../components/body";
import Menu from "../components/menu";

export default function Home() {
  return (
    <div className="width-full">
      <Menu />
      <Body />
    </div>
  );
}
