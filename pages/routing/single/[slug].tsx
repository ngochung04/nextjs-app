import { useRouter } from "next/router";
import React from "react";

const SingleParamPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>SingleParamPage</h1>
      {<p>{JSON.stringify(router.query)}</p>}
    </>
  );
};

export default SingleParamPage;
