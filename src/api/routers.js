import request from "@/utils/request";

export function getRouters() {
  return request({
    url: "/routers",
    method: "get",
  });
}
