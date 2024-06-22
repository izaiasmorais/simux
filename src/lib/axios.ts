import axios from "axios";

export const api = axios.create({
	baseURL: "https://appsimux-mv8p.onrender.com/",
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
});
