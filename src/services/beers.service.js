import $api from "@/http";

export default class BeersService {
    static getRandomBeer() {
        return $api.get('/beer/random_beer');
    }
}