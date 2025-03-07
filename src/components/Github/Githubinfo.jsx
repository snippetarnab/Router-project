import React from "react";

export const GithubInfo = async () => {
  const res = await fetch("https://api.github.com/users/snippetarnab");
  return res.json();
};
