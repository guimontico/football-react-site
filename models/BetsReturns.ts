export interface League {
	id: number;
	name: string;
	country: string;
	logo: string;
	flag: string;
	season: number;
}

export interface Fixture {
	id: number;
	timezone: string;
	date: Date;
	timestamp: number;
}

export interface Value {
	value: string;
	odd: string;
}

export interface Bet {
	id: number;
	name: string;
	values: Value[];
}

export interface Bookmaker {
	id: number;
	name: string;
	bets: Bet[];
}

export interface BetsReturns {
	league: League;
	fixture: Fixture;
	update: Date;
	bookmakers: Bookmaker[];
}
