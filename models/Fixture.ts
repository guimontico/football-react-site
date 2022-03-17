    
    export interface Fixture {
        fixture: Game;
        league: League;
        teams: Teams;
        goals: Goals;
        score: Score;
    }

    export interface Periods {
        first: number | null;
        second: number | null;
    }

    export interface Venue {
        id: number;
        name: string;
        city: string;
    }

    export interface Status {
        long: string;
        short: string;
        elapsed: number;
    }

    export interface Game {
        id: number;
        referee: string;
        timezone: string;
        date: Date;
        timestamp: number;
        periods: Periods;
        venue: Venue;
        status: Status;
    }

    export interface League {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        round: string;
    }

    export interface Home {
        id: number;
        name: string;
        logo: string;
        winner: boolean | null;
    }

    export interface Away {
        id: number;
        name: string;
        logo: string;
        winner: boolean | null;
    }

    export interface Teams {
        home: Home;
        away: Away;
    }

    export interface Goals {
        home: number | null;
        away: number | null;
    }

    export interface Halftime {
        home: number | null;
        away: number | null;
    }

    export interface Fulltime {
        home: number | null;
        away: number | null;
    }

    export interface Extratime {
        home: number | null;
        away: number | null;
    }

    export interface Penalty {
        home: number | null;
        away: number | null;
    }

    export interface Score {
        halftime: Halftime;
        fulltime: Fulltime;
        extratime: Extratime;
        penalty: Penalty;
    }

    



