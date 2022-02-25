import axios from "axios";
export class Clan {
    #data;
    memberList;
    members;
    clanLevel;
    description;
    name;
    tag;
    requiredTownhallLevel;
    requiredTrophies;
    warWins;
    warWinStreak;
    warTies;
    warLosses;
    warLeague;
    isWarLogPublic;
    badgeUrls;
    type;
    clanPoints;
    labels;
    location;
    warFrequency;
    #apiToken;
    constructor(data, apiToken) {
        this.#apiToken = apiToken;
        this.#data = data;
        this.memberList = data.memberList;
        this.members = data.members;
        this.clanLevel = data.clanLevel;
        this.description = data.description;
        this.name = data.name;
        this.tag = data.tag;
        this.requiredTownhallLevel = data.requiredTownhallLevel;
        this.requiredTrophies = data.requiredTrophies;
        this.warWins = data.warWins;
        this.warWinStreak = data.warWinStreak;
        this.warTies = data.warTies;
        this.warLosses = data.warLosses;
        this.warLeague = data.warLeague;
        this.isWarLogPublic = data.isWarLogPublic;
        this.badgeUrls = data.badgeUrls;
        this.type = data.type;
        this.clanPoints = data.clanPoints;
        this.labels = data.labels;
        this.location = data.location;
        this.warFrequency = data.warFrequency;
    }
    getCurrentWar = () => {
        const response = axios.get(`https://api.clashofclans.com/v1/clans/${this.tag.slice(1)}/currentwar`, {
            headers: { "Authorization": `Bearer ${this.#apiToken}` },
            responseType: 'json',
        }).catch(err => console.log("Can't fetch war for this clan"));
        return response;
    };
}
