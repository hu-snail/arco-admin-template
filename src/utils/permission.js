import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "@/store";
export default function init() {
  useEffect(() => {
    const { accessToken, perss } = store.getState().userReducer;
    const navigate = useNavigate();

    if (accessToken) {
      navigate("/page/index");
    } else {
      navigate("/");
    }
  });
  return <div />;
}
