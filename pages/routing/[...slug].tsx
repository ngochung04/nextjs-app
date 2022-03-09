import { useRouter } from "next/router";
import React from "react";

const CatchAllPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>CatchAllPage</h1>
      {<p>{JSON.stringify(router.query)}</p>}
    </>
  );
};

export default CatchAllPage;
