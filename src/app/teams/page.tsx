"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone, FaUserAlt } from "react-icons/fa";

const url = "https://randomuser.me/api/?result=6";

const Teams: React.FC = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users.results);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <section>
      <h1 className=" flex-center my-16 text-center font-sans text-[52px] font-bold">
        Our Teams
      </h1>
      {users.map((user) => {
        const {
          name: { title, first, last },
          email,
          login: { uuid, username },
          dob: { date, age },
          phone,
          picture: { large },
        } = user;

        return (
          <div
            key={uuid}
            className="rounded-lg px-5 py-10 lg:mx-auto lg:w-9/12 2xl:w-1/2 2xl:px-10"
          >
            <img
              src={large}
              alt={first}
              className="mx-auto block rounded-full"
            />
            <div className="text-center">
              <h3 className="my-3 text-3xl">
                {title}. {first} {last}
              </h3>
              <p>
                <span className="font-bold">DOB:</span>
                {moment(`${date}`).format("MMMM Do YYYY")}
              </p>
              <p>{age} Years</p>
              <div className="mx-auto my-5 underline"></div>
            </div>

            <div className="md:flex md:justify-between">
              <div>
                <p className="my-3 flex items-center">
                  <AiOutlineMail className="mr-2 text-xl" /> {email}
                </p>
                <p className="my-3 flex items-center">
                  <FaUserAlt className="mr-2 text-xl" /> {username}
                </p>
                <p className="my-3 flex items-center">
                  <FaPhone className="mr-2 text-xl" /> {phone}
                </p>
              </div>
            </div>
            <button
              onClick={() => fetchUserData()}
              className="mx-auto mt-5 block rounded-lg bg-gray-900 px-4 py-1 text-white transition-colors hover:bg-gray-600"
            >
              Next Person
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Teams;
