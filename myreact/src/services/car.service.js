import axios from "axios";

export const CarService = {
    async getAll() {
        const responce = await axios.get("http://localhost:4000/cars");
        return responce.data;
    },

}
