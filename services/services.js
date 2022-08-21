import axios from "axios";

export const getToken = async () => {
  const data = JSON.stringify({
    username: "sarah",
    password: "connor",
  });

  const config = {
    method: "post",
    url: "http://localhost:8081/auth",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = await axios(config);

  return res.data.token;
};

export const getMembers = async (token) => {
  const config = {
    method: "get",
    url: "http://localhost:8081/api/members",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios(config);

  return res.data;
};

export const submitMember = async (member, token) => {
  const config = {
    method: "post",
    url: "http://localhost:8081/api/members",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: member,
  };

  await axios(config);
};
