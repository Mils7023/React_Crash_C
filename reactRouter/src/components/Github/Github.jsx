// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  //   const [githubData, setGithubData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mils7023").then((res) =>
  //       res.json().then((data) => {
  //         console.log(data);
  //         setGithubData(data);
  //       })
  //     );
  //   }, []);

  const githubData = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-500 text-white text-3xl p-4">
      Github Followers : {githubData.followers}
      <img src={githubData.avatar_url} alt="Git pic" width={300} />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mils7023");
  return response.json();
};
