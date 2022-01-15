import { ClanData, ClanMembers } from "../../types/classes"

export class Clan {
    
    #data: ClanData
    memberList: ClanMembers
    members: number
    clanLevel: number
    description: string
    name: string
    tag: string
    requiredTownhallLevel: number
    requiredTrophies: number
    warWins: number
    warWinStreak: number
    warTies: number
    warLosses: number
    warLeague: { id: number; name: string }
    isWarLogPublic: boolean
    badgeUrls: { small: string; large: string; medium: string }
    type: string
    clanPoints: number
    labels: { id: number; name: string; iconUrls: object }[]
    location: { id: number; name: string; isCountry: boolean; countryCode: string }
    warFrequency: string

    constructor(data: ClanData){
        this.#data = data
        this.memberList = data.memberList
        this.members = data.members
        this.clanLevel = data.clanLevel
        this.description = data.description
        this.name = data.name
        this.tag = data.tag
        this.requiredTownhallLevel = data.requiredTownhallLevel
        this.requiredTrophies = data.requiredTrophies 
        this.warWins = data.warWins
        this.warWinStreak = data.warWinStreak
        this.warTies = data.warTies
        this.warLosses = data.warLosses
        this.warLeague = data.warLeague
        this.isWarLogPublic = data.isWarLogPublic
        this.badgeUrls = data.badgeUrls
        this.type = data.type
        this.clanPoints = data.clanPoints
        this.labels = data.labels
        this.location = data.location
        this.warFrequency = data.warFrequency
    }
}