import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

interface Props {
  users: Users[];
}

const index = ({ users }: Props) => {
  const style = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
  };
  return (
    <>
      {users.map((user) => (
        <div style={style} key={user.id}>
          {user.name}
        </div>
      ))}
    </>
  );
};

export default index;
