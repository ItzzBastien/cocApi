import { Clan } from "./Global/Clan.js";
import { Player } from "./Global/Player.js";
export declare class ClashClient {
    apiToken: string;
    constructor(token: string);
    /**
     * Function that fetches a clan with his tag
     * @param clanTag The tag of a clan
     * @returns A clan with data
     */
    fetchClan(clanTag: string): Promise<Clan>;
    /**
     * Function that fetches a player by his tag
     * @param playerTag The tag of a player
     * @returns A Player with data
     */
    fetchPlayer(playerTag: string): Promise<Player>;
    /**
     *
     * @returns The date of start/end of the current goldPass
     */
    getGoldpassDate(): Promise<Date>;
}
