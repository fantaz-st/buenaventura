import dynamic from "next/dynamic";
import HeaderStatic from "./HeaderStatic";

const HeaderHydrated = dynamic(() => import("./HeaderHydrated"), {
  loading: () => <HeaderStatic />,
});

export default function Header() {
  return <HeaderHydrated />;
}
