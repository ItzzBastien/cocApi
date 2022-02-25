export type ClanMembers = {
    tag: string
    name: string
    role: string
    expLevel: number
    league: object
    trophies: number
    versusTrophies: number
    clanRank: number
    previousClanRank: number
    donations: number
    donationsReceived: number
}[]



export interface ClanData {
    tag: string
    name: string
    type: string
    description: string
    location: { id: number, name: string, isCountry: boolean, countryCode: string}
    badgeUrls: { small: string, large: string, medium: string}
    clanLevel: number
    clanPoints: number
    clanVersusPoints: number
    requiredTrophies: number
    warFrequency: string
    warWinStreak: number
    warWins: number
    warTies: number
    warLosses: number
    isWarLogPublic: boolean
    warLeague: { id: number, name: string}
    members: number
    memberList: ClanMembers
    labels: {id: number, name: string, iconUrls: object}[]
    requiredVersusTrophies: number
    requiredTownhallLevel: number
}

export interface PlayerData {
    tag: string
    name: string
    townHallLevel: string
    expLevel: number
    trophies: number
    bestTrophies: number
    warStars: number
    attackWins: number
    defenseWins: number
    builderHallLevel: number
    versusTrophies: number
    bestVersusTrophies: number
    versusBattleWins: number
    role: string
    warPreference: string
    donations: number
    donationsReceived: number
    clan: {
        tag: string
        name: string
        clanLevel: number
        badgeUrls: { small: string, large: string, medium: string }
    }
    achievements: {
        name: string
        stars: number
        value: number
        target: number
        info: string
        completionInfo: string
        village: string
    }[]
    versusBattleWinCount: number
    labels: {
        id: number
        name: string
        iconUrls: object
    }[]
    troops: {
        name: string
        level: number
        maxLevel: number
        village: string
    }[]
    heroes: {
        name: string
        level: number
        maxLevel: number
        village: string
    }[]
    spells: {
        name: string
        level: number
        maxLevel: number
        village: string
    }[]
}

export interface SearchFilter {

    name?: string
    warFrequency?: string
    locationId?: number
    minMembers?: number
    maxMembers?: number
    minClanPoints?: number
    minClanLevel?: number
    limit?: number
    after?: number
    before?: number
    labelIds?: string

}