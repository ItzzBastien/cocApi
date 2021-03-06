export class Player {
    #data;
    achievements;
    attackWins;
    bestTrophies;
    bestVersusTrophies;
    builderHallLevel;
    clan;
    defenseWins;
    donations;
    donationsReceived;
    expLevel;
    heroes;
    labels;
    name;
    role;
    spells;
    tag;
    townHallLevel;
    troops;
    trophies;
    versusBattleWinCount;
    versusBattleWin;
    versusTrophies;
    warPreference;
    warStars;
    constructor(data) {
        this.#data = data;
        this.achievements = data.achievements;
        this.attackWins = data.attackWins;
        this.bestTrophies = data.bestTrophies;
        this.bestVersusTrophies = data.bestVersusTrophies;
        this.builderHallLevel = data.builderHallLevel;
        this.clan = data.clan;
        this.defenseWins = data.defenseWins;
        this.donations = data.donations;
        this.donationsReceived = data.donationsReceived;
        this.expLevel = data.expLevel;
        this.heroes = data.heroes;
        this.labels = data.labels;
        this.name = data.name;
        this.role = data.role;
        this.spells = data.spells;
        this.tag = data.tag;
        this.townHallLevel = data.townHallLevel;
        this.troops = data.troops;
        this.trophies = data.trophies;
        this.versusBattleWinCount = data.versusBattleWinCount;
        this.versusBattleWin = data.versusTrophies;
        this.versusTrophies = data.versusTrophies;
        this.warPreference = data.warPreference;
        this.warStars = data.warStars;
    }
}
