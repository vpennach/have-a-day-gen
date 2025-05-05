import os

def create_mlb_structure(base_path):
    # MLB team abbreviations
    mlb_teams = [
        'ari', 'atl', 'bal', 'bos', 'chc', 'chw', 'cin', 'cle', 'col',
        'det', 'hou', 'kc', 'laa', 'lad', 'mia', 'mil', 'min', 'nym',
        'nyy', 'oak', 'phi', 'pit', 'sd', 'sf', 'sea', 'stl', 'tb',
        'tex', 'tor', 'was'
    ]
    
    # Create base MLB directory
    mlb_path = os.path.join(base_path, 'MLB', 'teams')
    os.makedirs(mlb_path, exist_ok=True)
    
    # Create structure for each team
    for team in mlb_teams:
        team_path = os.path.join(mlb_path, team)
        # Create team directories
        os.makedirs(os.path.join(team_path, 'numbers'), exist_ok=True)
        os.makedirs(os.path.join(team_path, 'letters'), exist_ok=True)
        os.makedirs(os.path.join(team_path, 'icons'), exist_ok=True)
        
        # Create placeholder SVG files
        # Background
        with open(os.path.join(team_path, 'background.svg'), 'w') as f:
            f.write('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>')
        
        # Numbers 0-9
        for i in range(10):
            with open(os.path.join(team_path, 'numbers', f'{i}.svg'), 'w') as f:
                f.write('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>')
        
        # Letters A-Z
        for letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ':
            with open(os.path.join(team_path, 'letters', f'{letter}.svg'), 'w') as f:
                f.write('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>')
        
        # Icons
        icons = ['hits', 'home-run', 'rbi', 'avg', 'obp', 'slg', 'ops', 'sb']
        for icon in icons:
            with open(os.path.join(team_path, 'icons', f'{icon}.svg'), 'w') as f:
                f.write('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>')

# Create the structure on your desktop
desktop_path = os.path.expanduser('~/Desktop')
base_path = os.path.join(desktop_path, 'have-a-day-assets')
create_mlb_structure(base_path)

print(f"File structure created at: {base_path}")