import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:4000/api", //TODO TAKE FROM ENV
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

export default http
