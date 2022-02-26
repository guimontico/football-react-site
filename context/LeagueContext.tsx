import React, { createContext, useState } from 'react';

type League = {
  id: number;
  name: string;
};

interface ContextProps {
  leagues: League[];
  setLeagues: (data: League[]) => void;
}

export const LeagueContext = createContext<ContextProps>({
  leagues: [],
  setLeagues: () => {},
});

export const LeagueProvider: React.ComponentType = (props) => {
  const [leagues, setLeagues] = useState<League[]>([]);
  return (
    <LeagueContext.Provider value={{ leagues, setLeagues }}>
      {props.children}
    </LeagueContext.Provider>
  );
};

export default LeagueProvider;
