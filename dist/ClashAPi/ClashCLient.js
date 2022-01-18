import axios from "axios";
import { Clan } from "./Global/Clan.js";
import { Player } from "./Global/Player.js";
export class ClashClient {
    apiToken;
    constructor(token) {
        this.apiToken = token;
    }
    /**
     * Function that fetches a clan with his tag
     * @param clanTag The tag of a clan
     * @returns A clan with data
     */
    async fetchClan(clanTag) {
        let clanRequest = clanTag;
        const regex = /^#[A-Z0-9]{5,12}$/;
        if (clanTag.match(regex)) {
            clanRequest = clanTag.slice(1);
        }
        else {
            throw new Error("The tag provided wasn't valid");
        }
        const response = await axios.get(`https://api.clashofclans.com/v1/clans/%23${clanRequest}`, {
            headers: { "Authorization": `Bearer ${this.apiToken}` },
            responseType: 'json'
        });
        return new Clan(response.data, this.apiToken);
    }
    /**
     * Function that fetches a player by his tag
     * @param playerTag The tag of a player
     * @returns A Player with data
     */
    async fetchPlayer(playerTag) {
        let playerRequest = playerTag;
        const regex = /^#[A-Z0-9]{5,12}$/;
        if (playerTag.match(regex)) {
            playerRequest = playerTag.slice(1);
        }
        else {
            throw new Error("The tag provided wasn't valid");
        }
        const response = await axios.get(`https://api.clashofclans.com/v1/players/%23${playerRequest}`, {
            headers: { "Authorization": `Bearer ${this.apiToken}` },
            responseType: "json"
        });
        return new Player(response.data);
    }
    /**
     *
     * @returns The date of start/end of the current goldPass
     */
    async getGoldpassDate() {
        const response = await axios.get(`https://api.clashofclans.com/v1/goldpass/seasons/current`, {
            headers: { "Authorization": `Bearer ${this.apiToken}` },
            responseType: "json"
        });
        return response.data;
    }
}
