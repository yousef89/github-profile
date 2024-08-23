"use client";
import { useState } from "react";
import RepoCard from "./repo-card";
import UserInfo from "./userInfo";

export default function Home() {
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");

  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const jsonObject = await response.json();
      setData(jsonObject);
      fetchRepos();  // Fetch repos after user data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchRepos() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const repos = await response.json();
      setRepos(repos);
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
  }

  function handleSearch(event) {
    setUsername(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      fetchData();
    }
  }

  console.log(repos);

  return (
    <div className="relative bg-[#1f2939] h-screen flex flex-col items-center">
      <img src="/planet.png" className="absolute top-0" alt="Background" />
      <div className="z-10 w-[400px] h-[50px] flex items-center bg-[#1f2939] p-2 mt-8 gap-x-2 rounded-[10px] pl-5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11"
            cy="11"
            r="7"
            stroke="#4A5567"
            strokeWidth="2"
          />
          <path
            d="M20 20L17 17"
            stroke="#4A5567"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          className="bg-[#202a3a] w-[370px] h-[50px] text-[#4A5567] ml-auto outline-none placeholder-[#4A5567]"
          value={username}
          onKeyDown={handleKeyDown}
          onChange={handleSearch}
          placeholder="Enter username"
        />
      </div>

      {data && (
        <>
          <UserInfo data={data} />
          <div className="flex flex-col w-[450px] mr-[20px] mt-10">
            <h1 className="text-[#cdd5e0] text-[25px]">{data?.name || 'No name available'}</h1>
            <p className="text-[#95a3b7] break-words mt-2">{data?.bio || 'No bio available'}</p>
          </div>
          <RepoCard repos={repos} />
        </>
      )}
    </div>
  );
}