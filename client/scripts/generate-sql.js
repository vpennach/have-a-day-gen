import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Test with just Yankees data
const team = {
  id: 'nyy',
  name: 'New York Yankees',
  sport: 'MLB'
};

// Generate SQL statements
let sql = `-- ${team.name} assets\n`;

// Generate SQL for numbers 0-9
for (let i = 0; i <= 9; i++) {
  sql += `INSERT INTO assets (team_id, name, type, file_path)
  VALUES ('${team.id}', '${i}', 'number', '/assets/${team.sport.toLowerCase()}/teams/${team.id}/numbers/${i}.svg');\n`;
}

// Generate SQL for letters A-Z
for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  sql += `INSERT INTO assets (team_id, name, type, file_path)
  VALUES ('${team.id}', '${letter}', 'letter', '/assets/${team.sport.toLowerCase()}/teams/${team.id}/letters/${letter}.svg');\n`;
}

// Write to file
const outputPath = join(__dirname, '../src/scripts/generated_assets.sql');
writeFileSync(outputPath, sql);

console.log(`SQL generated and saved to: ${outputPath}`); 