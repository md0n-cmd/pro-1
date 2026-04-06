import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // You can get a free key at rawg.io/apidocs
    key: "2c93dedeb5e146548f36cfd9e9e25708", 
  },
});