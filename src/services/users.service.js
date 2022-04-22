import $api from "@/http";

export default class UsersService {
    static getRandomUser() {
        return $api.get('/users/random_user');
    }
}