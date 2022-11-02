type Method = "GET" | "PUT" | "POST";

const call = (method: Method, url: string, payload?: any) =>
  fetch(`/api${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: payload ? JSON.stringify(payload) : undefined,
  }).then((response) => response.json());

const api = {
  get: (url: string) => call("GET", url),
  put: (url: string, payload: any) => call("PUT", url, payload),
  post: (url: string, payload: any) => call("POST", url, payload),
};

export default api;
