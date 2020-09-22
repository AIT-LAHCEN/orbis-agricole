import axios from "axios";
import authHeader from './services/auth-header';

delete axios.defaults.headers.common["https://ait-lahcen.github.io/"];
const API_URL = "https://orbisagroindustry.live";
export default axios.create({
  baseURL: API_URL+"/api",
  headers: authHeader()
});