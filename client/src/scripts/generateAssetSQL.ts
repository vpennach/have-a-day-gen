import { teams } from '../data/sportsData';

// Generate SQL for a single team's assets
function generateTeamAssetsSQL(sport: string, teamId: string) {
  const sql: string[] = [];
  
  // Generate SQL for numbers 0-9
  for (let i = 0; i <= 9; i++) {
    sql.push(`INSERT INTO assets (name, type, sport, team_id, file_path)
    VALUES ('${i}', 'number', '${sport}', '${teamId}', '/assets/${sport.toLowerCase()}/teams/${teamId}/numbers/${i}.svg');`);
  }

  // Generate SQL for letters A-Z
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    sql.push(`INSERT INTO assets (name, type, sport, team_id, file_path)
    VALUES ('${letter}', 'letter', '${sport}', '${teamId}', '/assets/${sport.toLowerCase()}/teams/${teamId}/letters/${letter}.svg');`);
  }

  return sql.join('\n');
}

// Generate SQL for all teams
export function generateAllTeamsSQL() {
  let allSQL = '';
  
  Object.entries(teams).forEach(([sport, teamList]) => {
    teamList.forEach(team => {
      allSQL += `-- ${team.name} assets\n`;
      allSQL += generateTeamAssetsSQL(sport, team.id);
      allSQL += '\n\n';
    });
  });

  return allSQL;
}

// Generate and log the SQL
const sql = generateAllTeamsSQL();
console.log(sql); 