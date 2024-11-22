import axios from "axios";

export default class CommentService {
    static async getAll() {
        const response = await axios.get("http://localhost:8000/api/comments/");
        return response.data;
    }

    static async create(commentData) {
        const response = await axios.post("http://localhost:8000/api/comments/", commentData);
        return response.data;
    }
}
