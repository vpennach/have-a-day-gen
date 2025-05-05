import { generateAllTeamsSQL } from './generateAssetSQL';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate the SQL
const sql = generateAllTeamsSQL();

// Write to a file
const outputPath = join(__dirname, 'generated_assets.sql');
writeFileSync(outputPath, sql);

console.log(`SQL generated and saved to: ${outputPath}`); 