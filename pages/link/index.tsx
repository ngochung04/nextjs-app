import React from "react";
import Link from "next/link";
const LinkPage = () => {
  return (
    <>
      <li>
        <Link href="link/PageOne">
          <a>PageOne</a>
        </Link>
      </li>
      <li>
        <Link href="link/PageTwo">
          <a>PageOne</a>
        </Link>
      </li>
    </>
  );
};

export default LinkPage;
