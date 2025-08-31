# Have A Day Generator

A web-based tool that automatically generates "Have A Day"-style sports graphics for athletes. Enter a player's name, jersey number, and select stats to instantly create professional-looking graphics with team-specific branding, fonts, and colors.

## What It Does

This application creates custom sports graphics similar to the NFL's "Have A Day" campaign by:
- Allowing users to select from 4 major sports leagues (MLB, NBA, NHL, NFL)
- Providing team selection with authentic team colors and branding
- Enabling customization of 1-4 player statistics
- Generating downloadable graphics using team-specific assets (fonts, backgrounds, icons)

## Current Status

The application is currently in development with:
- React frontend with TypeScript and Tailwind CSS
- Sport and team selection interface
- Dynamic stat input system (1-4 stats)
- Local data management for sports and teams
- Asset management system designed for team-specific graphics
- Image generation functionality (in progress)
- Database integration (MongoDB planned for future)

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS |
| Data Management | Local JSON data (MongoDB planned) |
| Asset Management | Custom Python scripts |
| Image Generation | HTML5 Canvas API (planned) |

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Python 3.7+ (for asset generation scripts)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vpennach/have-a-day-gen.git
cd have-a-day-gen
```

2. Install dependencies:
```bash
cd client
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Asset Management

To generate the file structure for team assets:
```bash
cd ..
python3 create_structure_all_sports.py
```

This creates placeholder SVG files for all teams across MLB, NBA, NHL, and NFL.

## Project Structure

```
have-a-day-gen/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── data/          # Sports data (local JSON)
│   │   └── scripts/       # Asset generation scripts
│   └── package.json
├── assets/                 # Generated asset structure
├── create_structure_all_sports.py  # Asset generation script
└── README.md
```

## Data Management

Currently using local JSON data for:
- Sports leagues (MLB, NBA, NHL, NFL)
- Team information (names, abbreviations, colors)
- Sport-specific statistics

Future plans include MongoDB integration for:
- Asset metadata storage
- User-generated graphics
- Team and player databases

## Usage

1. **Select Sport**: Choose from MLB, NBA, NHL, or NFL
2. **Choose Team**: Select from all teams in the selected league
3. **Enter Player Details**: Input player name and jersey number
4. **Select Stats**: Choose 1-4 statistics to display
5. **Generate Graphic**: Create and download the custom graphic

## Future Features

- [ ] Real-time graphic preview using HTML5 Canvas
- [ ] Custom stat icon selection
- [ ] Multiple graphic templates
- [ ] MongoDB integration for asset management
- [ ] User authentication and saved graphics
- [ ] Bulk graphic generation
- [ ] Social media integration

## Contributing

This is a personal project for creating sports graphics. Feel free to fork and adapt for your own needs.

---
Created by [Vincent Pennachio](https://github.com/vpennach).
