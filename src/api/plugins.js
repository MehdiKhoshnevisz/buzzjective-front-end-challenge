import request from "@/services/request";

export function getPlugins() {
  return request({
    url: "https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json",
    method: "get",
  });
}
