/**
 * Aria's Eiland Avontuur - Islands, Villages & Challenges Data
 * 3 Islands with 5 villages each (15 villages, 150 challenges total)
 * Dutch language throughout
 * 
 * Structure:
 * - ISLANDS[]: Array of 3 islands (Beginners, Gevorderden, Experts)
 * - Each island has 5 villages
 * - Each village has 10 challenges
 * - Difficulty increases per island
 */

const ISLANDS = [
    // ==========================================
    // ISLAND 0: BEGINNERS EILAND (Ages 5-6)
    // Numbers 1-10, basic operations
    // ==========================================
    {
        id: 0,
        name: "Beginners Eiland",
        icon: "🌴",
        description: "Perfect voor kleine avonturiers! Leer de basis van rekenen.",
        difficulty: "easy",
        unlockStars: 0,
        color: "#74C0FC",
        villages: [
            {
                id: 0,
                name: "Strand Dorp",
                icon: "🏖️",
                theme: "addition",
                description: "Welkom bij Strand Dorp! De dorpelingen hebben hulp nodig met het tellen van hun schelpen. Kun jij ze helpen met optellen?",
                unlockMessage: "Je hebt Strand Dorp ontgrendeld! Dit is het begin van je avontuur.",
                completeMessage: "Geweldig! Je hebt alle schelpen geteld! Bos Dorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "visual-addition",
                        visual: { emoji: "🐚", left: 2, right: 1 },
                        question: "Hoeveel schelpen zijn er in totaal?",
                        answer: 3,
                        options: [2, 3, 4, 1]
                    },
                    {
                        id: 2,
                        type: "visual-addition",
                        visual: { emoji: "🦀", left: 3, right: 1 },
                        question: "Hoeveel krabben zijn er samen?",
                        answer: 4,
                        options: [3, 4, 5, 2]
                    },
                    {
                        id: 3,
                        type: "visual-addition",
                        visual: { emoji: "⭐", left: 2, right: 2 },
                        question: "Tel de zeesterren!",
                        answer: 4,
                        options: [3, 5, 4, 2]
                    },
                    {
                        id: 4,
                        type: "visual-addition",
                        visual: { emoji: "🐟", left: 3, right: 2 },
                        question: "Hoeveel vissen zwemmen er?",
                        answer: 5,
                        options: [4, 6, 5, 3]
                    },
                    {
                        id: 5,
                        type: "visual-addition",
                        visual: { emoji: "🐠", left: 1, right: 4 },
                        question: "Tel alle tropische vissen!",
                        answer: 5,
                        options: [5, 6, 4, 3]
                    },
                    {
                        id: 6,
                        type: "number-addition",
                        question: "2 + 2 = ?",
                        answer: 4,
                        options: [3, 4, 5, 2]
                    },
                    {
                        id: 7,
                        type: "number-addition",
                        question: "3 + 2 = ?",
                        answer: 5,
                        options: [4, 6, 5, 3]
                    },
                    {
                        id: 8,
                        type: "number-addition",
                        question: "1 + 4 = ?",
                        answer: 5,
                        options: [4, 6, 5, 3]
                    },
                    {
                        id: 9,
                        type: "number-addition",
                        question: "4 + 2 = ?",
                        answer: 6,
                        options: [5, 7, 6, 4]
                    },
                    {
                        id: 10,
                        type: "number-addition",
                        question: "3 + 3 = ?",
                        answer: 6,
                        options: [5, 7, 6, 4]
                    }
                ]
            },
            {
                id: 1,
                name: "Bos Dorp",
                icon: "🌲",
                theme: "subtraction",
                description: "De bosdieren hebben te veel bessen! Help ze met aftrekken zodat iedereen genoeg heeft.",
                unlockMessage: "Bos Dorp is ontgrendeld! De dieren wachten op je hulp.",
                completeMessage: "Super! Alle dieren zijn blij! Berg Dorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "visual-subtraction",
                        visual: { emoji: "🍓", total: 4, remove: 1 },
                        question: "Er zijn 4 bessen. Je eet er 1 op. Hoeveel blijven er over?",
                        answer: 3,
                        options: [2, 4, 3, 1]
                    },
                    {
                        id: 2,
                        type: "visual-subtraction",
                        visual: { emoji: "🍎", total: 5, remove: 2 },
                        question: "5 appels, je plukt er 2. Hoeveel hangen er nog?",
                        answer: 3,
                        options: [2, 4, 3, 1]
                    },
                    {
                        id: 3,
                        type: "visual-subtraction",
                        visual: { emoji: "🍄", total: 4, remove: 2 },
                        question: "4 paddenstoelen, 2 worden geplukt. Hoeveel blijven er?",
                        answer: 2,
                        options: [1, 3, 2, 4]
                    },
                    {
                        id: 4,
                        type: "visual-subtraction",
                        visual: { emoji: "🍃", total: 5, remove: 3 },
                        question: "5 bladeren, 3 waaien weg. Hoeveel zijn er nog?",
                        answer: 2,
                        options: [1, 3, 2, 4]
                    },
                    {
                        id: 5,
                        type: "visual-subtraction",
                        visual: { emoji: "🐦", total: 4, remove: 1 },
                        question: "4 vogels zitten op een tak. 1 vliegt weg. Hoeveel blijven er?",
                        answer: 3,
                        options: [2, 4, 3, 5]
                    },
                    {
                        id: 6,
                        type: "number-subtraction",
                        question: "5 - 2 = ?",
                        answer: 3,
                        options: [2, 4, 3, 1]
                    },
                    {
                        id: 7,
                        type: "number-subtraction",
                        question: "6 - 3 = ?",
                        answer: 3,
                        options: [2, 4, 3, 1]
                    },
                    {
                        id: 8,
                        type: "number-subtraction",
                        question: "5 - 1 = ?",
                        answer: 4,
                        options: [3, 5, 4, 2]
                    },
                    {
                        id: 9,
                        type: "number-subtraction",
                        question: "6 - 2 = ?",
                        answer: 4,
                        options: [3, 5, 4, 2]
                    },
                    {
                        id: 10,
                        type: "number-subtraction",
                        question: "5 - 3 = ?",
                        answer: 2,
                        options: [1, 3, 2, 4]
                    }
                ]
            },
            {
                id: 2,
                name: "Berg Dorp",
                icon: "⛰️",
                theme: "counting",
                description: "Hoog in de bergen wonen de bergbeklimmers. Help ze tellen!",
                unlockMessage: "Berg Dorp verwelkomt je! Klim samen met de bergbeklimmers!",
                completeMessage: "Fantastisch! Je bent een echte teller! Rivier Dorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "counting",
                        visual: { emoji: "🪨", count: 5 },
                        question: "Hoeveel rotsen zie je?",
                        answer: 5,
                        options: [4, 6, 5, 3]
                    },
                    {
                        id: 2,
                        type: "counting",
                        visual: { emoji: "🦅", count: 4 },
                        question: "Hoeveel arenden vliegen er?",
                        answer: 4,
                        options: [3, 5, 4, 6]
                    },
                    {
                        id: 3,
                        type: "counting",
                        visual: { emoji: "☁️", count: 6 },
                        question: "Tel de wolken!",
                        answer: 6,
                        options: [5, 7, 6, 4]
                    },
                    {
                        id: 4,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 1, 2, __, 4",
                        answer: 3,
                        options: [2, 4, 3, 5]
                    },
                    {
                        id: 5,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 3, 4, __, 6",
                        answer: 5,
                        options: [4, 6, 5, 7]
                    },
                    {
                        id: 6,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 2, __, 4, 5",
                        answer: 3,
                        options: [2, 4, 3, 1]
                    },
                    {
                        id: 7,
                        type: "count-backwards",
                        question: "Tel terug! 5, 4, __, 2",
                        answer: 3,
                        options: [2, 4, 3, 5]
                    },
                    {
                        id: 8,
                        type: "count-backwards",
                        question: "Tel terug! 6, 5, __, 3",
                        answer: 4,
                        options: [3, 5, 4, 6]
                    },
                    {
                        id: 9,
                        type: "counting",
                        visual: { emoji: "🌲", count: 7 },
                        question: "Tel de bomen!",
                        answer: 7,
                        options: [6, 8, 7, 5]
                    },
                    {
                        id: 10,
                        type: "counting",
                        visual: { emoji: "🌸", count: 8 },
                        question: "Tel de bloemen!",
                        answer: 8,
                        options: [7, 9, 8, 6]
                    }
                ]
            },
            {
                id: 3,
                name: "Rivier Dorp",
                icon: "🌊",
                theme: "comparison",
                description: "De vissers van Rivier Dorp hebben hulp nodig! Vergelijk de getallen.",
                unlockMessage: "Rivier Dorp stroomt van vreugde! Help de vissers!",
                completeMessage: "Wauw! Je bent een echte vergelijker! Kasteel Dorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "comparison",
                        question: "Welk getal is GROTER? 3 of 1",
                        answer: 3,
                        options: [3, 1]
                    },
                    {
                        id: 2,
                        type: "comparison",
                        question: "Welk getal is GROTER? 2 of 5",
                        answer: 5,
                        options: [2, 5]
                    },
                    {
                        id: 3,
                        type: "comparison",
                        question: "Welk getal is KLEINER? 4 of 2",
                        answer: 2,
                        options: [4, 2]
                    },
                    {
                        id: 4,
                        type: "comparison",
                        question: "Welk getal is KLEINER? 6 of 3",
                        answer: 3,
                        options: [6, 3]
                    },
                    {
                        id: 5,
                        type: "visual-comparison",
                        visual: { emoji: "🐟", left: 3, right: 1 },
                        question: "Welke groep heeft MEER vissen?",
                        answer: "links",
                        options: ["links", "rechts"]
                    },
                    {
                        id: 6,
                        type: "visual-comparison",
                        visual: { emoji: "🚤", left: 2, right: 4 },
                        question: "Welke groep heeft MEER boten?",
                        answer: "rechts",
                        options: ["links", "rechts"]
                    },
                    {
                        id: 7,
                        type: "visual-comparison",
                        visual: { emoji: "🦆", left: 5, right: 2 },
                        question: "Welke groep heeft MINDER eendjes?",
                        answer: "rechts",
                        options: ["links", "rechts"]
                    },
                    {
                        id: 8,
                        type: "ordering",
                        question: "Welk getal is het KLEINSTE? 4, 2, 5",
                        answer: 2,
                        options: [4, 2, 5]
                    },
                    {
                        id: 9,
                        type: "ordering",
                        question: "Welk getal is het GROOTSTE? 3, 6, 1",
                        answer: 6,
                        options: [3, 6, 1]
                    },
                    {
                        id: 10,
                        type: "ordering",
                        question: "Welk getal is het GROOTSTE? 2, 4, 3",
                        answer: 4,
                        options: [2, 4, 3]
                    }
                ]
            },
            {
                id: 4,
                name: "Kasteel Dorp",
                icon: "🏰",
                theme: "mixed",
                description: "De Koningin heeft jouw hulp nodig! Los alle rekenpuzzels op!",
                unlockMessage: "Welkom bij het kasteel! De Koningin wacht op je!",
                completeMessage: "HOERA! Je hebt Beginners Eiland voltooid! Tijd voor het volgende eiland!",
                challenges: [
                    {
                        id: 1,
                        type: "number-addition",
                        question: "4 + 3 = ?",
                        answer: 7,
                        options: [6, 8, 7, 5]
                    },
                    {
                        id: 2,
                        type: "number-subtraction",
                        question: "6 - 4 = ?",
                        answer: 2,
                        options: [1, 3, 2, 4]
                    },
                    {
                        id: 3,
                        type: "comparison",
                        question: "Welk getal is GROTER? 5 of 7",
                        answer: 7,
                        options: [5, 7]
                    },
                    {
                        id: 4,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 4, 5, __, 7",
                        answer: 6,
                        options: [5, 7, 6, 8]
                    },
                    {
                        id: 5,
                        type: "number-addition",
                        question: "5 + 3 = ?",
                        answer: 8,
                        options: [7, 9, 8, 6]
                    },
                    {
                        id: 6,
                        type: "number-subtraction",
                        question: "7 - 3 = ?",
                        answer: 4,
                        options: [3, 5, 4, 2]
                    },
                    {
                        id: 7,
                        type: "counting",
                        visual: { emoji: "👑", count: 6 },
                        question: "Tel de kroontjes!",
                        answer: 6,
                        options: [5, 7, 6, 4]
                    },
                    {
                        id: 8,
                        type: "word-problem",
                        visual: { emoji: "💎", count: 3 },
                        question: "Aria heeft 3 diamanten. Ze vindt er 2 bij. Hoeveel heeft ze nu?",
                        answer: 5,
                        options: [4, 6, 5, 3]
                    },
                    {
                        id: 9,
                        type: "word-problem",
                        visual: { emoji: "🗡️", count: 5 },
                        question: "Er zijn 5 ridders. 2 gaan weg. Hoeveel ridders blijven er?",
                        answer: 3,
                        options: [2, 4, 3, 1]
                    },
                    {
                        id: 10,
                        type: "number-addition",
                        question: "4 + 4 = ?",
                        answer: 8,
                        options: [7, 9, 8, 6]
                    }
                ]
            }
        ]
    },

    // ==========================================
    // ISLAND 1: GEVORDERDEN EILAND (Ages 6-7)
    // Numbers 1-20, harder operations
    // ==========================================
    {
        id: 1,
        name: "Gevorderden Eiland",
        icon: "🏝️",
        description: "Voor slimme rekenaars! Getallen tot 20 en meer uitdaging.",
        difficulty: "medium",
        unlockStars: 30,
        color: "#00B894",
        villages: [
            {
                id: 0,
                name: "Jungle Dorp",
                icon: "🦜",
                theme: "addition",
                description: "Diep in de jungle! Tel de exotische dieren en bloemen met grotere getallen.",
                unlockMessage: "Welkom in de jungle! De papegaaien begroeten je!",
                completeMessage: "Fantastisch! Je bent een jungle-expert! Woestijn Dorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "visual-addition",
                        visual: { emoji: "🦜", left: 5, right: 3 },
                        question: "Hoeveel papegaaien zijn er in totaal?",
                        answer: 8,
                        options: [7, 9, 8, 6]
                    },
                    {
                        id: 2,
                        type: "visual-addition",
                        visual: { emoji: "🐒", left: 4, right: 4 },
                        question: "Hoeveel aapjes spelen er?",
                        answer: 8,
                        options: [7, 9, 8, 6]
                    },
                    {
                        id: 3,
                        type: "number-addition",
                        question: "6 + 5 = ?",
                        answer: 11,
                        options: [10, 12, 11, 9]
                    },
                    {
                        id: 4,
                        type: "number-addition",
                        question: "7 + 4 = ?",
                        answer: 11,
                        options: [10, 12, 11, 9]
                    },
                    {
                        id: 5,
                        type: "number-addition",
                        question: "8 + 5 = ?",
                        answer: 13,
                        options: [12, 14, 13, 11]
                    },
                    {
                        id: 6,
                        type: "number-addition",
                        question: "9 + 4 = ?",
                        answer: 13,
                        options: [12, 14, 13, 11]
                    },
                    {
                        id: 7,
                        type: "number-addition",
                        question: "7 + 7 = ?",
                        answer: 14,
                        options: [13, 15, 14, 12]
                    },
                    {
                        id: 8,
                        type: "number-addition",
                        question: "8 + 6 = ?",
                        answer: 14,
                        options: [13, 15, 14, 12]
                    },
                    {
                        id: 9,
                        type: "number-addition",
                        question: "9 + 6 = ?",
                        answer: 15,
                        options: [14, 16, 15, 13]
                    },
                    {
                        id: 10,
                        type: "number-addition",
                        question: "8 + 8 = ?",
                        answer: 16,
                        options: [15, 17, 16, 14]
                    }
                ]
            },
            {
                id: 1,
                name: "Woestijn Dorp",
                icon: "🏜️",
                theme: "subtraction",
                description: "In de hete woestijn! Help de kamelen met aftrekken van grotere getallen.",
                unlockMessage: "De woestijn verwelkomt je! Pas op voor de zon!",
                completeMessage: "Super! Je bent een woestijn-held! Vulkaan Dorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "visual-subtraction",
                        visual: { emoji: "🐪", total: 8, remove: 3 },
                        question: "Er zijn 8 kamelen. 3 lopen weg. Hoeveel blijven er?",
                        answer: 5,
                        options: [4, 6, 5, 3]
                    },
                    {
                        id: 2,
                        type: "number-subtraction",
                        question: "11 - 4 = ?",
                        answer: 7,
                        options: [6, 8, 7, 5]
                    },
                    {
                        id: 3,
                        type: "number-subtraction",
                        question: "12 - 5 = ?",
                        answer: 7,
                        options: [6, 8, 7, 5]
                    },
                    {
                        id: 4,
                        type: "number-subtraction",
                        question: "13 - 6 = ?",
                        answer: 7,
                        options: [6, 8, 7, 5]
                    },
                    {
                        id: 5,
                        type: "number-subtraction",
                        question: "14 - 5 = ?",
                        answer: 9,
                        options: [8, 10, 9, 7]
                    },
                    {
                        id: 6,
                        type: "number-subtraction",
                        question: "15 - 7 = ?",
                        answer: 8,
                        options: [7, 9, 8, 6]
                    },
                    {
                        id: 7,
                        type: "number-subtraction",
                        question: "16 - 8 = ?",
                        answer: 8,
                        options: [7, 9, 8, 6]
                    },
                    {
                        id: 8,
                        type: "number-subtraction",
                        question: "17 - 9 = ?",
                        answer: 8,
                        options: [7, 9, 8, 6]
                    },
                    {
                        id: 9,
                        type: "number-subtraction",
                        question: "18 - 9 = ?",
                        answer: 9,
                        options: [8, 10, 9, 7]
                    },
                    {
                        id: 10,
                        type: "number-subtraction",
                        question: "20 - 10 = ?",
                        answer: 10,
                        options: [9, 11, 10, 8]
                    }
                ]
            },
            {
                id: 2,
                name: "Vulkaan Dorp",
                icon: "🌋",
                theme: "counting",
                description: "Bij de vurige vulkaan! Tel verder en ontdek patronen tot 20.",
                unlockMessage: "De vulkaan bruist van energie! Net als jij!",
                completeMessage: "Geweldig! Je bent een patroon-meester! Waterval Dorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "counting",
                        visual: { emoji: "🔥", count: 12 },
                        question: "Tel de vlammen!",
                        answer: 12,
                        options: [11, 13, 12, 10]
                    },
                    {
                        id: 2,
                        type: "counting",
                        visual: { emoji: "💎", count: 15 },
                        question: "Hoeveel edelstenen zie je?",
                        answer: 15,
                        options: [14, 16, 15, 13]
                    },
                    {
                        id: 3,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 8, 9, 10, __, 12",
                        answer: 11,
                        options: [10, 12, 11, 13]
                    },
                    {
                        id: 4,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 14, __, 16, 17",
                        answer: 15,
                        options: [14, 16, 15, 13]
                    },
                    {
                        id: 5,
                        type: "skip-counting",
                        question: "Tel door met 2! 2, 4, 6, __",
                        answer: 8,
                        options: [7, 9, 8, 10]
                    },
                    {
                        id: 6,
                        type: "skip-counting",
                        question: "Tel door met 2! 6, 8, 10, __",
                        answer: 12,
                        options: [11, 13, 12, 14]
                    },
                    {
                        id: 7,
                        type: "skip-counting",
                        question: "Tel door met 5! 5, 10, __",
                        answer: 15,
                        options: [12, 20, 15, 13]
                    },
                    {
                        id: 8,
                        type: "count-backwards",
                        question: "Tel terug! 15, 14, __, 12",
                        answer: 13,
                        options: [12, 14, 13, 11]
                    },
                    {
                        id: 9,
                        type: "count-backwards",
                        question: "Tel terug! 20, 19, 18, __",
                        answer: 17,
                        options: [16, 18, 17, 15]
                    },
                    {
                        id: 10,
                        type: "skip-counting",
                        question: "Tel door met 10! 10, 20, __",
                        answer: 30,
                        options: [25, 40, 30, 35]
                    }
                ]
            },
            {
                id: 3,
                name: "Waterval Dorp",
                icon: "💧",
                theme: "comparison",
                description: "Bij de prachtige watervallen! Vergelijk grotere getallen.",
                unlockMessage: "Het water klatert van blijdschap! Welkom!",
                completeMessage: "Schitterend! Je bent een vergelijk-kampioen! Tempel Dorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "comparison",
                        question: "Welk teken past? 12 __ 8",
                        answer: ">",
                        options: [">", "<", "="]
                    },
                    {
                        id: 2,
                        type: "comparison",
                        question: "Welk teken past? 9 __ 15",
                        answer: "<",
                        options: [">", "<", "="]
                    },
                    {
                        id: 3,
                        type: "comparison",
                        question: "Welk teken past? 14 __ 14",
                        answer: "=",
                        options: [">", "<", "="]
                    },
                    {
                        id: 4,
                        type: "comparison",
                        question: "Welk teken past? 17 __ 11",
                        answer: ">",
                        options: [">", "<", "="]
                    },
                    {
                        id: 5,
                        type: "comparison",
                        question: "Welk teken past? 13 __ 19",
                        answer: "<",
                        options: [">", "<", "="]
                    },
                    {
                        id: 6,
                        type: "ordering",
                        question: "Welk getal is het KLEINSTE? 12, 8, 15",
                        answer: 8,
                        options: [12, 8, 15]
                    },
                    {
                        id: 7,
                        type: "ordering",
                        question: "Welk getal is het GROOTSTE? 11, 18, 14",
                        answer: 18,
                        options: [11, 18, 14]
                    },
                    {
                        id: 8,
                        type: "ordering",
                        question: "Welk getal is het KLEINSTE? 16, 9, 20",
                        answer: 9,
                        options: [16, 9, 20]
                    },
                    {
                        id: 9,
                        type: "visual-comparison",
                        visual: { emoji: "💧", left: 8, right: 5 },
                        question: "Welke groep heeft MEER druppels?",
                        answer: "links",
                        options: ["links", "rechts", "gelijk"]
                    },
                    {
                        id: 10,
                        type: "ordering",
                        question: "Welk getal is het GROOTSTE? 13, 7, 19",
                        answer: 19,
                        options: [13, 7, 19]
                    }
                ]
            },
            {
                id: 4,
                name: "Tempel Dorp",
                icon: "🏛️",
                theme: "mixed",
                description: "De oude tempel vol mysteries! Los alle puzzels op voor de schat!",
                unlockMessage: "De tempel onthult zijn geheimen aan jou!",
                completeMessage: "HOERA! Je hebt Gevorderden Eiland voltooid! Klaar voor de ultieme uitdaging?",
                challenges: [
                    {
                        id: 1,
                        type: "number-addition",
                        question: "9 + 7 = ?",
                        answer: 16,
                        options: [15, 17, 16, 14]
                    },
                    {
                        id: 2,
                        type: "number-subtraction",
                        question: "15 - 8 = ?",
                        answer: 7,
                        options: [6, 8, 7, 5]
                    },
                    {
                        id: 3,
                        type: "comparison",
                        question: "Welk teken past? 16 __ 12",
                        answer: ">",
                        options: [">", "<", "="]
                    },
                    {
                        id: 4,
                        type: "skip-counting",
                        question: "Tel door met 3! 3, 6, 9, __",
                        answer: 12,
                        options: [10, 15, 12, 11]
                    },
                    {
                        id: 5,
                        type: "number-addition",
                        question: "8 + 9 = ?",
                        answer: 17,
                        options: [16, 18, 17, 15]
                    },
                    {
                        id: 6,
                        type: "number-subtraction",
                        question: "18 - 9 = ?",
                        answer: 9,
                        options: [8, 10, 9, 7]
                    },
                    {
                        id: 7,
                        type: "word-problem",
                        visual: { emoji: "🏺", count: 8 },
                        question: "Er zijn 8 vazen. Er komen 6 bij. Hoeveel vazen zijn er nu?",
                        answer: 14,
                        options: [13, 15, 14, 12]
                    },
                    {
                        id: 8,
                        type: "word-problem",
                        visual: { emoji: "🗿", count: 15 },
                        question: "Er staan 15 standbeelden. 7 vallen om. Hoeveel staan er nog?",
                        answer: 8,
                        options: [7, 9, 8, 6]
                    },
                    {
                        id: 9,
                        type: "number-addition",
                        question: "10 + 10 = ?",
                        answer: 20,
                        options: [18, 22, 20, 19]
                    },
                    {
                        id: 10,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 16, 17, __, 19, 20",
                        answer: 18,
                        options: [17, 19, 18, 16]
                    }
                ]
            }
        ]
    },

    // ==========================================
    // ISLAND 2: EXPERTS EILAND (Ages 7-8)
    // Numbers 1-50, multiplication intro, complex problems
    // ==========================================
    {
        id: 2,
        name: "Experts Eiland",
        icon: "🗺️",
        description: "Voor echte rekenmeesters! Grote getallen en nieuwe uitdagingen.",
        difficulty: "hard",
        unlockStars: 80,
        color: "#6C5CE7",
        villages: [
            {
                id: 0,
                name: "Piratendorp",
                icon: "🏴‍☠️",
                theme: "addition",
                description: "Ahoy! De piraten hebben hulp nodig met hun schatten. Reken met grote getallen!",
                unlockMessage: "Welkom aan boord, matroos! De schat wacht!",
                completeMessage: "Arr! Je bent een echte rekenaar! Drakendorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "number-addition",
                        question: "15 + 10 = ?",
                        answer: 25,
                        options: [24, 26, 25, 23]
                    },
                    {
                        id: 2,
                        type: "number-addition",
                        question: "18 + 12 = ?",
                        answer: 30,
                        options: [28, 32, 30, 29]
                    },
                    {
                        id: 3,
                        type: "number-addition",
                        question: "23 + 15 = ?",
                        answer: 38,
                        options: [36, 40, 38, 37]
                    },
                    {
                        id: 4,
                        type: "number-addition",
                        question: "25 + 25 = ?",
                        answer: 50,
                        options: [45, 55, 50, 48]
                    },
                    {
                        id: 5,
                        type: "number-addition",
                        question: "19 + 14 = ?",
                        answer: 33,
                        options: [31, 35, 33, 32]
                    },
                    {
                        id: 6,
                        type: "word-problem",
                        visual: { emoji: "💰", count: 12 },
                        question: "De piraat heeft 12 munten. Hij vindt er 15 bij. Hoeveel heeft hij nu?",
                        answer: 27,
                        options: [25, 29, 27, 26]
                    },
                    {
                        id: 7,
                        type: "number-addition",
                        question: "16 + 17 = ?",
                        answer: 33,
                        options: [31, 35, 33, 32]
                    },
                    {
                        id: 8,
                        type: "number-addition",
                        question: "24 + 18 = ?",
                        answer: 42,
                        options: [40, 44, 42, 41]
                    },
                    {
                        id: 9,
                        type: "number-addition",
                        question: "29 + 16 = ?",
                        answer: 45,
                        options: [43, 47, 45, 44]
                    },
                    {
                        id: 10,
                        type: "number-addition",
                        question: "35 + 15 = ?",
                        answer: 50,
                        options: [48, 52, 50, 49]
                    }
                ]
            },
            {
                id: 1,
                name: "Drakendorp",
                icon: "🐉",
                theme: "subtraction",
                description: "De draken bewaken hun eieren! Help ze tellen met aftrekken van grote getallen.",
                unlockMessage: "De draken vertrouwen je! Wees voorzichtig!",
                completeMessage: "Machtig! De draken eren je! Sterrenwacht Dorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "number-subtraction",
                        question: "25 - 10 = ?",
                        answer: 15,
                        options: [14, 16, 15, 13]
                    },
                    {
                        id: 2,
                        type: "number-subtraction",
                        question: "30 - 12 = ?",
                        answer: 18,
                        options: [16, 20, 18, 17]
                    },
                    {
                        id: 3,
                        type: "number-subtraction",
                        question: "40 - 15 = ?",
                        answer: 25,
                        options: [23, 27, 25, 24]
                    },
                    {
                        id: 4,
                        type: "number-subtraction",
                        question: "35 - 18 = ?",
                        answer: 17,
                        options: [15, 19, 17, 16]
                    },
                    {
                        id: 5,
                        type: "number-subtraction",
                        question: "50 - 25 = ?",
                        answer: 25,
                        options: [23, 27, 25, 24]
                    },
                    {
                        id: 6,
                        type: "word-problem",
                        visual: { emoji: "🥚", count: 10 },
                        question: "De draak heeft 30 eieren. 12 komen uit. Hoeveel eieren zijn er nog?",
                        answer: 18,
                        options: [16, 20, 18, 17]
                    },
                    {
                        id: 7,
                        type: "number-subtraction",
                        question: "45 - 19 = ?",
                        answer: 26,
                        options: [24, 28, 26, 25]
                    },
                    {
                        id: 8,
                        type: "number-subtraction",
                        question: "38 - 16 = ?",
                        answer: 22,
                        options: [20, 24, 22, 21]
                    },
                    {
                        id: 9,
                        type: "number-subtraction",
                        question: "42 - 24 = ?",
                        answer: 18,
                        options: [16, 20, 18, 17]
                    },
                    {
                        id: 10,
                        type: "number-subtraction",
                        question: "50 - 33 = ?",
                        answer: 17,
                        options: [15, 19, 17, 16]
                    }
                ]
            },
            {
                id: 2,
                name: "Sterrenwacht Dorp",
                icon: "🔭",
                theme: "multiplication",
                description: "Hoog in de sterren! Leer de tafels en tel sneller met vermenigvuldigen.",
                unlockMessage: "De sterren schijnen voor jou! Ontdek de tafels!",
                completeMessage: "Briljant! Je bent een ster in tafels! Tovenaarsdorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "multiplication",
                        question: "2 × 2 = ?",
                        answer: 4,
                        options: [3, 5, 4, 6]
                    },
                    {
                        id: 2,
                        type: "multiplication",
                        question: "2 × 3 = ?",
                        answer: 6,
                        options: [5, 7, 6, 8]
                    },
                    {
                        id: 3,
                        type: "multiplication",
                        question: "2 × 5 = ?",
                        answer: 10,
                        options: [8, 12, 10, 7]
                    },
                    {
                        id: 4,
                        type: "multiplication",
                        question: "3 × 3 = ?",
                        answer: 9,
                        options: [6, 12, 9, 8]
                    },
                    {
                        id: 5,
                        type: "multiplication",
                        question: "5 × 2 = ?",
                        answer: 10,
                        options: [8, 12, 10, 7]
                    },
                    {
                        id: 6,
                        type: "multiplication",
                        question: "4 × 2 = ?",
                        answer: 8,
                        options: [6, 10, 8, 7]
                    },
                    {
                        id: 7,
                        type: "multiplication",
                        question: "3 × 4 = ?",
                        answer: 12,
                        options: [10, 14, 12, 11]
                    },
                    {
                        id: 8,
                        type: "multiplication",
                        question: "5 × 3 = ?",
                        answer: 15,
                        options: [12, 18, 15, 13]
                    },
                    {
                        id: 9,
                        type: "multiplication",
                        question: "4 × 4 = ?",
                        answer: 16,
                        options: [14, 18, 16, 12]
                    },
                    {
                        id: 10,
                        type: "multiplication",
                        question: "5 × 5 = ?",
                        answer: 25,
                        options: [20, 30, 25, 22]
                    }
                ]
            },
            {
                id: 3,
                name: "Tovenaarsdorp",
                icon: "🧙",
                theme: "patterns",
                description: "Magische patronen! Ontdek geheime getallenreeksen en los toverpuzzels op.",
                unlockMessage: "De tovenaar deelt zijn geheimen met je!",
                completeMessage: "Magisch! Je hebt alle patronen ontdekt! Kroondorp is nu ontgrendeld!",
                challenges: [
                    {
                        id: 1,
                        type: "skip-counting",
                        question: "Tel door met 3! 3, 6, 9, 12, __",
                        answer: 15,
                        options: [13, 18, 15, 14]
                    },
                    {
                        id: 2,
                        type: "skip-counting",
                        question: "Tel door met 4! 4, 8, 12, __",
                        answer: 16,
                        options: [14, 18, 16, 20]
                    },
                    {
                        id: 3,
                        type: "skip-counting",
                        question: "Tel door met 5! 10, 15, 20, __",
                        answer: 25,
                        options: [22, 30, 25, 23]
                    },
                    {
                        id: 4,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 25, 30, __, 40, 45",
                        answer: 35,
                        options: [32, 38, 35, 33]
                    },
                    {
                        id: 5,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 12, 15, 18, __, 24",
                        answer: 21,
                        options: [19, 23, 21, 20]
                    },
                    {
                        id: 6,
                        type: "count-backwards",
                        question: "Tel terug met 2! 20, 18, 16, __",
                        answer: 14,
                        options: [12, 15, 14, 13]
                    },
                    {
                        id: 7,
                        type: "count-backwards",
                        question: "Tel terug met 5! 30, 25, 20, __",
                        answer: 15,
                        options: [12, 18, 15, 10]
                    },
                    {
                        id: 8,
                        type: "skip-counting",
                        question: "Tel door met 10! 20, 30, 40, __",
                        answer: 50,
                        options: [45, 55, 50, 60]
                    },
                    {
                        id: 9,
                        type: "missing-number",
                        question: "Welk getal ontbreekt? 8, 16, 24, __, 40",
                        answer: 32,
                        options: [28, 36, 32, 30]
                    },
                    {
                        id: 10,
                        type: "skip-counting",
                        question: "Tel door met 6! 6, 12, 18, __",
                        answer: 24,
                        options: [22, 26, 24, 20]
                    }
                ]
            },
            {
                id: 4,
                name: "Kroondorp",
                icon: "👑",
                theme: "mixed",
                description: "Het koninklijk paleis! Los de ultieme uitdagingen op en word Eiland Kampioen!",
                unlockMessage: "De koning en koningin verwelkomen je in het paleis!",
                completeMessage: "🎉 GEFELICITEERD! Je bent de ULTIEME EILAND KAMPIOEN! 🏆",
                challenges: [
                    {
                        id: 1,
                        type: "number-addition",
                        question: "27 + 18 = ?",
                        answer: 45,
                        options: [43, 47, 45, 44]
                    },
                    {
                        id: 2,
                        type: "number-subtraction",
                        question: "50 - 27 = ?",
                        answer: 23,
                        options: [21, 25, 23, 22]
                    },
                    {
                        id: 3,
                        type: "multiplication",
                        question: "6 × 4 = ?",
                        answer: 24,
                        options: [22, 26, 24, 20]
                    },
                    {
                        id: 4,
                        type: "comparison",
                        question: "Welk teken past? 35 __ 29",
                        answer: ">",
                        options: [">", "<", "="]
                    },
                    {
                        id: 5,
                        type: "word-problem",
                        visual: { emoji: "👑", count: 5 },
                        question: "De koning heeft 5 kroontjes. De koningin geeft hem er 18 bij. Hoeveel heeft hij nu?",
                        answer: 23,
                        options: [21, 25, 23, 22]
                    },
                    {
                        id: 6,
                        type: "multiplication",
                        question: "7 × 3 = ?",
                        answer: 21,
                        options: [18, 24, 21, 19]
                    },
                    {
                        id: 7,
                        type: "word-problem",
                        visual: { emoji: "💎", count: 8 },
                        question: "Er zijn 40 diamanten. De prinses neemt er 15. Hoeveel blijven er?",
                        answer: 25,
                        options: [23, 27, 25, 24]
                    },
                    {
                        id: 8,
                        type: "skip-counting",
                        question: "Tel door met 7! 7, 14, 21, __",
                        answer: 28,
                        options: [25, 30, 28, 27]
                    },
                    {
                        id: 9,
                        type: "multiplication",
                        question: "8 × 5 = ?",
                        answer: 40,
                        options: [35, 45, 40, 38]
                    },
                    {
                        id: 10,
                        type: "word-problem",
                        visual: { emoji: "🏆", count: 3 },
                        question: "Je hebt 3 trofeeën verdiend op elk eiland. Je hebt 3 eilanden bezocht. Hoeveel trofeeën heb je in totaal? (3 × 3)",
                        answer: 9,
                        options: [6, 12, 9, 8]
                    }
                ]
            }
        ]
    }
];

// Dutch feedback messages
const FEEDBACK = {
    correct: [
        "Goed gedaan! 🌟",
        "Uitstekend! ⭐",
        "Fantastisch! 🎉",
        "Super! Je bent geweldig! 💪",
        "Precies goed! 🏆",
        "Wauw, wat knap! 🌈",
        "Je bent een rekenster! ⭐",
        "Helemaal goed! 👏",
        "Briljant! 💫",
        "Top werk! 🎯"
    ],
    incorrect: [
        "Probeer het nog eens! 💪",
        "Bijna! Denk nog even na. 🤔",
        "Oeps! Probeer opnieuw! 🔄",
        "Niet helemaal, probeer nog eens! 💭",
        "Dat was niet goed, maar je kunt het! 🌟"
    ],
    encouragement: [
        "Je kunt het! 💪",
        "Blijf proberen! 🌟",
        "Denk rustig na! 🤔",
        "Je bent bijna! ⭐"
    ]
};

// Helper function to get total challenges count
function getTotalChallengesCount() {
    return ISLANDS.reduce((total, island) => {
        return total + island.villages.reduce((vTotal, village) => {
            return vTotal + village.challenges.length;
        }, 0);
    }, 0);
}

// Helper function to get total stars possible
function getTotalStarsPossible() {
    return getTotalChallengesCount();
}

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ISLANDS, FEEDBACK, getTotalChallengesCount, getTotalStarsPossible };
}
