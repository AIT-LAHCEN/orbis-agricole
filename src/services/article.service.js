import http from "../http-common";

class articleDataService {
  getAll() {
    return http.get("/Articles");
  }

  get(id) {
    return http.get(`/Articles/${id}`);
  }

  create(data) {
    return http.post("/Articles", data);
  }

  update(id, data) {
    return http.put(`/Articles/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Articles/${id}`);
  }

  deleteAll() {
    return http.delete(`/Articles`);
  }

  findByTitle(title) {
    return http.get(`/Articles?title=${title}`);
  }
}

export default new articleDataService();