// League Data Structure
// This file contains all teams and statistics for each league
// Each stat maps to a MongoDB path for icons: league/stat-icon
// Each team maps to MongoDB paths for: team/background, team/font, team/colors

export const leagueData = {
  NBA: {
    teams: [
      { id: "ATL", name: "Atlanta Hawks", abbreviation: "ATL" },
      { id: "BOS", name: "Boston Celtics", abbreviation: "BOS" },
      { id: "BKN", name: "Brooklyn Nets", abbreviation: "BKN" },
      { id: "CHA", name: "Charlotte Hornets", abbreviation: "CHA" },
      { id: "CHI", name: "Chicago Bulls", abbreviation: "CHI" },
      { id: "CLE", name: "Cleveland Cavaliers", abbreviation: "CLE" },
      { id: "DAL", name: "Dallas Mavericks", abbreviation: "DAL" },
      { id: "DEN", name: "Denver Nuggets", abbreviation: "DEN" },
      { id: "DET", name: "Detroit Pistons", abbreviation: "DET" },
      { id: "GSW", name: "Golden State Warriors", abbreviation: "GSW" },
      { id: "HOU", name: "Houston Rockets", abbreviation: "HOU" },
      { id: "IND", name: "Indiana Pacers", abbreviation: "IND" },
      { id: "LAC", name: "LA Clippers", abbreviation: "LAC" },
      { id: "LAL", name: "Los Angeles Lakers", abbreviation: "LAL" },
      { id: "MEM", name: "Memphis Grizzlies", abbreviation: "MEM" },
      { id: "MIA", name: "Miami Heat", abbreviation: "MIA" },
      { id: "MIL", name: "Milwaukee Bucks", abbreviation: "MIL" },
      { id: "MIN", name: "Minnesota Timberwolves", abbreviation: "MIN" },
      { id: "NOP", name: "New Orleans Pelicans", abbreviation: "NOP" },
      { id: "NYK", name: "New York Knicks", abbreviation: "NYK" },
      { id: "OKC", name: "Oklahoma City Thunder", abbreviation: "OKC" },
      { id: "ORL", name: "Orlando Magic", abbreviation: "ORL" },
      { id: "PHI", name: "Philadelphia 76ers", abbreviation: "PHI" },
      { id: "PHX", name: "Phoenix Suns", abbreviation: "PHX" },
      { id: "POR", name: "Portland Trail Blazers", abbreviation: "POR" },
      { id: "SAC", name: "Sacramento Kings", abbreviation: "SAC" },
      { id: "SAS", name: "San Antonio Spurs", abbreviation: "SAS" },
      { id: "TOR", name: "Toronto Raptors", abbreviation: "TOR" },
      { id: "UTA", name: "Utah Jazz", abbreviation: "UTA" },
      { id: "WAS", name: "Washington Wizards", abbreviation: "WAS" }
    ],
    statistics: [
      { id: "PTS", name: "Points", displayName: "PTS", mongoPath: "points", format: "number" },
      { id: "REB", name: "Rebounds", displayName: "REB", mongoPath: "rebounds", format: "number" },
      { id: "AST", name: "Assists", displayName: "AST", mongoPath: "assists", format: "number" },
      { id: "STL", name: "Steals", displayName: "STL", mongoPath: "steals", format: "number" },
      { id: "BLK", name: "Blocks", displayName: "BLK", mongoPath: "blocks", format: "number" },
      { id: "3PM", name: "3-Pointers Made", displayName: "3PM", mongoPath: "three-pointers-made", format: "number" },
      { id: "FG%", name: "Field Goal %", displayName: "FG%", mongoPath: "field-goal-percentage", format: "percentage" },
      { id: "FT%", name: "Free Throw %", displayName: "FT%", mongoPath: "free-throw-percentage", format: "percentage" },
      { id: "TOV", name: "Turnovers", displayName: "TOV", mongoPath: "turnovers", format: "number" },
      { id: "MIN", name: "Minutes Played", displayName: "MIN", mongoPath: "minutes-played", format: "time" },
      { id: "+/-", name: "Plus/Minus", displayName: "+/-", mongoPath: "plus-minus", format: "signed" },
      { id: "OREB", name: "Offensive Rebounds", displayName: "OREB", mongoPath: "offensive-rebounds", format: "number" },
      { id: "DREB", name: "Defensive Rebounds", displayName: "DREB", mongoPath: "defensive-rebounds", format: "number" },
      { id: "TREB", name: "Total Rebounds", displayName: "TREB", mongoPath: "total-rebounds", format: "number" },
      { id: "TECH", name: "Technical Fouls", displayName: "TECH", mongoPath: "technical-fouls", format: "number" },
      { id: "DD", name: "Double-Double", displayName: "DD", mongoPath: "double-double", format: "number" },
      { id: "TD", name: "Triple-Double", displayName: "TD", mongoPath: "triple-double", format: "number" },
      { id: "PER", name: "PER", displayName: "PER", mongoPath: "per", format: "decimal" },
      { id: "TS%", name: "True Shooting %", displayName: "TS%", mongoPath: "true-shooting-percentage", format: "percentage" },
      { id: "BPM", name: "BPM", displayName: "BPM", mongoPath: "bpm", format: "signed" },
      { id: "USG%", name: "USG%", displayName: "USG%", mongoPath: "usage-percentage", format: "percentage" }
    ]
  },

  NFL: {
    teams: [
      { id: "ARI", name: "Arizona Cardinals", abbreviation: "ARI" },
      { id: "ATL", name: "Atlanta Falcons", abbreviation: "ATL" },
      { id: "BAL", name: "Baltimore Ravens", abbreviation: "BAL" },
      { id: "BUF", name: "Buffalo Bills", abbreviation: "BUF" },
      { id: "CAR", name: "Carolina Panthers", abbreviation: "CAR" },
      { id: "CHI", name: "Chicago Bears", abbreviation: "CHI" },
      { id: "CIN", name: "Cincinnati Bengals", abbreviation: "CIN" },
      { id: "CLE", name: "Cleveland Browns", abbreviation: "CLE" },
      { id: "DAL", name: "Dallas Cowboys", abbreviation: "DAL" },
      { id: "DEN", name: "Denver Broncos", abbreviation: "DEN" },
      { id: "DET", name: "Detroit Lions", abbreviation: "DET" },
      { id: "GB", name: "Green Bay Packers", abbreviation: "GB" },
      { id: "HOU", name: "Houston Texans", abbreviation: "HOU" },
      { id: "IND", name: "Indianapolis Colts", abbreviation: "IND" },
      { id: "JAX", name: "Jacksonville Jaguars", abbreviation: "JAX" },
      { id: "KC", name: "Kansas City Chiefs", abbreviation: "KC" },
      { id: "LV", name: "Las Vegas Raiders", abbreviation: "LV" },
      { id: "LAC", name: "Los Angeles Chargers", abbreviation: "LAC" },
      { id: "LAR", name: "Los Angeles Rams", abbreviation: "LAR" },
      { id: "MIA", name: "Miami Dolphins", abbreviation: "MIA" },
      { id: "MIN", name: "Minnesota Vikings", abbreviation: "MIN" },
      { id: "NE", name: "New England Patriots", abbreviation: "NE" },
      { id: "NO", name: "New Orleans Saints", abbreviation: "NO" },
      { id: "NYG", name: "New York Giants", abbreviation: "NYG" },
      { id: "NYJ", name: "New York Jets", abbreviation: "NYJ" },
      { id: "PHI", name: "Philadelphia Eagles", abbreviation: "PHI" },
      { id: "PIT", name: "Pittsburgh Steelers", abbreviation: "PIT" },
      { id: "SF", name: "San Francisco 49ers", abbreviation: "SF" },
      { id: "SEA", name: "Seattle Seahawks", abbreviation: "SEA" },
      { id: "TB", name: "Tampa Bay Buccaneers", abbreviation: "TB" },
      { id: "TEN", name: "Tennessee Titans", abbreviation: "TEN" },
      { id: "WAS", name: "Washington Commanders", abbreviation: "WAS" }
    ],
    statistics: [
      { id: "PASS_YDS", name: "Passing Yards", displayName: "PASS YDS", mongoPath: "passing-yards", format: "number" },
      { id: "RUSH_YDS", name: "Rushing Yards", displayName: "RUSH YDS", mongoPath: "rushing-yards", format: "number" },
      { id: "REC_YDS", name: "Receiving Yards", displayName: "REC YDS", mongoPath: "receiving-yards", format: "number" },
      { id: "TD", name: "Touchdowns", displayName: "TD", mongoPath: "touchdowns", format: "plural", pluralForm: "TDs" },
      { id: "WIN", name: "Wins", displayName: "WIN", mongoPath: "win", format: "number" },
      { id: "INT", name: "Interceptions", displayName: "INT", mongoPath: "interceptions", format: "number" },
      { id: "SACKS", name: "Sacks", displayName: "SACKS", mongoPath: "sacks", format: "number" },
      { id: "COMP", name: "Completions", displayName: "COMP", mongoPath: "completions", format: "ratio", ratioStat: "ATT" },
      { id: "ATT", name: "Attempts", displayName: "ATT", mongoPath: "attempts", format: "number" },
      { id: "COMP%", name: "Completion %", displayName: "COMP%", mongoPath: "completion-percentage", format: "percentage" },
      { id: "PASS_RTG", name: "Passer Rating", displayName: "PASS RTG", mongoPath: "passer-rating", format: "decimal" },
      { id: "QBR", name: "QBR", displayName: "QBR", mongoPath: "qbr", format: "decimal" },
      { id: "FF", name: "Forced Fumbles", displayName: "FF", mongoPath: "forced-fumbles", format: "number" },
      { id: "FR", name: "Fumbles Recovered", displayName: "FR", mongoPath: "fumbles-recovered", format: "number" },
      { id: "TACKLES", name: "Tackles", displayName: "TACKLES", mongoPath: "tackles", format: "number" },
      { id: "SOLO", name: "Solo Tackles", displayName: "SOLO", mongoPath: "solo-tackles", format: "number" },
      { id: "AST_TACK", name: "Assisted Tackles", displayName: "AST TACK", mongoPath: "assisted-tackles", format: "number" },
      { id: "TFL", name: "Tackles for Loss", displayName: "TFL", mongoPath: "tackles-for-loss", format: "number" },
      { id: "QB_HITS", name: "Quarterback Hits", displayName: "QB HITS", mongoPath: "quarterback-hits", format: "number" },
      { id: "FG_MADE", name: "Field Goals Made", displayName: "FG MADE", mongoPath: "field-goals-made", format: "number" },
      { id: "FG_YARDS", name: "Field Goals Yards", displayName: "FG YARDS", mongoPath: "field-goals-yards", format: "number" },
      { id: "FG_ATT", name: "Field Goals Attempted", displayName: "FG ATT", mongoPath: "field-goals-attempted", format: "number" },
      { id: "XP_MADE", name: "Extra Points Made", displayName: "XP MADE", mongoPath: "extra-points-made", format: "number" },
      { id: "PUNTS", name: "Punts", displayName: "PUNTS", mongoPath: "punts", format: "number" },
      { id: "PUNT_AVG", name: "Punt Average", displayName: "PUNT AVG", mongoPath: "punt-average", format: "decimal" }
    ]
  },

  NHL: {
    teams: [
      { id: "ANA", name: "Anaheim Ducks", abbreviation: "ANA" },
      { id: "ARI", name: "Arizona Coyotes", abbreviation: "ARI" },
      { id: "BOS", name: "Boston Bruins", abbreviation: "BOS" },
      { id: "BUF", name: "Buffalo Sabres", abbreviation: "BUF" },
      { id: "CGY", name: "Calgary Flames", abbreviation: "CGY" },
      { id: "CAR", name: "Carolina Hurricanes", abbreviation: "CAR" },
      { id: "CHI", name: "Chicago Blackhawks", abbreviation: "CHI" },
      { id: "COL", name: "Colorado Avalanche", abbreviation: "COL" },
      { id: "CBJ", name: "Columbus Blue Jackets", abbreviation: "CBJ" },
      { id: "DAL", name: "Dallas Stars", abbreviation: "DAL" },
      { id: "DET", name: "Detroit Red Wings", abbreviation: "DET" },
      { id: "EDM", name: "Edmonton Oilers", abbreviation: "EDM" },
      { id: "FLA", name: "Florida Panthers", abbreviation: "FLA" },
      { id: "LAK", name: "Los Angeles Kings", abbreviation: "LAK" },
      { id: "MIN", name: "Minnesota Wild", abbreviation: "MIN" },
      { id: "MTL", name: "Montreal Canadiens", abbreviation: "MTL" },
      { id: "NSH", name: "Nashville Predators", abbreviation: "NSH" },
      { id: "NJD", name: "New Jersey Devils", abbreviation: "NJD" },
      { id: "NYI", name: "New York Islanders", abbreviation: "NYI" },
      { id: "NYR", name: "New York Rangers", abbreviation: "NYR" },
      { id: "OTT", name: "Ottawa Senators", abbreviation: "OTT" },
      { id: "PHI", name: "Philadelphia Flyers", abbreviation: "PHI" },
      { id: "PIT", name: "Pittsburgh Penguins", abbreviation: "PIT" },
      { id: "SJ", name: "San Jose Sharks", abbreviation: "SJ" },
      { id: "SEA", name: "Seattle Kraken", abbreviation: "SEA" },
      { id: "STL", name: "St. Louis Blues", abbreviation: "STL" },
      { id: "TB", name: "Tampa Bay Lightning", abbreviation: "TB" },
      { id: "TOR", name: "Toronto Maple Leafs", abbreviation: "TOR" },
      { id: "VAN", name: "Vancouver Canucks", abbreviation: "VAN" },
      { id: "VGK", name: "Vegas Golden Knights", abbreviation: "VGK" },
      { id: "WSH", name: "Washington Capitals", abbreviation: "WSH" },
      { id: "WPG", name: "Winnipeg Jets", abbreviation: "WPG" }
    ],
    statistics: [
      { id: "G", name: "Goals", displayName: "G", mongoPath: "goals" },
      { id: "A", name: "Assists", displayName: "A", mongoPath: "assists" },
      { id: "PTS", name: "Points", displayName: "PTS", mongoPath: "points" },
      { id: "+/-", name: "Plus/Minus", displayName: "+/-", mongoPath: "plus-minus" },
      { id: "PIM", name: "Penalty Minutes", displayName: "PIM", mongoPath: "penalty-minutes" },
      { id: "PPG", name: "Power Play Goals", displayName: "PPG", mongoPath: "power-play-goals" },
      { id: "SHG", name: "Short Handed Goals", displayName: "SHG", mongoPath: "short-handed-goals" },
      { id: "GWG", name: "Game Winning Goals", displayName: "GWG", mongoPath: "game-winning-goals" },
      { id: "SOG", name: "Shots on Goal", displayName: "SOG", mongoPath: "shots-on-goal" },
      { id: "SH%", name: "Shot %", displayName: "SH%", mongoPath: "shot-percentage" },
      { id: "FO_W", name: "Faceoff Wins", displayName: "FO W", mongoPath: "faceoff-wins" },
      { id: "FO%", name: "Faceoff %", displayName: "FO%", mongoPath: "faceoff-percentage" },
      { id: "HITS", name: "Hits", displayName: "HITS", mongoPath: "hits" },
      { id: "BLKS", name: "Blocks", displayName: "BLKS", mongoPath: "blocks" },
      { id: "GVA", name: "Giveaways", displayName: "GVA", mongoPath: "giveaways" },
      { id: "TKA", name: "Takeaways", displayName: "TKA", mongoPath: "takeaways" },
      { id: "TOI", name: "Time on Ice", displayName: "TOI", mongoPath: "time-on-ice" },
      { id: "PP_TOI", name: "Power Play Time", displayName: "PP TOI", mongoPath: "power-play-time" },
      { id: "SH_TOI", name: "Short Handed Time", displayName: "SH TOI", mongoPath: "short-handed-time" },
      { id: "SAVES", name: "Saves", displayName: "SAVES", mongoPath: "saves" },
      { id: "SV%", name: "Save %", displayName: "SV%", mongoPath: "save-percentage" },
      { id: "GAA", name: "Goals Against Average", displayName: "GAA", mongoPath: "goals-against-average" },
      { id: "SO", name: "Shutouts", displayName: "SO", mongoPath: "shutouts" },
      { id: "W", name: "Wins", displayName: "W", mongoPath: "wins" },
      { id: "L", name: "Losses", displayName: "L", mongoPath: "losses" },
      { id: "GSAx", name: "Goals Saved Above Expected", displayName: "GSAx", mongoPath: "goals-saved-above-expected" }
    ]
  },

  MLB: {
    teams: [
      { id: "ARI", name: "Arizona Diamondbacks", abbreviation: "ARI" },
      { id: "ATL", name: "Atlanta Braves", abbreviation: "ATL" },
      { id: "BAL", name: "Baltimore Orioles", abbreviation: "BAL" },
      { id: "BOS", name: "Boston Red Sox", abbreviation: "BOS" },
      { id: "CHC", name: "Chicago Cubs", abbreviation: "CHC" },
      { id: "CWS", name: "Chicago White Sox", abbreviation: "CWS" },
      { id: "CIN", name: "Cincinnati Reds", abbreviation: "CIN" },
      { id: "CLE", name: "Cleveland Guardians", abbreviation: "CLE" },
      { id: "COL", name: "Colorado Rockies", abbreviation: "COL" },
      { id: "DET", name: "Detroit Tigers", abbreviation: "DET" },
      { id: "HOU", name: "Houston Astros", abbreviation: "HOU" },
      { id: "KC", name: "Kansas City Royals", abbreviation: "KC" },
      { id: "LAA", name: "Los Angeles Angels", abbreviation: "LAA" },
      { id: "LAD", name: "Los Angeles Dodgers", abbreviation: "LAD" },
      { id: "MIA", name: "Miami Marlins", abbreviation: "MIA" },
      { id: "MIL", name: "Milwaukee Brewers", abbreviation: "MIL" },
      { id: "MIN", name: "Minnesota Twins", abbreviation: "MIN" },
      { id: "NYM", name: "New York Mets", abbreviation: "NYM" },
      { id: "NYY", name: "New York Yankees", abbreviation: "NYY" },
      { id: "OAK", name: "Oakland Athletics", abbreviation: "OAK" },
      { id: "PHI", name: "Philadelphia Phillies", abbreviation: "PHI" },
      { id: "PIT", name: "Pittsburgh Pirates", abbreviation: "PIT" },
      { id: "SD", name: "San Diego Padres", abbreviation: "SD" },
      { id: "SF", name: "San Francisco Giants", abbreviation: "SF" },
      { id: "SEA", name: "Seattle Mariners", abbreviation: "SEA" },
      { id: "STL", name: "St. Louis Cardinals", abbreviation: "STL" },
      { id: "TB", name: "Tampa Bay Rays", abbreviation: "TB" },
      { id: "TEX", name: "Texas Rangers", abbreviation: "TEX" },
      { id: "TOR", name: "Toronto Blue Jays", abbreviation: "TOR" },
      { id: "WSH", name: "Washington Nationals", abbreviation: "WSH" }
    ],
    statistics: [
      { id: "AB", name: "At Bats", displayName: "AB", mongoPath: "at-bats" },
      { id: "H", name: "Hits", displayName: "H", mongoPath: "hits" },
      { id: "R", name: "Runs", displayName: "R", mongoPath: "runs" },
      { id: "RBI", name: "RBI", displayName: "RBI", mongoPath: "rbi" },
      { id: "HR", name: "Home Runs", displayName: "HR", mongoPath: "home-runs" },
      { id: "2B", name: "Doubles", displayName: "2B", mongoPath: "doubles" },
      { id: "3B", name: "Triples", displayName: "3B", mongoPath: "triples" },
      { id: "SB", name: "Stolen Bases", displayName: "SB", mongoPath: "stolen-bases" },
      { id: "BB", name: "Walks", displayName: "BB", mongoPath: "walks" },
      { id: "K", name: "Strikeouts", displayName: "K", mongoPath: "strikeouts" },
      { id: "AVG", name: "Batting Average", displayName: "AVG", mongoPath: "batting-average" },
      { id: "OBP", name: "On Base %", displayName: "OBP", mongoPath: "on-base-percentage" },
      { id: "SLG", name: "Slugging %", displayName: "SLG", mongoPath: "slugging-percentage" },
      { id: "OPS", name: "OPS", displayName: "OPS", mongoPath: "ops" },
      { id: "W", name: "Wins", displayName: "W", mongoPath: "wins" },
      { id: "L", name: "Losses", displayName: "L", mongoPath: "losses" },
      { id: "ERA", name: "ERA", displayName: "ERA", mongoPath: "era" },
      { id: "IP", name: "Innings Pitched", displayName: "IP", mongoPath: "innings-pitched" },
      { id: "K_P", name: "Strikeouts (Pitching)", displayName: "K", mongoPath: "strikeouts-pitching" },
      { id: "BB_P", name: "Walks (Pitching)", displayName: "BB", mongoPath: "walks-pitching" },
      { id: "H_P", name: "Hits Allowed", displayName: "H", mongoPath: "hits-allowed" },
      { id: "HR_P", name: "Home Runs Allowed", displayName: "HR", mongoPath: "home-runs-allowed" },
      { id: "SV", name: "Saves", displayName: "SV", mongoPath: "saves" },
      { id: "HLD", name: "Holds", displayName: "HLD", mongoPath: "holds" },
      { id: "WHIP", name: "WHIP", displayName: "WHIP", mongoPath: "whip" },
      { id: "QS", name: "Quality Starts", displayName: "QS", mongoPath: "quality-starts" },
      { id: "CG", name: "Complete Games", displayName: "CG", mongoPath: "complete-games" },
      { id: "SHO", name: "Shutouts", displayName: "SHO", mongoPath: "shutouts" }
    ]
  }
};

// MongoDB Asset Path Structure
// Simplified to only essential assets we actually need

export const mongoAssetPaths = {
  // Team Assets: league/teams/team-id/asset-type
  teamAssets: {
    background: (league, teamId) => `${league.toLowerCase()}/teams/${teamId.toLowerCase()}/background.png`,
    nameFont: (league, teamId) => `${league.toLowerCase()}/teams/${teamId.toLowerCase()}/name-font.ttf`,
    statFont: (league, teamId) => `${league.toLowerCase()}/teams/${teamId.toLowerCase()}/stat-font.ttf`,
    numberFont: (league, teamId) => `${league.toLowerCase()}/teams/${teamId.toLowerCase()}/number-font.ttf`,
    colors: (league, teamId) => `${league.toLowerCase()}/teams/${teamId.toLowerCase()}/colors.json`
  },

  // Stat Icons: league/stats/stat-mongo-path/icon.png
  statIcons: {
    icon: (league, mongoPath) => `${league.toLowerCase()}/stats/${mongoPath}/icon.png`
  }
};

// Helper function to get MongoDB path for team assets
export const getTeamAssetPath = (league, teamId, assetType) => {
  return mongoAssetPaths.teamAssets[assetType](league, teamId);
};

// Helper function to get MongoDB path for stat icons
export const getStatIconPath = (league, statId) => {
  const stat = leagueData[league].statistics.find(s => s.id === statId);
  return stat ? mongoAssetPaths.statIcons.icon(league, stat.mongoPath) : null;
};

// Helper function to get team by ID
export const getTeamById = (league, teamId) => {
  return leagueData[league].teams.find(team => team.id === teamId);
};

// Helper function to get stat by ID
export const getStatById = (league, statId) => {
  return leagueData[league].statistics.find(stat => stat.id === statId);
};

// Stat Display Formatting Functions
export const formatStatDisplay = (statId, value, league, allStats = {}) => {
  const stat = getStatById(league, statId);
  if (!stat) return value;

  const numValue = parseFloat(value);
  
  switch (stat.format) {
    case 'number':
      return `${numValue}`;
      
    case 'plural':
      if (numValue === 1) {
        return `${numValue} ${stat.displayName}`;
      } else {
        return `${numValue} ${stat.pluralForm || stat.displayName + 's'}`;
      }
      
    case 'ratio':
      if (stat.ratioStat && allStats[stat.ratioStat]) {
        return `${numValue}/${allStats[stat.ratioStat]}`;
      }
      return `${numValue}`;
      
    case 'percentage':
      return `${numValue}%`;
      
    case 'decimal':
      return numValue.toFixed(1);
      
    case 'time':
      const minutes = Math.floor(numValue);
      const seconds = Math.round((numValue - minutes) * 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      
    case 'signed':
      return numValue >= 0 ? `+${numValue}` : `${numValue}`;
      
    default:
      return `${numValue}`;
  }
};

// Helper to get display text for graphics
export const getStatDisplayText = (statId, value, league, allStats = {}) => {
  const stat = getStatById(league, statId);
  if (!stat) return `${value}`;
  
  const formattedValue = formatStatDisplay(statId, value, league, allStats);
  return `${formattedValue}`;
};

// Example usage:
// getTeamAssetPath('NBA', 'LAL', 'background') 
// → "nba/teams/lal/background.png"
// getTeamAssetPath('NBA', 'LAL', 'nameFont')
// → "nba/teams/lal/name-font.ttf"
// getStatIconPath('NBA', 'PTS')
// → "nba/stats/points/icon.png"
// getTeamById('NBA', 'LAL')
// → { id: "LAL", name: "Los Angeles Lakers", abbreviation: "LAL" }
// formatStatDisplay('TD', 2, 'NFL') 
// → "2 TDs"
// formatStatDisplay('COMP', 35, 'NFL', { ATT: 37 })
// → "35/37"