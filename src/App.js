import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./Table";
import { data as alertData } from "./data";

function App() {
  const [data, setData] = useState(alertData);
  
  // const [isLoading, setLoading] = useState(true);

  // async function zabbleRequest() {
  //   let token =
  //     "eyJraWQiOiJXNEhnS05tXC9WVUQ3Vm0xUVJOd3g4SENaVGh3MGpQSGZqd1RFbGR4MUlQZz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3OTg5OTliYi0wN2FkLTRkZDctYmI0MS1hNDkxYjU4MTdlNWUiLCJhdWQiOiIzOHZhZDZhZzY5OG5jaWRmM3E4c3VyMDJrcCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjI3NGExMGE0LTRmM2MtNGU3ZC1hMDhjLWI1YTEzNzQ3YjFhYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjA1NTcwOTI2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9LSFEyb1h1TWciLCJjb2duaXRvOnVzZXJuYW1lIjoiNzk4OTk5YmItMDdhZC00ZGQ3LWJiNDEtYTQ5MWI1ODE3ZTVlIiwiZXhwIjoxNjA1NTc0NTI2LCJpYXQiOjE2MDU1NzA5MjYsImVtYWlsIjoiZHlsYW4uZmluZUB6YWJibGVpbmMuY29tIn0.Vkqgv7wcAKWlNvmwbJ2gnJ-7FTLyrbPW0FXdG7Stmeq4jPWiz0UR0TBdIG6pGX4g1tq0e7bmOY1YNww-pHuV6HR1XyrGhKGfsbdp6grDh_ZzlymMi8jcYf4CflGJwxwRbGYKf1W75s3JZR1h39ztFBAjnySFYhXyXmp5QGGItdhxEu9CGxKsLfBPXXXFBztGCnPjCE6gyR_dO_jWDaotBIoP_KLJjSQXHvXiISnnf5PpJymd7kR-Ej0qLBLzg5arSH08h9Qg3OQMMoMusmA1uUAVoVGrp-kcrWc37p7c1DzM77PiZLXa3XLv6_riRpGo4NNd_bzLz8NriNnBEv1GJA";

  //   let config = {
  //     url: "/dev/sandbox",
  //     method: "POST",
  //     baseURL: "https://4g0qy6vp8c.execute-api.us-west-2.amazonaws.com",
  //     headers: {
  //       "Content-Type": "applications/json",
  //       Authorization: `${token}`,
  //     },
  //   };
  //   let res = await axios(config);

  //   setData(res.data.alerts);
  //   return setLoading(false);
  // }

  // useEffect(() => {
  //   return zabbleRequest();
  // }, []);

  return (
    <div className="zabble-test">
      <div className="container main-container">
        <h2 className="hed zabble-hed">Zabble Test</h2>
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default App;
