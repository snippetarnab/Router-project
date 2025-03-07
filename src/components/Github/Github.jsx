import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  //using useEffect & useState
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/snippetarnab")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <>
      <div>
        <img src={data.avatar_url} alt="github image" />
        <h1>GIthub Account name: {data.login}</h1>
      </div>
    </>
  );
}

export default Github;

// export const githubInfo = async () => {
//   const res = await fetch("https://api.github.com/users/snippetarnab");
//   return res.json();
// };
