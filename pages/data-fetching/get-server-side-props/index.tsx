import React from "react";

interface Users {
  name: string;
  age: number;
}

interface Props {
  users: Users[];
}

const ServerSideProps = ({ users }: Props) => {
  const style = {
    padding: "2px 16px",
    margin: "20px 10px",
  };
  return (
    <>
      {users.map((user, index) => (
        <div style={style} key={index}>
          Name: {user.name} - Age: {user.age}
        </div>
      ))}
    </>
  );
};

export default ServerSideProps;

export const getServerSideProps = async () => {
  const res = await fetch("http://jsonblob.com/api/951340660120895488");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};
