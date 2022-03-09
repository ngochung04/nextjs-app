import { useRouter } from "next/router";
import React from "react";

const MultipleParamPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>MultipleParamPage</h1>
      {<p>{JSON.stringify(router.query)}</p>}
    </>
  );
};

export default MultipleParamPage;
