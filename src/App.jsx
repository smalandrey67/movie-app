import { Layout } from "@layout/layout";

import { Header } from "@modules/header";
import { Banner } from "@modules/banner";
import { Popular } from "@modules/popular";
import { Trailer } from "@modules/trailer";
import { LastWatching } from "@modules/last-watching";

export function App() {
  return (
    <Layout Header={<Header />} Banner={<Banner />} Popular={<Popular />} Trailer={<Trailer />} LastWatching={<LastWatching />} />
  );
}
