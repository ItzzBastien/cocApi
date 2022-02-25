import { ClanData, ClanMembers } from "../../types/classes";
export declare class Clan {
    #private;
    memberList: ClanMembers;
    members: number;
    clanLevel: number;
    description: string;
    name: string;
    tag: string;
    requiredTownhallLevel: number;
    requiredTrophies: number;
    warWins: number;
    warWinStreak: number;
    warTies: number;
    warLosses: number;
    warLeague: {
        id: number;
        name: string;
    };
    isWarLogPublic: boolean;
    badgeUrls: {
        small: string;
        large: string;
        medium: string;
    };
    type: string;
    clanPoints: number;
    labels: {
        id: number;
        name: string;
        iconUrls: object;
    }[];
    location: {
        id: number;
        name: string;
        isCountry: boolean;
        countryCode: string;
    };
    warFrequency: string;
    constructor(data: ClanData, apiToken: string);
    getCurrentWar: () => Promise<void | import("axios").AxiosResponse<any, any>>;
}
