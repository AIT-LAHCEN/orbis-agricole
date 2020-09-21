import axios from "axios";
import authHeader from './services/auth-header';

export default axios.create({
  baseURL: "/api",
  headers: authHeader()
});