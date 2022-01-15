import { PlayerData } from "../../types/classes"

export class Player {

    #data: PlayerData;
    achievements: { name: string; stars: number; value: number; target: number; info: string; completionInfo: string; village: string; }[];
    attackWins: number;
    bestTrophies: number;
    bestVersusTrophies: number;
    builderHallLevel: number;
    clan: { tag: string; name: string; clanLevel: number; badgeUrls: { small: string; large: string; medium: string; }; };
    defenseWins: number;
    donations: number;
    donationsReceived: number;
    expLevel: number;
    heroes: { name: string; level: number; maxLevel: number; village: string; }[];
    labels: { id: number; name: string; iconUrls: object; }[];
    name: string;
    role: string;
    spells: { name: string; level: number; maxLevel: number; village: string; }[];
    tag: string;
    townHallLevel: string;
    troops: { name: string; level: number; maxLevel: number; village: string; }[];
    trophies: number;
    versusBattleWinCount: number;
    versusBattleWin: number;
    versusTrophies: number;
    warPreference: string;
    warStars: number;

    constructor(data: PlayerData){
        this.#data = data
        this.achievements = data.achievements
        this.attackWins = data.attackWins
        this.bestTrophies = data.bestTrophies
        this.bestVersusTrophies = data.bestVersusTrophies
        this.builderHallLevel = data.builderHallLevel
        this.clan = data.clan
        this.defenseWins = data.defenseWins
        this.donations = data.donations
        this.donationsReceived = data.donationsReceived
        this.expLevel = data.expLevel
        this.heroes = data.heroes
        this.labels = data.labels
        this.name = data.name
        this.role = data.role
        this.spells = data.spells
        this.tag = data.tag
        this.townHallLevel = data.townHallLevel
        this.troops = data.troops
        this.trophies = data.trophies
        this.versusBattleWinCount = data.versusBattleWinCount
        this.versusBattleWin = data.versusTrophies
        this.versusTrophies = data.versusTrophies
        this.warPreference = data.warPreference
        this.warStars = data.warStars
    }
}