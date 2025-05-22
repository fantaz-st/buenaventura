import dynamic from "next/dynamic";
import HeaderStatic from "./HeaderStatic";

/**
 * Entry point used by pages/layouts.
 * – Streams <HeaderStatic/> from the server.
 * – Swaps in <HeaderHydrated/> on the client *after* JS bundles load.
 */
const HeaderHydrated = dynamic(() => import("./HeaderHydrated"), {
  ssr: false,
  loading: () => <HeaderStatic />, // static placeholder during JS download
});

export default function Header() {
  return <HeaderHydrated />;
}
