import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import axios from "axios";
// import Spinner from "../Spinner";
import { useAuth } from "../context/Auth";
import Spinner from "../components/Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("https://eventmanagementproject20240804213240.azurewebsites.net/api/Auth/verify",{
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      if (res.data.role==="Admin") {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner/>;
}