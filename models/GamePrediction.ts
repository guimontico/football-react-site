   
    export interface GamePrediction {
        id: number;
        predictions: Predictions;
        league: League;
        teams: Teams;
        comparison: Comparison;
        h2h: H2hArray[];
    }

    export interface Winner {
        id: number;
        name: string;
        comment: string;
    }

    export interface GoalsPredction {
        home: string | null;
        away: string | null;
    }

    export interface Percent {
        home: string;
        draw: string;
        away: string;
    }

    export interface Predictions {
        winner: Winner;
        win_or_draw: boolean;
        under_over: string | null;
        goals: GoalsPredction;
        advice: string;
        percent: Percent;
    }

    export interface League {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
    }

    export interface For {
        total: number;
        average: string;
    }

    export interface GoalsBiggestFor {
        home: number;
        away: number;
    }

    export interface Against {
        total: number;
        average: string;
    }

    export interface GoalsBiggestAgainst {
        home: number;
        away: number;
    }

    export interface GoalsFor {
        total: Total;
        average: Average;
        minute: Minute;
    }

    export interface GoalsAgainst {
        total: Total;
        average: Average;
        minute: Minute;
    }

    export interface Goals {
        for: For;
        against: Against;
    }

    export interface GoalsBiggest {
        for: GoalsBiggestFor;
        against: GoalsBiggest;
    }

    export interface GoalsComparison {
        home: string;
        away: string;
    }

    export interface GoalsLeagueHome {
        for: GoalsFor;
        against: GoalsAgainst;
    }

    export interface Last5 {
        form: string;
        att: string;
        def: string;
        goals: Goals;
    }

    export interface Played {
        home: number;
        away: number;
        total: number;
    }

    export interface Wins {
        home: number;
        away: number;
        total: number;
    }

    export interface WinsBiggest {
        home: string;
        away: string;
    }

    export interface Draws {
        home: number;
        away: number;
        total: number;
    }

    export interface Loses {
        home: number;
        away: number;
        total: number;
    }

    export interface LosesBiggest {
        home: string;
        away: string;
    }

    export interface Fixtures {
        played: Played;
        wins: Wins;
        draws: Draws;
        loses: Loses;
    }

    export interface Total {
        home: number;
        away: number;
        total: number;
    }

    export interface Average {
        home: string;
        away: string;
        total: string;
    }

    export interface MinuteType {
        total: number;
        percentage: string; 
    }

    export interface Minute {
        "0-15": MinuteType;
        "16-30": MinuteType;
        "31-45": MinuteType;
        "46-60": MinuteType;
        "61-75": MinuteType;
        "76-90": MinuteType;
        "91-105": MinuteType;
        "106-120": MinuteType;
    }

    export interface Streak {
        wins: number;
        draws: number;
        loses: number;
    }

    export interface Biggest {
        streak: Streak;
        wins: WinsBiggest;
        loses: LosesBiggest;
        goals: GoalsBiggest;
    }

    export interface CleanSheet {
        home: number;
        away: number;
        total: number;
    }

    export interface FailedToScore {
        home: number;
        away: number;
        total: number;
    }

    export interface Scored {
        total: number;
        percentage: string;
    }

    export interface Missed {
        total: number;
        percentage: string;
    }

    export interface Penalty {
        scored: Scored;
        missed: Missed;
        total: number;
    }

    export interface Lineup {
        formation: string;
        played: number;
    }

    export interface Cards {
        yellow: MinuteType;
        red: MinuteType;
    }

    export interface LeagueStats {
        form: string;
        logo: string;
        name: string;
        fixtures: Fixtures;
        goals: GoalsLeagueHome;
        biggest: Biggest;
        clean_sheet: CleanSheet;
        failed_to_score: FailedToScore;
        penalty: Penalty;
        lineups: Lineup[];
        cards: Cards;
    }

    export interface Home {
        id: number;
        name: string;
        logo: string;
        last_5: Last5;
        league: LeagueStats;
    }

    export interface Away {
        id: number;
        name: string;
        logo: string;
        last_5: Last5;
        league: LeagueStats;
    }

    export interface Teams {
        home: Home;
        away: Away;
    }

    export interface Form {
        home: string;
        away: string;
    }

    export interface Att {
        home: string;
        away: string;
    }

    export interface Def {
        home: string;
        away: string;
    }

    export interface PoissonDistribution {
        home: string;
        away: string;
    }

    export interface H2h {
        home: string;
        away: string;
    }

    export interface TotalComparison {
        home: string;
        away: string;
    }

    export interface Comparison {
        form: Form;
        att: Att;
        def: Def;
        poisson_distribution: PoissonDistribution;
        h2h: H2h;
        goals: GoalsComparison;
        total: TotalComparison;
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

    export interface Fixture {
        id: number;
        referee: string;
        timezone: string;
        date: Date;
        timestamp: number;
        periods: Periods;
        venue: Venue;
        status: Status;
    }

    export interface LeagueH2h {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        round: string;
    }

    export interface HomeH2h {
        id: number;
        name: string;
        logo: string;
        winner: boolean | null;
    }

    export interface AwayH2h {
        id: number;
        name: string;
        logo: string;
        winner: boolean | null;
    }

    export interface TeamsH2h {
        home: HomeH2h;
        away: AwayH2h;
    }

    export interface GoalsH2h {
        home: number;
        away: number;
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

    export interface PenaltyH2h {
        home: number | null;
        away: number | null;
    }

    export interface Score {
        halftime: Halftime;
        fulltime: Fulltime;
        extratime: Extratime;
        penaltyH2h: PenaltyH2h;
    }

    export interface H2hArray {
        fixture: Fixture;
        league: LeagueH2h;
        teams: TeamsH2h;
        goals: GoalsH2h;
        score: Score;
    }

