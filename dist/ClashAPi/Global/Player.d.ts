import { PlayerData } from "../../types/classes";
export declare class Player {
    #private;
    achievements: {
        name: string;
        stars: number;
        value: number;
        target: number;
        info: string;
        completionInfo: string;
        village: string;
    }[];
    attackWins: number;
    bestTrophies: number;
    bestVersusTrophies: number;
    builderHallLevel: number;
    clan: {
        tag: string;
        name: string;
        clanLevel: number;
        badgeUrls: {
            small: string;
            large: string;
            medium: string;
        };
    };
    defenseWins: number;
    donations: number;
    donationsReceived: number;
    expLevel: number;
    heroes: {
        name: string;
        level: number;
        maxLevel: number;
        village: string;
    }[];
    labels: {
        id: number;
        name: string;
        iconUrls: object;
    }[];
    name: string;
    role: string;
    spells: {
        name: string;
        level: number;
        maxLevel: number;
        village: string;
    }[];
    tag: string;
    townHallLevel: string;
    troops: {
        name: string;
        level: number;
        maxLevel: number;
        village: string;
    }[];
    trophies: number;
    versusBattleWinCount: number;
    versusBattleWin: number;
    versusTrophies: number;
    warPreference: string;
    warStars: number;
    constructor(data: PlayerData);
}
