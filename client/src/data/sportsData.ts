export type Sport = 'MLB' | 'NBA' | 'NHL' | 'NFL';

export interface Team {
  id: string;
  name: string;
  abbreviation: string;
  primaryColor: string;
  secondaryColor: string;
  assetPath: string; // Path to team-specific assets folder
}

export interface StatOption {
  id: string;
  label: string;
  description: string;
  iconPath: string; // Path to the stat icon
}

export const teams: Record<Sport, Team[]> = {
  MLB: [
    { id: 'ari', name: 'Arizona Diamondbacks', abbreviation: 'ARI', primaryColor: '#A71930', secondaryColor: '#E3D4AD', assetPath: '/assets/mlb/ari' },
    { id: 'atl', name: 'Atlanta Braves', abbreviation: 'ATL', primaryColor: '#CE1141', secondaryColor: '#13274F', assetPath: '/assets/mlb/atl' },
    { id: 'bal', name: 'Baltimore Orioles', abbreviation: 'BAL', primaryColor: '#DF4601', secondaryColor: '#000000', assetPath: '/assets/mlb/bal' },
    { id: 'bos', name: 'Boston Red Sox', abbreviation: 'BOS', primaryColor: '#BD3039', secondaryColor: '#0C2340', assetPath: '/assets/mlb/bos' },
    { id: 'chc', name: 'Chicago Cubs', abbreviation: 'CHC', primaryColor: '#0E3386', secondaryColor: '#CC0033', assetPath: '/assets/mlb/chc' },
    { id: 'chw', name: 'Chicago White Sox', abbreviation: 'CWS', primaryColor: '#000000', secondaryColor: '#FFFFFF', assetPath: '/assets/mlb/chw' },
    { id: 'cin', name: 'Cincinnati Reds', abbreviation: 'CIN', primaryColor: '#C6011F', secondaryColor: '#000000', assetPath: '/assets/mlb/cin' },
    { id: 'cle', name: 'Cleveland Guardians', abbreviation: 'CLE', primaryColor: '#E31937', secondaryColor: '#0C2340', assetPath: '/assets/mlb/cle' },
    { id: 'col', name: 'Colorado Rockies', abbreviation: 'COL', primaryColor: '#33006F', secondaryColor: '#C4CED4', assetPath: '/assets/mlb/col' },
    { id: 'det', name: 'Detroit Tigers', abbreviation: 'DET', primaryColor: '#0C2340', secondaryColor: '#FA4616', assetPath: '/assets/mlb/det' },
    { id: 'hou', name: 'Houston Astros', abbreviation: 'HOU', primaryColor: '#002D62', secondaryColor: '#EB6E1F', assetPath: '/assets/mlb/hou' },
    { id: 'kc', name: 'Kansas City Royals', abbreviation: 'KC', primaryColor: '#004687', secondaryColor: '#C09A5B', assetPath: '/assets/mlb/kc' },
    { id: 'laa', name: 'Los Angeles Angels', abbreviation: 'LAA', primaryColor: '#BA0021', secondaryColor: '#003263', assetPath: '/assets/mlb/laa' },
    { id: 'lad', name: 'Los Angeles Dodgers', abbreviation: 'LAD', primaryColor: '#005A9C', secondaryColor: '#EF3E42', assetPath: '/assets/mlb/lad' },
    { id: 'mia', name: 'Miami Marlins', abbreviation: 'MIA', primaryColor: '#00A3E0', secondaryColor: '#000000', assetPath: '/assets/mlb/mia' },
    { id: 'mil', name: 'Milwaukee Brewers', abbreviation: 'MIL', primaryColor: '#12284B', secondaryColor: '#FFC52F', assetPath: '/assets/mlb/mil' },
    { id: 'min', name: 'Minnesota Twins', abbreviation: 'MIN', primaryColor: '#002B5C', secondaryColor: '#D31145', assetPath: '/assets/mlb/min' },
    { id: 'nym', name: 'New York Mets', abbreviation: 'NYM', primaryColor: '#002D72', secondaryColor: '#FF5910', assetPath: '/assets/mlb/nym' },
    { id: 'nyy', name: 'New York Yankees', abbreviation: 'NYY', primaryColor: '#0C2340', secondaryColor: '#C4CED3', assetPath: '/assets/mlb/nyy' },
    { id: 'oak', name: 'Oakland Athletics', abbreviation: 'OAK', primaryColor: '#003831', secondaryColor: '#EFB21E', assetPath: '/assets/mlb/oak' },
    { id: 'phi', name: 'Philadelphia Phillies', abbreviation: 'PHI', primaryColor: '#E81828', secondaryColor: '#002D72', assetPath: '/assets/mlb/phi' },
    { id: 'pit', name: 'Pittsburgh Pirates', abbreviation: 'PIT', primaryColor: '#FDB827', secondaryColor: '#000000', assetPath: '/assets/mlb/pit' },
    { id: 'sd', name: 'San Diego Padres', abbreviation: 'SD', primaryColor: '#002D62', secondaryColor: '#A2AAAD', assetPath: '/assets/mlb/sd' },
    { id: 'sf', name: 'San Francisco Giants', abbreviation: 'SF', primaryColor: '#FD5A1E', secondaryColor: '#27251F', assetPath: '/assets/mlb/sf' },
    { id: 'sea', name: 'Seattle Mariners', abbreviation: 'SEA', primaryColor: '#0C2C56', secondaryColor: '#005C5C', assetPath: '/assets/mlb/sea' },
    { id: 'stl', name: 'St. Louis Cardinals', abbreviation: 'STL', primaryColor: '#C41E3A', secondaryColor: '#0C2340', assetPath: '/assets/mlb/stl' },
    { id: 'tb', name: 'Tampa Bay Rays', abbreviation: 'TB', primaryColor: '#092C5C', secondaryColor: '#8FBCE6', assetPath: '/assets/mlb/tb' },
    { id: 'tex', name: 'Texas Rangers', abbreviation: 'TEX', primaryColor: '#003278', secondaryColor: '#C0111F', assetPath: '/assets/mlb/tex' },
    { id: 'tor', name: 'Toronto Blue Jays', abbreviation: 'TOR', primaryColor: '#134A8E', secondaryColor: '#E8291C', assetPath: '/assets/mlb/tor' },
    { id: 'was', name: 'Washington Nationals', abbreviation: 'WSH', primaryColor: '#AB0003', secondaryColor: '#14225A', assetPath: '/assets/mlb/wsh' }
  ],
  NBA: [
    { id: 'atl', name: 'Atlanta Hawks', abbreviation: 'ATL', primaryColor: '#E03A3E', secondaryColor: '#26282A', assetPath: '/assets/nba/atl' },
    { id: 'bos', name: 'Boston Celtics', abbreviation: 'BOS', primaryColor: '#007A33', secondaryColor: '#FFFFFF', assetPath: '/assets/nba/bos' },
    { id: 'bkn', name: 'Brooklyn Nets', abbreviation: 'BKN', primaryColor: '#000000', secondaryColor: '#FFFFFF', assetPath: '/assets/nba/bkn' },
    { id: 'cha', name: 'Charlotte Hornets', abbreviation: 'CHA', primaryColor: '#1D1160', secondaryColor: '#00788C', assetPath: '/assets/nba/cha' },
    { id: 'chi', name: 'Chicago Bulls', abbreviation: 'CHI', primaryColor: '#CE1141', secondaryColor: '#000000', assetPath: '/assets/nba/chi' },
    { id: 'cle', name: 'Cleveland Cavaliers', abbreviation: 'CLE', primaryColor: '#6F263D', secondaryColor: '#FFB81C', assetPath: '/assets/nba/cle' },
    { id: 'dal', name: 'Dallas Mavericks', abbreviation: 'DAL', primaryColor: '#00538C', secondaryColor: '#B8C4CA', assetPath: '/assets/nba/dal' },
    { id: 'den', name: 'Denver Nuggets', abbreviation: 'DEN', primaryColor: '#0E2240', secondaryColor: '#FEC524', assetPath: '/assets/nba/den' },
    { id: 'det', name: 'Detroit Pistons', abbreviation: 'DET', primaryColor: '#C8102E', secondaryColor: '#1D42BA', assetPath: '/assets/nba/det' },
    { id: 'gsw', name: 'Golden State Warriors', abbreviation: 'GSW', primaryColor: '#1D428A', secondaryColor: '#FFC72C', assetPath: '/assets/nba/gsw' },
    { id: 'hou', name: 'Houston Rockets', abbreviation: 'HOU', primaryColor: '#CE1141', secondaryColor: '#000000', assetPath: '/assets/nba/hou' },
    { id: 'ind', name: 'Indiana Pacers', abbreviation: 'IND', primaryColor: '#002D62', secondaryColor: '#FDBB30', assetPath: '/assets/nba/ind' },
    { id: 'lac', name: 'Los Angeles Clippers', abbreviation: 'LAC', primaryColor: '#C8102E', secondaryColor: '#1D428A', assetPath: '/assets/nba/lac' },
    { id: 'lal', name: 'Los Angeles Lakers', abbreviation: 'LAL', primaryColor: '#552583', secondaryColor: '#FDB927', assetPath: '/assets/nba/lal' },
    { id: 'mem', name: 'Memphis Grizzlies', abbreviation: 'MEM', primaryColor: '#5D76A9', secondaryColor: '#12173F', assetPath: '/assets/nba/mem' },
    { id: 'mia', name: 'Miami Heat', abbreviation: 'MIA', primaryColor: '#98002E', secondaryColor: '#F9A01B', assetPath: '/assets/nba/mia' },
    { id: 'mil', name: 'Milwaukee Bucks', abbreviation: 'MIL', primaryColor: '#00471B', secondaryColor: '#EEE1C6', assetPath: '/assets/nba/mil' },
    { id: 'min', name: 'Minnesota Timberwolves', abbreviation: 'MIN', primaryColor: '#0C2340', secondaryColor: '#78BE20', assetPath: '/assets/nba/min' },
    { id: 'nop', name: 'New Orleans Pelicans', abbreviation: 'NOP', primaryColor: '#0C2340', secondaryColor: '#C8102E', assetPath: '/assets/nba/nop' },
    { id: 'nyk', name: 'New York Knicks', abbreviation: 'NYK', primaryColor: '#006BB6', secondaryColor: '#F58426', assetPath: '/assets/nba/nyk' },
    { id: 'okc', name: 'Oklahoma City Thunder', abbreviation: 'OKC', primaryColor: '#007AC1', secondaryColor: '#EF3B24', assetPath: '/assets/nba/okc' },
    { id: 'orl', name: 'Orlando Magic', abbreviation: 'ORL', primaryColor: '#0077C0', secondaryColor: '#C4CED4', assetPath: '/assets/nba/orl' },
    { id: 'phi', name: 'Philadelphia 76ers', abbreviation: 'PHI', primaryColor: '#006BB6', secondaryColor: '#ED174C', assetPath: '/assets/nba/phi' },
    { id: 'phx', name: 'Phoenix Suns', abbreviation: 'PHX', primaryColor: '#1D1160', secondaryColor: '#E56020', assetPath: '/assets/nba/phx' },
    { id: 'por', name: 'Portland Trail Blazers', abbreviation: 'POR', primaryColor: '#E03A3E', secondaryColor: '#000000', assetPath: '/assets/nba/por' },
    { id: 'sac', name: 'Sacramento Kings', abbreviation: 'SAC', primaryColor: '#5A2D81', secondaryColor: '#63727A', assetPath: '/assets/nba/sac' },
    { id: 'sas', name: 'San Antonio Spurs', abbreviation: 'SAS', primaryColor: '#C4CED4', secondaryColor: '#000000', assetPath: '/assets/nba/sas' },
    { id: 'tor', name: 'Toronto Raptors', abbreviation: 'TOR', primaryColor: '#CE1141', secondaryColor: '#000000', assetPath: '/assets/nba/tor' },
    { id: 'uta', name: 'Utah Jazz', abbreviation: 'UTA', primaryColor: '#002B5C', secondaryColor: '#00471B', assetPath: '/assets/nba/uta' },
    { id: 'was', name: 'Washington Wizards', abbreviation: 'WAS', primaryColor: '#002B5C', secondaryColor: '#E31837', assetPath: '/assets/nba/was' }
  ],
  NHL: [
    { id: 'ana', name: 'Anaheim Ducks', abbreviation: 'ANA', primaryColor: '#F47A38', secondaryColor: '#000000', assetPath: '/assets/nhl/ana' },
    { id: 'ari', name: 'Arizona Coyotes', abbreviation: 'ARI', primaryColor: '#8C2633', secondaryColor: '#E2D6B5', assetPath: '/assets/nhl/ari' },
    { id: 'bos', name: 'Boston Bruins', abbreviation: 'BOS', primaryColor: '#FFB81C', secondaryColor: '#000000', assetPath: '/assets/nhl/bos' },
    { id: 'buf', name: 'Buffalo Sabres', abbreviation: 'BUF', primaryColor: '#002654', secondaryColor: '#FCB514', assetPath: '/assets/nhl/buf' },
    { id: 'cgy', name: 'Calgary Flames', abbreviation: 'CGY', primaryColor: '#C8102E', secondaryColor: '#F1BE48', assetPath: '/assets/nhl/cgy' },
    { id: 'car', name: 'Carolina Hurricanes', abbreviation: 'CAR', primaryColor: '#CC0000', secondaryColor: '#000000', assetPath: '/assets/nhl/car' },
    { id: 'chi', name: 'Chicago Blackhawks', abbreviation: 'CHI', primaryColor: '#CF0A2C', secondaryColor: '#000000', assetPath: '/assets/nhl/chi' },
    { id: 'col', name: 'Colorado Avalanche', abbreviation: 'COL', primaryColor: '#6F263D', secondaryColor: '#236192', assetPath: '/assets/nhl/col' },
    { id: 'cbj', name: 'Columbus Blue Jackets', abbreviation: 'CBJ', primaryColor: '#002654', secondaryColor: '#CE1126', assetPath: '/assets/nhl/cbj' },
    { id: 'dal', name: 'Dallas Stars', abbreviation: 'DAL', primaryColor: '#006847', secondaryColor: '#000000', assetPath: '/assets/nhl/dal' },
    { id: 'det', name: 'Detroit Red Wings', abbreviation: 'DET', primaryColor: '#CE1126', secondaryColor: '#FFFFFF', assetPath: '/assets/nhl/det' },
    { id: 'edm', name: 'Edmonton Oilers', abbreviation: 'EDM', primaryColor: '#FF4C00', secondaryColor: '#041E42', assetPath: '/assets/nhl/edm' },
    { id: 'fla', name: 'Florida Panthers', abbreviation: 'FLA', primaryColor: '#041E42', secondaryColor: '#B4975A', assetPath: '/assets/nhl/fla' },
    { id: 'lak', name: 'Los Angeles Kings', abbreviation: 'LAK', primaryColor: '#111111', secondaryColor: '#A2AAAD', assetPath: '/assets/nhl/lak' },
    { id: 'min', name: 'Minnesota Wild', abbreviation: 'MIN', primaryColor: '#154734', secondaryColor: '#DDCBA4', assetPath: '/assets/nhl/min' },
    { id: 'mtl', name: 'Montreal Canadiens', abbreviation: 'MTL', primaryColor: '#AF1E2D', secondaryColor: '#192168', assetPath: '/assets/nhl/mtl' },
    { id: 'nsh', name: 'Nashville Predators', abbreviation: 'NSH', primaryColor: '#FFB81C', secondaryColor: '#041E42', assetPath: '/assets/nhl/nsh' },
    { id: 'nj', name: 'New Jersey Devils', abbreviation: 'NJD', primaryColor: '#CE1126', secondaryColor: '#000000', assetPath: '/assets/nhl/nj' },
    { id: 'nyi', name: 'New York Islanders', abbreviation: 'NYI', primaryColor: '#00539B', secondaryColor: '#F47D30', assetPath: '/assets/nhl/nyi' },
    { id: 'nyr', name: 'New York Rangers', abbreviation: 'NYR', primaryColor: '#0038A8', secondaryColor: '#CE1126', assetPath: '/assets/nhl/nyr' },
    { id: 'ott', name: 'Ottawa Senators', abbreviation: 'OTT', primaryColor: '#C52032', secondaryColor: '#000000', assetPath: '/assets/nhl/ott' },
    { id: 'phi', name: 'Philadelphia Flyers', abbreviation: 'PHI', primaryColor: '#F74902', secondaryColor: '#000000', assetPath: '/assets/nhl/phi' },
    { id: 'pit', name: 'Pittsburgh Penguins', abbreviation: 'PIT', primaryColor: '#000000', secondaryColor: '#FCB514', assetPath: '/assets/nhl/pit' },
    { id: 'sjs', name: 'San Jose Sharks', abbreviation: 'SJS', primaryColor: '#006D75', secondaryColor: '#000000', assetPath: '/assets/nhl/sjs' },
    { id: 'sea', name: 'Seattle Kraken', abbreviation: 'SEA', primaryColor: '#99D9D9', secondaryColor: '#001F5B', assetPath: '/assets/nhl/sea' },
    { id: 'stl', name: 'St. Louis Blues', abbreviation: 'STL', primaryColor: '#002F87', secondaryColor: '#FCB514', assetPath: '/assets/nhl/stl' },
    { id: 'tbl', name: 'Tampa Bay Lightning', abbreviation: 'TBL', primaryColor: '#002868', secondaryColor: '#FFFFFF', assetPath: '/assets/nhl/tbl' },
    { id: 'tor', name: 'Toronto Maple Leafs', abbreviation: 'TOR', primaryColor: '#00205B', secondaryColor: '#FFFFFF', assetPath: '/assets/nhl/tor' },
    { id: 'van', name: 'Vancouver Canucks', abbreviation: 'VAN', primaryColor: '#00205B', secondaryColor: '#00843D', assetPath: '/assets/nhl/van' },
    { id: 'vgk', name: 'Vegas Golden Knights', abbreviation: 'VGK', primaryColor: '#B4975A', secondaryColor: '#333F42', assetPath: '/assets/nhl/vgk' },
    { id: 'wsh', name: 'Washington Capitals', abbreviation: 'WSH', primaryColor: '#C8102E', secondaryColor: '#041E42', assetPath: '/assets/nhl/wsh' },
    { id: 'wpg', name: 'Winnipeg Jets', abbreviation: 'WPG', primaryColor: '#041E42', secondaryColor: '#AC162C', assetPath: '/assets/nhl/wpg' }
  ],
  NFL: [
    { id: 'ari', name: 'Arizona Cardinals', abbreviation: 'ARI', primaryColor: '#97233F', secondaryColor: '#000000', assetPath: '/assets/nfl/ari' },
    { id: 'atl', name: 'Atlanta Falcons', abbreviation: 'ATL', primaryColor: '#A71930', secondaryColor: '#000000', assetPath: '/assets/nfl/atl' },
    { id: 'bal', name: 'Baltimore Ravens', abbreviation: 'BAL', primaryColor: '#241773', secondaryColor: '#000000', assetPath: '/assets/nfl/bal' },
    { id: 'buf', name: 'Buffalo Bills', abbreviation: 'BUF', primaryColor: '#00338D', secondaryColor: '#C60C30', assetPath: '/assets/nfl/buf' },
    { id: 'car', name: 'Carolina Panthers', abbreviation: 'CAR', primaryColor: '#0085CA', secondaryColor: '#101820', assetPath: '/assets/nfl/car' },
    { id: 'chi', name: 'Chicago Bears', abbreviation: 'CHI', primaryColor: '#0B162A', secondaryColor: '#C83803', assetPath: '/assets/nfl/chi' },
    { id: 'cin', name: 'Cincinnati Bengals', abbreviation: 'CIN', primaryColor: '#FB4F14', secondaryColor: '#000000', assetPath: '/assets/nfl/cin' },
    { id: 'cle', name: 'Cleveland Browns', abbreviation: 'CLE', primaryColor: '#311D00', secondaryColor: '#FF3C00', assetPath: '/assets/nfl/cle' },
    { id: 'dal', name: 'Dallas Cowboys', abbreviation: 'DAL', primaryColor: '#003594', secondaryColor: '#041E42', assetPath: '/assets/nfl/dal' },
    { id: 'den', name: 'Denver Broncos', abbreviation: 'DEN', primaryColor: '#002244', secondaryColor: '#FB4F14', assetPath: '/assets/nfl/den' },
    { id: 'det', name: 'Detroit Lions', abbreviation: 'DET', primaryColor: '#0076B6', secondaryColor: '#B0B7BC', assetPath: '/assets/nfl/det' },
    { id: 'gb', name: 'Green Bay Packers', abbreviation: 'GB', primaryColor: '#203731', secondaryColor: '#FFB612', assetPath: '/assets/nfl/gb' },
    { id: 'hou', name: 'Houston Texans', abbreviation: 'HOU', primaryColor: '#03202F', secondaryColor: '#A71930', assetPath: '/assets/nfl/hou' },
    { id: 'ind', name: 'Indianapolis Colts', abbreviation: 'IND', primaryColor: '#002C5F', secondaryColor: '#A2AAAD', assetPath: '/assets/nfl/ind' },
    { id: 'jax', name: 'Jacksonville Jaguars', abbreviation: 'JAX', primaryColor: '#101820', secondaryColor: '#D7A22A', assetPath: '/assets/nfl/jax' },
    { id: 'kc', name: 'Kansas City Chiefs', abbreviation: 'KC', primaryColor: '#E31837', secondaryColor: '#FFB81C', assetPath: '/assets/nfl/kc' },
    { id: 'lv', name: 'Las Vegas Raiders', abbreviation: 'LV', primaryColor: '#000000', secondaryColor: '#A5ACAF', assetPath: '/assets/nfl/lv' },
    { id: 'lac', name: 'Los Angeles Chargers', abbreviation: 'LAC', primaryColor: '#0080C6', secondaryColor: '#FFC20E', assetPath: '/assets/nfl/lac' },
    { id: 'lar', name: 'Los Angeles Rams', abbreviation: 'LAR', primaryColor: '#003594', secondaryColor: '#FFA300', assetPath: '/assets/nfl/lar' },
    { id: 'mia', name: 'Miami Dolphins', abbreviation: 'MIA', primaryColor: '#008E97', secondaryColor: '#FC4C02', assetPath: '/assets/nfl/mia' },
    { id: 'min', name: 'Minnesota Vikings', abbreviation: 'MIN', primaryColor: '#4F2683', secondaryColor: '#FFC62F', assetPath: '/assets/nfl/min' },
    { id: 'ne', name: 'New England Patriots', abbreviation: 'NE', primaryColor: '#002244', secondaryColor: '#C60C30', assetPath: '/assets/nfl/ne' },
    { id: 'no', name: 'New Orleans Saints', abbreviation: 'NO', primaryColor: '#101820', secondaryColor: '#D3BC8D', assetPath: '/assets/nfl/no' },
    { id: 'nyg', name: 'New York Giants', abbreviation: 'NYG', primaryColor: '#0B2265', secondaryColor: '#A71930', assetPath: '/assets/nfl/nyg' },
    { id: 'nyj', name: 'New York Jets', abbreviation: 'NYJ', primaryColor: '#0C371D', secondaryColor: '#FFFFFF', assetPath: '/assets/nfl/nyj' },
    { id: 'phi', name: 'Philadelphia Eagles', abbreviation: 'PHI', primaryColor: '#004C54', secondaryColor: '#A5ACAF', assetPath: '/assets/nfl/phi' },
    { id: 'pit', name: 'Pittsburgh Steelers', abbreviation: 'PIT', primaryColor: '#000000', secondaryColor: '#FFB612', assetPath: '/assets/nfl/pit' },
    { id: 'sf', name: 'San Francisco 49ers', abbreviation: 'SF', primaryColor: '#AA0000', secondaryColor: '#B3995D', assetPath: '/assets/nfl/sf' },
    { id: 'sea', name: 'Seattle Seahawks', abbreviation: 'SEA', primaryColor: '#002244', secondaryColor: '#69BE28', assetPath: '/assets/nfl/sea' },
    { id: 'tb', name: 'Tampa Bay Buccaneers', abbreviation: 'TB', primaryColor: '#D50A0A', secondaryColor: '#FF7900', assetPath: '/assets/nfl/tb' },
    { id: 'ten', name: 'Tennessee Titans', abbreviation: 'TEN', primaryColor: '#0C2340', secondaryColor: '#4B92DB', assetPath: '/assets/nfl/ten' },
    { id: 'was', name: 'Washington Commanders', abbreviation: 'WAS', primaryColor: '#5A1414', secondaryColor: '#FFB612', assetPath: '/assets/nfl/was' }
  ]
};

export const stats: Record<Sport, StatOption[]> = {
  MLB: [
    { id: 'hits', label: 'Hits', description: 'Number of hits', iconPath: '/assets/stats/mlb/hits.svg' },
    { id: 'hr', label: 'Home Runs', description: 'Number of home runs', iconPath: '/assets/stats/mlb/home-run.svg' },
    { id: 'rbi', label: 'RBI', description: 'Runs batted in', iconPath: '/assets/stats/mlb/rbi.svg' },
    { id: 'avg', label: 'Batting Average', description: 'Batting average', iconPath: '/assets/stats/mlb/avg.svg' },
    { id: 'obp', label: 'On-Base %', description: 'On-base percentage', iconPath: '/assets/stats/mlb/obp.svg' },
    { id: 'slg', label: 'Slugging %', description: 'Slugging percentage', iconPath: '/assets/stats/mlb/slg.svg' },
    { id: 'ops', label: 'OPS', description: 'On-base plus slugging', iconPath: '/assets/stats/mlb/ops.svg' },
    { id: 'sb', label: 'Stolen Bases', description: 'Number of stolen bases', iconPath: '/assets/stats/mlb/stolen-base.svg' }
  ],
  NBA: [
    { id: 'points', label: 'Points', description: 'Total points scored', iconPath: '/assets/stats/nba/points.svg' },
    { id: 'rebounds', label: 'Rebounds', description: 'Total rebounds', iconPath: '/assets/stats/nba/rebounds.svg' },
    { id: 'assists', label: 'Assists', description: 'Total assists', iconPath: '/assets/stats/nba/assists.svg' },
    { id: 'steals', label: 'Steals', description: 'Number of steals', iconPath: '/assets/stats/nba/steals.svg' },
    { id: 'blocks', label: 'Blocks', description: 'Number of blocks', iconPath: '/assets/stats/nba/blocks.svg' },
    { id: 'fgm', label: 'Field Goals Made', description: 'Number of field goals made', iconPath: '/assets/stats/nba/fgm.svg' },
    { id: 'fgp', label: 'FG%', description: 'Field goal percentage', iconPath: '/assets/stats/nba/fgp.svg' },
    { id: 'threes', label: '3-Pointers', description: 'Number of three-pointers made', iconPath: '/assets/stats/nba/threes.svg' }
  ],
  NHL: [
    { id: 'goals', label: 'Goals', description: 'Number of goals scored', iconPath: '/assets/stats/nhl/goals.svg' },
    { id: 'assists', label: 'Assists', description: 'Number of assists', iconPath: '/assets/stats/nhl/assists.svg' },
    { id: 'points', label: 'Points', description: 'Total points', iconPath: '/assets/stats/nhl/points.svg' },
    { id: 'plusminus', label: '+/-', description: 'Plus-minus rating', iconPath: '/assets/stats/nhl/plusminus.svg' },
    { id: 'shots', label: 'Shots', description: 'Number of shots on goal', iconPath: '/assets/stats/nhl/shots.svg' },
    { id: 'hits', label: 'Hits', description: 'Number of hits', iconPath: '/assets/stats/nhl/hits.svg' },
    { id: 'blocks', label: 'Blocks', description: 'Number of blocked shots', iconPath: '/assets/stats/nhl/blocks.svg' },
    { id: 'toi', label: 'Time on Ice', description: 'Total time on ice', iconPath: '/assets/stats/nhl/toi.svg' }
  ],
  NFL: [
    { id: 'passing_yds', label: 'Passing Yards', description: 'Total passing yards', iconPath: '/assets/stats/nfl/passing.svg' },
    { id: 'rushing_yds', label: 'Rushing Yards', description: 'Total rushing yards', iconPath: '/assets/stats/nfl/rushing.svg' },
    { id: 'receiving_yds', label: 'Receiving Yards', description: 'Total receiving yards', iconPath: '/assets/stats/nfl/receiving.svg' },
    { id: 'touchdowns', label: 'Touchdowns', description: 'Total touchdowns', iconPath: '/assets/stats/nfl/touchdown.svg' },
    { id: 'completions', label: 'Completions', description: 'Number of pass completions', iconPath: '/assets/stats/nfl/completions.svg' },
    { id: 'attempts', label: 'Attempts', description: 'Number of pass attempts', iconPath: '/assets/stats/nfl/attempts.svg' },
    { id: 'completion_pct', label: 'Completion %', description: 'Pass completion percentage', iconPath: '/assets/stats/nfl/completion-pct.svg' },
    { id: 'qb_rating', label: 'QB Rating', description: 'Quarterback rating', iconPath: '/assets/stats/nfl/qb-rating.svg' }
  ]
}; 