import axios, { AxiosResponse } from "axios"
import { ClanData, PlayerData } from "../types/classes"
import { Clan } from "./Global/Clan.js"
import { Player } from "./Global/Player.js"

export class ClashClient {
    
    apiToken:string

    constructor(token: string){

        this.apiToken = token
    }
    
    /**
     * Function that fetches a clan with his tag
     * @param clanTag The tag of a clan
     * @returns A clan with data
     */
    async fetchClan(clanTag: string): Promise<Clan> {

        let clanRequest = clanTag
        const regex: RegExp = /^#[A-Z0-9]{5,12}$/
        
        if (clanTag.match(regex)){

            clanRequest = clanTag.slice(1)
        }
        else {

            throw new Error("The tag provided wasn't valid")
        }

        const response = await axios.get<ClanData>(`https://api.clashofclans.com/v1/clans/%23${clanRequest}`, {
            headers: {"Authorization":`Bearer ${this.apiToken}`},
            responseType: 'json'
        })
        return new Clan(response.data)
    }

    /**
     * Function that fetches a player by his tag
     * @param playerTag The tag of a player
     * @returns A Player with data
     */
    async fetchPlayer(playerTag: string): Promise<Player>{

        let playerRequest = playerTag
        const regex: RegExp = /^#[A-Z0-9]{5,12}$/

        if (playerTag.match(regex)){

            playerRequest = playerTag.slice(1)
        } else {

            throw new Error("The tag provided wasn't valid")
        }
        const response = await axios.get<PlayerData>(`https://api.clashofclans.com/v1/players/%23${playerRequest}`, {
            headers: {"Authorization":`Bearer ${this.apiToken}`},
            responseType: "json"
        })
        return new Player(response.data)
    }

    async getGoldPass(): Promise<AxiosResponse<any, any>> {

        const response = await axios.get(`https://api.clashofclans.com/v1/goldpass/seasons/current`, {
            headers: {"Authorization":`Bearer ${this.apiToken}`},
            responseType: "json"
        })
        return response
    }
}