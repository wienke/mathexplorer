# 🏝️ Aria's Eiland Avontuur

A fun and educational math game for children ages 5-8, designed to make learning arithmetic an adventure!

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎮 About the Game

**Aria's Eiland Avontuur** (Aria's Island Adventure) is a Dutch-language math game where children embark on an exciting journey across magical islands, visiting villages and completing math challenges to earn stars.

### Features

- 🏝️ **3 Progressive Islands** - Each island offers increasing difficulty levels
- 🏘️ **15 Unique Villages** - Each with its own theme and math focus
- ⭐ **150 Challenges** - Varied arithmetic problems to solve
- 🎨 **Kid-Friendly Design** - Colorful, engaging visuals with fun emojis
- 🔊 **Audio Feedback** - Satisfying sounds for correct/incorrect answers
- 💾 **Progress Saving** - Automatically saves progress in browser storage
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

## 🗺️ Game Structure

### Island 1: Beginners Eiland (Ages 5-6)
*Numbers 1-10, basic addition and subtraction*

| Village | Theme | Focus |
|---------|-------|-------|
| 🌸 Bloementuin | Flower Garden | Counting to 10 |
| 🦋 Vlindervallei | Butterfly Valley | Addition to 5 |
| 🐝 Bijendorp | Bee Village | Subtraction from 5 |
| 🌈 Regenboogweide | Rainbow Meadow | Addition to 10 |
| 🍎 Appelgaard | Apple Orchard | Mixed operations to 10 |

### Island 2: Gevorderden Eiland (Ages 6-7)
*Numbers 1-20, more complex problems*

| Village | Theme | Focus |
|---------|-------|-------|
| 🐚 Schelpenstrand | Shell Beach | Counting to 20 |
| 🦀 Krabbenkust | Crab Coast | Addition to 15 |
| 🐠 Vissersdorp | Fishing Village | Subtraction from 15 |
| ⚓ Ankerbaai | Anchor Bay | Addition to 20 |
| 🏴‍☠️ Piratenhaven | Pirate Harbor | Mixed operations to 20 |

### Island 3: Experts Eiland (Ages 7-8)
*Numbers 1-50, introduction to multiplication*

| Village | Theme | Focus |
|---------|-------|-------|
| 🏔️ Bergtoppen | Mountain Peaks | Counting to 50 |
| 🦅 Adelaarsnest | Eagle's Nest | Addition to 30 |
| ❄️ Sneeuwdorp | Snow Village | Subtraction from 30 |
| 🌟 Sterrenwacht | Star Observatory | Multiplication basics |
| 👑 Koningskasteel | King's Castle | Mixed advanced operations |

## 🚀 Getting Started

### Play Online

Simply open `index.html` in any modern web browser - no installation required!

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/wienke/mathexplorer.git
   cd mathexplorer
   ```

2. **Open in browser**
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   
   # Or using Node.js
   npx serve
   ```

3. **Navigate to** `http://localhost:8000`

## 📁 Project Structure

```
mathexplorer/
├── index.html          # Main HTML file with all screens
├── css/
│   └── style.css       # All styling and animations
├── js/
│   ├── game.js         # Main game logic (AriaGame class)
│   └── villages.js     # Game data (islands, villages, challenges)
├── IMPLEMENTATION_PLAN.md  # Technical documentation
├── README.md           # This file
└── LICENSE             # MIT License
```

## 🎯 How to Play

1. **Start the Adventure** - Click "Start Avontuur!" on the welcome screen
2. **Choose an Island** - Begin with Beginners Eiland (others unlock as you progress)
3. **Select a Village** - Each village has a unique theme and 10 challenges
4. **Solve Challenges** - Answer math questions by clicking the correct option
5. **Earn Stars** - Complete challenges to earn stars and unlock new content
6. **Progress** - Complete all villages on an island to unlock the next island

## 🛠️ Technical Details

### Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - ES6+ class-based architecture
- **Web Audio API** - Synthesized sound effects
- **LocalStorage** - Client-side progress persistence

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Key Features Implementation

- **Progress System**: Automatic saving/loading via localStorage
- **Unlock Logic**: Linear progression through challenges → villages → islands
- **Audio Feedback**: Web Audio API oscillators for instant feedback sounds
- **Responsive Design**: CSS media queries for all screen sizes
- **Visual Feedback**: CSS animations for correct/incorrect answers

## 🔧 Customization

### Adding New Challenges

Edit `js/villages.js` to add or modify challenges:

```javascript
{
    id: 1,
    question: "Hoeveel is 2 + 3?",
    options: [4, 5, 6, 7],
    answer: 5,
    visual: {
        type: 'emoji',
        items: ['🌸', '🌸', '🌸', '🌸', '🌸'],
        grouping: [2, 3]
    }
}
```

### Adding New Villages

Add a new village object to the appropriate island in `villages.js`:

```javascript
{
    id: 5,
    name: "New Village",
    icon: "🏡",
    description: "Description of the village",
    completeMessage: "Congratulations message!",
    challenges: [/* array of challenge objects */]
}
```

### Adding New Islands

Add a new island object to the `ISLANDS` array:

```javascript
{
    id: 3,
    name: "New Island",
    icon: "🏝️",
    description: "Island description",
    difficulty: "expert",
    villages: [/* array of village objects */]
}
```

## 🌍 Localization

The game is currently in Dutch. To translate:

1. Update text content in `index.html`
2. Modify `FEEDBACK_MESSAGES` in `villages.js`
3. Update village names, descriptions, and challenge questions

## 📋 Future Enhancements

See [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) for planned features:

- [ ] Achievement badges system
- [ ] Daily challenge mode
- [ ] Parent dashboard with progress reports
- [ ] PWA support for offline play
- [ ] Additional language support
- [ ] More visual types (animations, mini-games)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Inspired by the joy of learning through play
- Built with love for young learners
- Emoji graphics provide universal, accessible visuals

## 📬 Contact

Project Link: [https://github.com/wienke/mathexplorer](https://github.com/wienke/mathexplorer)

---

Made with ❤️ for Aria and all young mathematicians! 🧮✨
