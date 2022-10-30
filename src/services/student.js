import Api from "./api";

const StudentService = {
    index: () => Api.get("/Student"),
    get: (id) => Api.get(`/Student/${id}`),
    search: (query) => Api.get(`/Student/find/${query}`),
    create: (params) => Api.post('/Student/', params),
    update: (params) => Api.put('/Student/', params),
    delete:(id)=> Api.delete(`/Student/${id}`)
}

export default StudentService;