export const api = async (
  url: string | URL | globalThis.Request,
  init?: RequestInit
) => {
  return await fetch(url, init).then((resp) => resp.json());
};
