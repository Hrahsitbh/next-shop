export class ApiError extends Error {
  constructor(url, status) {
    super(`'${url}' returned ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.name = "ApiError";
    this.status = status;
  }
}

export async function fetcher(url, options) {
  const resp = await fetch(url, options);
  if (!resp.ok) throw new ApiError(url, resp.status);
  return await resp.json();
}
