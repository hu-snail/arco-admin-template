import request from "@/utils/request.js";
export const getWorkplace = () => {
  return request({
    url: "/getWorkplace",
    method: "get",
  });
};
