import os

def create_sport_structure(base_path, sport, teams):
    # Create base sport directory
    sport_path = os.path.join(base_path, sport, 'teams')
    os.makedirs(sport_path, exist_ok=True)
    
    # Create structure for each team
    for team in teams:
        team_path = os.path.join(sport_path, team)
        # Create team directories
        os.makedirs(os.path.join(team_path, 'numbers'), exist_ok=True)
        os.makedirs(os.path.join(team_path, 'letters'), exist_ok=True)
        os.makedirs(os.path.join(team_path, 'icons'), exist_ok=True)
        
        # Create minimal placeholder SVG files
        # Background
        with open(os.path.join(team_path, 'background.svg'), 'w') as f:
            f.write('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>')
        
        # Just number 0
        with open(os.path.join(team_path, 'numbers', '0.svg'), 'w') as f:
            f.write('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>')
        
        # Just letter A
        with open(os.path.join(team_path, 'letters', 'A.svg'), 'w') as f:
            f.write('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>')
        
        # Just one icon
        with open(os.path.join(team_path, 'icons', 'placeholder.svg'), 'w') as f:
            f.write('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>')

# Team abbreviations for each sport
mlb_teams = [
    'ari', 'atl', 'bal', 'bos', 'chc', 'chw', 'cin', 'cle', 'col',
    'det', 'hou', 'kc', 'laa', 'lad', 'mia', 'mil', 'min', 'nym',
    'nyy', 'oak', 'phi', 'pit', 'sd', 'sf', 'sea', 'stl', 'tb',
    'tex', 'tor', 'was'
]

nba_teams = [
    'atl', 'bos', 'bkn', 'cha', 'chi', 'cle', 'dal', 'den', 'det',
    'gsw', 'hou', 'ind', 'lac', 'lal', 'mem', 'mia', 'mil', 'min',
    'nop', 'nyk', 'okc', 'orl', 'phi', 'phx', 'por', 'sac', 'sas',
    'tor', 'uta', 'was'
]

nhl_teams = [
    'ana', 'ari', 'bos', 'buf', 'cgy', 'car', 'chi', 'col', 'cbj',
    'dal', 'det', 'edm', 'fla', 'lak', 'min', 'mtl', 'nsh', 'nj',
    'nyi', 'nyr', 'ott', 'phi', 'pit', 'sjs', 'sea', 'stl', 'tb',
    'tor', 'van', 'vgk', 'wsh', 'wpg'
]

nfl_teams = [
    'ari', 'atl', 'bal', 'buf', 'car', 'chi', 'cin', 'cle', 'dal',
    'den', 'det', 'gb', 'hou', 'ind', 'jax', 'kc', 'lv', 'lac',
    'lar', 'mia', 'min', 'ne', 'no', 'nyg', 'nyj', 'phi', 'pit',
    'sf', 'sea', 'tb', 'ten', 'was'
]

# Create the structure on your desktop
desktop_path = os.path.expanduser('~/Desktop')
base_path = os.path.join(desktop_path, 'have-a-day-assets')

# Create structure for each sport
create_sport_structure(base_path, 'MLB', mlb_teams)
create_sport_structure(base_path, 'NBA', nba_teams)
create_sport_structure(base_path, 'NHL', nhl_teams)
create_sport_structure(base_path, 'NFL', nfl_teams)

print(f"File structure created at: {base_path}") 