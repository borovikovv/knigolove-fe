export interface RequestOptions extends Request {
  method: "GET" | "PUT" | "POST" | "DELETE" | "PATCH";
}