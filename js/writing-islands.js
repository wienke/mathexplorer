/**
 * Aria's Eiland Avontuur - Writing/Letters Islands Data
 * 3 Islands focused on Dutch writing skills for 7-year-olds
 * 
 * Structure:
 * - Island 1: Letters herkennen (letter recognition)
 * - Island 2: Klinkers & Medeklinkers (vowels & consonants)
 * - Island 3: Woorden maken (making words)
 */

const WRITING_ISLANDS = [
    // ==========================================
    // ISLAND 0: LETTERS EILAND
    // Letter recognition and basic letter skills
    // ==========================================
    {
        id: 0,
        name: "Letters Eiland",
        icon: "🔤",
        description: "Leer alle letters van het alfabet kennen!",
        difficulty: "easy",
        unlockStars: 0,
        color: "#FF6B9D",
        villages: [
            {
                id: 0,
                name: "Letter Dorp",
                icon: "🏘️",
                theme: "letter-recognition",
                description: "Welkom in Letter Dorp! Hier leer je letters herkennen. Kun jij de juiste letter vinden?",
                unlockMessage: "Je hebt Letter Dorp ontgrendeld!",
                completeMessage: "Super! Je kent de eerste letters! Ga door naar Alfabet Strand!",
                challenges: [
                    {
                        id: 1,
                        type: "letter-recognition",
                        visual: { letter: "A", style: "large" },
                        question: "Welke letter zie je hier?",
                        answer: "A",
                        options: ["A", "B", "E", "O"]
                    },
                    {
                        id: 2,
                        type: "letter-recognition",
                        visual: { letter: "B", style: "large" },
                        question: "Welke letter is dit?",
                        answer: "B",
                        options: ["D", "B", "P", "R"]
                    },
                    {
                        id: 3,
                        type: "letter-recognition",
                        visual: { letter: "M", style: "large" },
                        question: "Ken je deze letter?",
                        answer: "M",
                        options: ["N", "W", "M", "H"]
                    },
                    {
                        id: 4,
                        type: "letter-recognition",
                        visual: { letter: "S", style: "large" },
                        question: "Welke letter zie je?",
                        answer: "S",
                        options: ["S", "Z", "C", "G"]
                    },
                    {
                        id: 5,
                        type: "letter-recognition",
                        visual: { letter: "P", style: "large" },
                        question: "Wat is deze letter?",
                        answer: "P",
                        options: ["B", "D", "P", "Q"]
                    },
                    {
                        id: 6,
                        type: "letter-sound",
                        visual: { emoji: "🍎", word: "Appel" },
                        question: "Met welke letter begint 'Appel'?",
                        answer: "A",
                        options: ["A", "E", "O", "U"]
                    },
                    {
                        id: 7,
                        type: "letter-sound",
                        visual: { emoji: "🏀", word: "Bal" },
                        question: "Met welke letter begint 'Bal'?",
                        answer: "B",
                        options: ["P", "D", "B", "V"]
                    },
                    {
                        id: 8,
                        type: "letter-sound",
                        visual: { emoji: "🐱", word: "Kat" },
                        question: "Met welke letter begint 'Kat'?",
                        answer: "K",
                        options: ["C", "K", "G", "Q"]
                    },
                    {
                        id: 9,
                        type: "letter-sound",
                        visual: { emoji: "🌙", word: "Maan" },
                        question: "Met welke letter begint 'Maan'?",
                        answer: "M",
                        options: ["M", "N", "W", "H"]
                    },
                    {
                        id: 10,
                        type: "letter-sound",
                        visual: { emoji: "☀️", word: "Zon" },
                        question: "Met welke letter begint 'Zon'?",
                        answer: "Z",
                        options: ["S", "C", "Z", "X"]
                    }
                ]
            },
            {
                id: 1,
                name: "Alfabet Strand",
                icon: "🏖️",
                theme: "alphabet-order",
                description: "Op Alfabet Strand leer je de volgorde van letters! Welke letter komt eerst?",
                unlockMessage: "Je hebt Alfabet Strand ontgrendeld!",
                completeMessage: "Fantastisch! Je kent het alfabet! Door naar Kleine Letter Bos!",
                challenges: [
                    {
                        id: 1,
                        type: "alphabet-order",
                        question: "Welke letter komt NA de A?",
                        answer: "B",
                        options: ["C", "B", "D", "E"]
                    },
                    {
                        id: 2,
                        type: "alphabet-order",
                        question: "Welke letter komt NA de B?",
                        answer: "C",
                        options: ["A", "D", "C", "E"]
                    },
                    {
                        id: 3,
                        type: "alphabet-order",
                        question: "Welke letter komt VOOR de D?",
                        answer: "C",
                        options: ["B", "E", "A", "C"]
                    },
                    {
                        id: 4,
                        type: "alphabet-order",
                        question: "Welke letter komt NA de M?",
                        answer: "N",
                        options: ["L", "O", "N", "P"]
                    },
                    {
                        id: 5,
                        type: "alphabet-order",
                        question: "Welke letter komt VOOR de Z?",
                        answer: "Y",
                        options: ["X", "W", "Y", "A"]
                    },
                    {
                        id: 6,
                        type: "alphabet-sequence",
                        visual: { sequence: ["A", "B", "?"] },
                        question: "Welke letter mist er? A, B, ...",
                        answer: "C",
                        options: ["D", "C", "E", "B"]
                    },
                    {
                        id: 7,
                        type: "alphabet-sequence",
                        visual: { sequence: ["D", "E", "?"] },
                        question: "Welke letter mist er? D, E, ...",
                        answer: "F",
                        options: ["G", "C", "F", "H"]
                    },
                    {
                        id: 8,
                        type: "alphabet-sequence",
                        visual: { sequence: ["?", "B", "C"] },
                        question: "Welke letter mist er? ..., B, C",
                        answer: "A",
                        options: ["D", "A", "Z", "E"]
                    },
                    {
                        id: 9,
                        type: "alphabet-sequence",
                        visual: { sequence: ["L", "?", "N"] },
                        question: "Welke letter mist er? L, ..., N",
                        answer: "M",
                        options: ["K", "O", "M", "P"]
                    },
                    {
                        id: 10,
                        type: "alphabet-sequence",
                        visual: { sequence: ["X", "Y", "?"] },
                        question: "Welke letter mist er? X, Y, ...",
                        answer: "Z",
                        options: ["A", "W", "Z", "V"]
                    }
                ]
            },
            {
                id: 2,
                name: "Kleine Letter Bos",
                icon: "🌲",
                theme: "lowercase",
                description: "In het Kleine Letter Bos leer je kleine letters! a, b, c...",
                unlockMessage: "Je hebt Kleine Letter Bos ontgrendeld!",
                completeMessage: "Geweldig! Je kent kleine letters! Ga naar Hoofd Letter Berg!",
                challenges: [
                    {
                        id: 1,
                        type: "case-match",
                        visual: { uppercase: "A" },
                        question: "Welke kleine letter hoort bij A?",
                        answer: "a",
                        options: ["a", "e", "o", "u"]
                    },
                    {
                        id: 2,
                        type: "case-match",
                        visual: { uppercase: "B" },
                        question: "Welke kleine letter hoort bij B?",
                        answer: "b",
                        options: ["d", "b", "p", "q"]
                    },
                    {
                        id: 3,
                        type: "case-match",
                        visual: { uppercase: "D" },
                        question: "Welke kleine letter hoort bij D?",
                        answer: "d",
                        options: ["b", "d", "p", "g"]
                    },
                    {
                        id: 4,
                        type: "case-match",
                        visual: { uppercase: "G" },
                        question: "Welke kleine letter hoort bij G?",
                        answer: "g",
                        options: ["q", "p", "g", "j"]
                    },
                    {
                        id: 5,
                        type: "case-match",
                        visual: { uppercase: "R" },
                        question: "Welke kleine letter hoort bij R?",
                        answer: "r",
                        options: ["n", "r", "m", "v"]
                    },
                    {
                        id: 6,
                        type: "lowercase-recognition",
                        visual: { letter: "m", style: "large" },
                        question: "Welke kleine letter is dit?",
                        answer: "m",
                        options: ["n", "m", "w", "u"]
                    },
                    {
                        id: 7,
                        type: "lowercase-recognition",
                        visual: { letter: "n", style: "large" },
                        question: "Welke kleine letter zie je?",
                        answer: "n",
                        options: ["m", "h", "n", "r"]
                    },
                    {
                        id: 8,
                        type: "lowercase-recognition",
                        visual: { letter: "p", style: "large" },
                        question: "Wat is deze kleine letter?",
                        answer: "p",
                        options: ["b", "d", "q", "p"]
                    },
                    {
                        id: 9,
                        type: "lowercase-recognition",
                        visual: { letter: "q", style: "large" },
                        question: "Welke kleine letter is dit?",
                        answer: "q",
                        options: ["p", "b", "d", "q"]
                    },
                    {
                        id: 10,
                        type: "case-match",
                        visual: { uppercase: "W" },
                        question: "Welke kleine letter hoort bij W?",
                        answer: "w",
                        options: ["m", "v", "w", "n"]
                    }
                ]
            },
            {
                id: 3,
                name: "Hoofd Letter Berg",
                icon: "⛰️",
                theme: "uppercase",
                description: "Op de Hoofd Letter Berg leer je wanneer je hoofdletters gebruikt!",
                unlockMessage: "Je hebt Hoofd Letter Berg ontgrendeld!",
                completeMessage: "Top! Je weet wanneer je hoofdletters gebruikt! Door naar Letter Kasteel!",
                challenges: [
                    {
                        id: 1,
                        type: "capital-usage",
                        question: "Welk woord moet met een hoofdletter?",
                        visual: { context: "naam" },
                        answer: "Anna",
                        options: ["appel", "Anna", "auto", "arm"]
                    },
                    {
                        id: 2,
                        type: "capital-usage",
                        question: "Welk woord moet met een hoofdletter?",
                        visual: { context: "stad" },
                        answer: "Amsterdam",
                        options: ["auto", "Amsterdam", "avond", "alleen"]
                    },
                    {
                        id: 3,
                        type: "capital-usage",
                        question: "Welk woord moet met een hoofdletter?",
                        visual: { context: "dag" },
                        answer: "Maandag",
                        options: ["maan", "Maandag", "mama", "maken"]
                    },
                    {
                        id: 4,
                        type: "sentence-start",
                        visual: { sentence: "... kat slaapt." },
                        question: "Een zin begint met een...?",
                        answer: "Hoofdletter",
                        options: ["Hoofdletter", "Kleine letter", "Cijfer", "Punt"]
                    },
                    {
                        id: 5,
                        type: "capital-usage",
                        question: "Welke naam is goed geschreven?",
                        answer: "Peter",
                        options: ["peter", "PETER", "Peter", "pEter"]
                    },
                    {
                        id: 6,
                        type: "case-match-reverse",
                        visual: { lowercase: "a" },
                        question: "Welke hoofdletter hoort bij a?",
                        answer: "A",
                        options: ["A", "E", "O", "U"]
                    },
                    {
                        id: 7,
                        type: "case-match-reverse",
                        visual: { lowercase: "m" },
                        question: "Welke hoofdletter hoort bij m?",
                        answer: "M",
                        options: ["N", "W", "M", "H"]
                    },
                    {
                        id: 8,
                        type: "case-match-reverse",
                        visual: { lowercase: "s" },
                        question: "Welke hoofdletter hoort bij s?",
                        answer: "S",
                        options: ["Z", "C", "S", "G"]
                    },
                    {
                        id: 9,
                        type: "capital-usage",
                        question: "Welk land moet met een hoofdletter?",
                        visual: { context: "land" },
                        answer: "Nederland",
                        options: ["nederland", "Nederland", "NEDERLAND", "nEderland"]
                    },
                    {
                        id: 10,
                        type: "sentence-correction",
                        visual: { sentence: "jan speelt buiten." },
                        question: "Wat moet anders? 'jan speelt buiten.'",
                        answer: "Jan",
                        options: ["jan → Jan", "speelt → Speelt", "buiten → Buiten", "Niets"]
                    }
                ]
            },
            {
                id: 4,
                name: "Letter Kasteel",
                icon: "🏰",
                theme: "letter-mastery",
                description: "In het Letter Kasteel test je al je letterkennis!",
                unlockMessage: "Je hebt Letter Kasteel ontgrendeld!",
                completeMessage: "Hoera! Je bent een echte Letter Meester! Ga naar het volgende eiland!",
                challenges: [
                    {
                        id: 1,
                        type: "mixed-letters",
                        question: "Hoeveel letters heeft het alfabet?",
                        answer: "26",
                        options: ["24", "25", "26", "28"]
                    },
                    {
                        id: 2,
                        type: "letter-recognition",
                        visual: { letter: "Q", style: "large" },
                        question: "Welke letter is dit?",
                        answer: "Q",
                        options: ["O", "Q", "G", "C"]
                    },
                    {
                        id: 3,
                        type: "letter-sound",
                        visual: { emoji: "🦒", word: "Giraf" },
                        question: "Met welke letter begint 'Giraf'?",
                        answer: "G",
                        options: ["J", "G", "C", "K"]
                    },
                    {
                        id: 4,
                        type: "alphabet-order",
                        question: "Welke letter is de EERSTE van het alfabet?",
                        answer: "A",
                        options: ["Z", "B", "A", "C"]
                    },
                    {
                        id: 5,
                        type: "alphabet-order",
                        question: "Welke letter is de LAATSTE van het alfabet?",
                        answer: "Z",
                        options: ["X", "Y", "Z", "W"]
                    },
                    {
                        id: 6,
                        type: "case-match",
                        visual: { uppercase: "F" },
                        question: "Welke kleine letter hoort bij F?",
                        answer: "f",
                        options: ["f", "t", "l", "r"]
                    },
                    {
                        id: 7,
                        type: "letter-sound",
                        visual: { emoji: "🚂", word: "Trein" },
                        question: "Met welke letter begint 'Trein'?",
                        answer: "T",
                        options: ["D", "R", "T", "P"]
                    },
                    {
                        id: 8,
                        type: "capital-usage",
                        question: "Welke zin is goed geschreven?",
                        answer: "Ik heet Lisa.",
                        options: ["ik heet lisa.", "Ik heet Lisa.", "ik Heet Lisa.", "IK HEET LISA."]
                    },
                    {
                        id: 9,
                        type: "alphabet-sequence",
                        visual: { sequence: ["P", "Q", "?", "S"] },
                        question: "Welke letter mist er? P, Q, ..., S",
                        answer: "R",
                        options: ["O", "R", "T", "N"]
                    },
                    {
                        id: 10,
                        type: "mixed-letters",
                        visual: { emoji: "🎉" },
                        question: "Je hebt alle letters geleerd! Wat zeg je?",
                        answer: "Hoera!",
                        options: ["Oh nee!", "Hoera!", "Help!", "Jammer!"]
                    }
                ]
            }
        ]
    },

    // ==========================================
    // ISLAND 1: KLINKERS EILAND
    // Vowels, consonants, and letter sounds
    // ==========================================
    {
        id: 1,
        name: "Klinkers Eiland",
        icon: "🎵",
        description: "Leer over klinkers en medeklinkers!",
        difficulty: "medium",
        unlockStars: 30,
        color: "#FF85A2",
        villages: [
            {
                id: 0,
                name: "Klinker Dorp",
                icon: "🎤",
                theme: "vowels",
                description: "Welkom in Klinker Dorp! Klinkers zijn speciale letters: a, e, i, o, u.",
                unlockMessage: "Je hebt Klinker Dorp ontgrendeld!",
                completeMessage: "Super! Je kent alle klinkers! Door naar Medeklinker Bos!",
                challenges: [
                    {
                        id: 1,
                        type: "vowel-intro",
                        visual: { vowels: ["a", "e", "i", "o", "u"] },
                        question: "Welke letter is een KLINKER?",
                        answer: "a",
                        options: ["b", "a", "c", "d"]
                    },
                    {
                        id: 2,
                        type: "vowel-recognition",
                        question: "Welke letter is een KLINKER?",
                        answer: "e",
                        options: ["f", "g", "e", "h"]
                    },
                    {
                        id: 3,
                        type: "vowel-recognition",
                        question: "Welke letter is een KLINKER?",
                        answer: "i",
                        options: ["j", "k", "l", "i"]
                    },
                    {
                        id: 4,
                        type: "vowel-recognition",
                        question: "Welke letter is een KLINKER?",
                        answer: "o",
                        options: ["o", "p", "q", "r"]
                    },
                    {
                        id: 5,
                        type: "vowel-recognition",
                        question: "Welke letter is een KLINKER?",
                        answer: "u",
                        options: ["s", "t", "u", "v"]
                    },
                    {
                        id: 6,
                        type: "vowel-count",
                        visual: { word: "aap" },
                        question: "Hoeveel klinkers zitten in 'aap'?",
                        answer: "2",
                        options: ["1", "2", "3", "0"]
                    },
                    {
                        id: 7,
                        type: "vowel-count",
                        visual: { word: "boom" },
                        question: "Hoeveel klinkers zitten in 'boom'?",
                        answer: "2",
                        options: ["1", "2", "3", "4"]
                    },
                    {
                        id: 8,
                        type: "vowel-find",
                        visual: { word: "kat" },
                        question: "Welke klinker zit in 'kat'?",
                        answer: "a",
                        options: ["e", "i", "a", "o"]
                    },
                    {
                        id: 9,
                        type: "vowel-find",
                        visual: { word: "huis" },
                        question: "Welke klinkers zitten in 'huis'?",
                        answer: "u en i",
                        options: ["a en e", "u en i", "o en u", "e en i"]
                    },
                    {
                        id: 10,
                        type: "vowel-memory",
                        question: "Hoeveel klinkers zijn er in totaal?",
                        answer: "5",
                        options: ["3", "4", "5", "6"]
                    }
                ]
            },
            {
                id: 1,
                name: "Medeklinker Bos",
                icon: "🌳",
                theme: "consonants",
                description: "In het Medeklinker Bos leer je over medeklinkers. Dat zijn alle letters behalve klinkers!",
                unlockMessage: "Je hebt Medeklinker Bos ontgrendeld!",
                completeMessage: "Goed gedaan! Je kent medeklinkers! Ga naar Klank Strand!",
                challenges: [
                    {
                        id: 1,
                        type: "consonant-intro",
                        question: "Welke letter is een MEDEKLINKER?",
                        answer: "b",
                        options: ["a", "b", "e", "i"]
                    },
                    {
                        id: 2,
                        type: "consonant-recognition",
                        question: "Welke letter is een MEDEKLINKER?",
                        answer: "m",
                        options: ["a", "o", "m", "u"]
                    },
                    {
                        id: 3,
                        type: "consonant-recognition",
                        question: "Welke letter is een MEDEKLINKER?",
                        answer: "s",
                        options: ["i", "e", "o", "s"]
                    },
                    {
                        id: 4,
                        type: "consonant-recognition",
                        question: "Welke letter is GEEN medeklinker?",
                        answer: "a",
                        options: ["b", "c", "a", "d"]
                    },
                    {
                        id: 5,
                        type: "consonant-recognition",
                        question: "Welke letter is GEEN medeklinker?",
                        answer: "o",
                        options: ["p", "r", "s", "o"]
                    },
                    {
                        id: 6,
                        type: "consonant-count",
                        visual: { word: "bal" },
                        question: "Hoeveel medeklinkers zitten in 'bal'?",
                        answer: "2",
                        options: ["1", "2", "3", "0"]
                    },
                    {
                        id: 7,
                        type: "consonant-count",
                        visual: { word: "school" },
                        question: "Hoeveel medeklinkers zitten in 'school'?",
                        answer: "4",
                        options: ["2", "3", "4", "5"]
                    },
                    {
                        id: 8,
                        type: "letter-sort",
                        question: "Is de 'k' een klinker of medeklinker?",
                        answer: "Medeklinker",
                        options: ["Klinker", "Medeklinker", "Allebei", "Geen van beide"]
                    },
                    {
                        id: 9,
                        type: "letter-sort",
                        question: "Is de 'e' een klinker of medeklinker?",
                        answer: "Klinker",
                        options: ["Klinker", "Medeklinker", "Allebei", "Geen van beide"]
                    },
                    {
                        id: 10,
                        type: "consonant-memory",
                        question: "Hoeveel medeklinkers zijn er? (26 - 5 klinkers)",
                        answer: "21",
                        options: ["19", "20", "21", "22"]
                    }
                ]
            },
            {
                id: 2,
                name: "Klank Strand",
                icon: "🎶",
                theme: "letter-sounds",
                description: "Op Klank Strand leer je hoe letters klinken!",
                unlockMessage: "Je hebt Klank Strand ontgrendeld!",
                completeMessage: "Fantastisch! Je hoort de klanken! Door naar Rijm Rivier!",
                challenges: [
                    {
                        id: 1,
                        type: "beginning-sound",
                        visual: { emoji: "🐝", word: "Bij" },
                        question: "Welke klank hoor je aan het BEGIN van 'bij'?",
                        answer: "b",
                        options: ["p", "b", "d", "v"]
                    },
                    {
                        id: 2,
                        type: "beginning-sound",
                        visual: { emoji: "🐕", word: "Hond" },
                        question: "Welke klank hoor je aan het BEGIN van 'hond'?",
                        answer: "h",
                        options: ["g", "k", "h", "ch"]
                    },
                    {
                        id: 3,
                        type: "ending-sound",
                        visual: { emoji: "🏠", word: "Huis" },
                        question: "Welke klank hoor je aan het EIND van 'huis'?",
                        answer: "s",
                        options: ["z", "s", "f", "v"]
                    },
                    {
                        id: 4,
                        type: "ending-sound",
                        visual: { emoji: "📖", word: "Boek" },
                        question: "Welke klank hoor je aan het EIND van 'boek'?",
                        answer: "k",
                        options: ["g", "k", "p", "t"]
                    },
                    {
                        id: 5,
                        type: "middle-sound",
                        visual: { emoji: "🐱", word: "Kat" },
                        question: "Welke klank hoor je in het MIDDEN van 'kat'?",
                        answer: "a",
                        options: ["a", "e", "i", "o"]
                    },
                    {
                        id: 6,
                        type: "same-sound",
                        question: "Welk woord begint met dezelfde klank als 'vis'?",
                        answer: "vork",
                        options: ["bus", "worm", "vork", "fles"]
                    },
                    {
                        id: 7,
                        type: "same-sound",
                        question: "Welk woord begint met dezelfde klank als 'boom'?",
                        answer: "beer",
                        options: ["peer", "beer", "deer", "meer"]
                    },
                    {
                        id: 8,
                        type: "same-sound",
                        question: "Welk woord eindigt met dezelfde klank als 'muis'?",
                        answer: "huis",
                        options: ["muil", "huis", "muur", "muis"]
                    },
                    {
                        id: 9,
                        type: "sound-blend",
                        question: "Wat hoor je als je 'k' + 'at' samenvoegt?",
                        answer: "kat",
                        options: ["kas", "kat", "kap", "kam"]
                    },
                    {
                        id: 10,
                        type: "sound-blend",
                        question: "Wat hoor je als je 'b' + 'oom' samenvoegt?",
                        answer: "boom",
                        options: ["boot", "boos", "boom", "boon"]
                    }
                ]
            },
            {
                id: 3,
                name: "Rijm Rivier",
                icon: "🌊",
                theme: "rhyming",
                description: "Bij de Rijm Rivier leer je over rijmen! Maan rijmt op baan!",
                unlockMessage: "Je hebt Rijm Rivier ontgrendeld!",
                completeMessage: "Super! Je kunt rijmen! Ga naar Letterklank Kasteel!",
                challenges: [
                    {
                        id: 1,
                        type: "rhyme-match",
                        visual: { word: "maan" },
                        question: "Welk woord rijmt op 'maan'?",
                        answer: "baan",
                        options: ["boom", "baan", "been", "boel"]
                    },
                    {
                        id: 2,
                        type: "rhyme-match",
                        visual: { word: "vis" },
                        question: "Welk woord rijmt op 'vis'?",
                        answer: "nis",
                        options: ["vos", "nis", "van", "vet"]
                    },
                    {
                        id: 3,
                        type: "rhyme-match",
                        visual: { word: "hond" },
                        question: "Welk woord rijmt op 'hond'?",
                        answer: "rond",
                        options: ["hand", "rood", "rond", "hard"]
                    },
                    {
                        id: 4,
                        type: "rhyme-match",
                        visual: { word: "kat" },
                        question: "Welk woord rijmt op 'kat'?",
                        answer: "mat",
                        options: ["kam", "kar", "mat", "kas"]
                    },
                    {
                        id: 5,
                        type: "rhyme-match",
                        visual: { word: "boom" },
                        question: "Welk woord rijmt op 'boom'?",
                        answer: "room",
                        options: ["boot", "boon", "room", "roos"]
                    },
                    {
                        id: 6,
                        type: "rhyme-odd-one-out",
                        question: "Welk woord rijmt NIET met de anderen?",
                        visual: { words: ["muis", "huis", "boot", "puis"] },
                        answer: "boot",
                        options: ["muis", "huis", "boot", "puis"]
                    },
                    {
                        id: 7,
                        type: "rhyme-odd-one-out",
                        question: "Welk woord rijmt NIET met de anderen?",
                        visual: { words: ["beer", "peer", "meer", "bos"] },
                        answer: "bos",
                        options: ["beer", "peer", "meer", "bos"]
                    },
                    {
                        id: 8,
                        type: "rhyme-complete",
                        visual: { poem: "De kat zit op de ___" },
                        question: "De kat zit op de ... (rijmt op kat)",
                        answer: "mat",
                        options: ["stoel", "mat", "bank", "bed"]
                    },
                    {
                        id: 9,
                        type: "rhyme-complete",
                        visual: { poem: "Ik zie de maan, hij schijnt op de ___" },
                        question: "Ik zie de maan, hij schijnt op de ... (rijmt op maan)",
                        answer: "baan",
                        options: ["weg", "straat", "baan", "grond"]
                    },
                    {
                        id: 10,
                        type: "rhyme-pair",
                        question: "Welke twee woorden rijmen?",
                        answer: "huis - muis",
                        options: ["huis - muis", "boom - boot", "kat - hond", "vis - vos"]
                    }
                ]
            },
            {
                id: 4,
                name: "Letterklank Kasteel",
                icon: "🏯",
                theme: "sound-mastery",
                description: "In het Letterklank Kasteel test je al je kennis over klanken!",
                unlockMessage: "Je hebt Letterklank Kasteel ontgrendeld!",
                completeMessage: "Hoera! Je bent een Klankenkampioen! Door naar Woorden Eiland!",
                challenges: [
                    {
                        id: 1,
                        type: "mixed-sounds",
                        question: "Noem alle klinkers!",
                        answer: "a, e, i, o, u",
                        options: ["a, b, c, d, e", "a, e, i, o, u", "b, c, d, f, g", "m, n, p, r, s"]
                    },
                    {
                        id: 2,
                        type: "vowel-recognition",
                        visual: { word: "fiets" },
                        question: "Welke klinkers zitten in 'fiets'?",
                        answer: "i en e",
                        options: ["a en e", "i en e", "e en o", "i en o"]
                    },
                    {
                        id: 3,
                        type: "consonant-count",
                        visual: { word: "straat" },
                        question: "Hoeveel medeklinkers zitten in 'straat'?",
                        answer: "4",
                        options: ["2", "3", "4", "5"]
                    },
                    {
                        id: 4,
                        type: "rhyme-match",
                        visual: { word: "been" },
                        question: "Welk woord rijmt op 'been'?",
                        answer: "teen",
                        options: ["beer", "teen", "beet", "beek"]
                    },
                    {
                        id: 5,
                        type: "beginning-sound",
                        visual: { emoji: "🦋", word: "Vlinder" },
                        question: "Met welke klank begint 'vlinder'?",
                        answer: "vl",
                        options: ["v", "vl", "f", "fl"]
                    },
                    {
                        id: 6,
                        type: "sound-blend",
                        question: "Wat hoor je als je 'sch' + 'ool' samenvoegt?",
                        answer: "school",
                        options: ["schoen", "school", "schaar", "schaap"]
                    },
                    {
                        id: 7,
                        type: "letter-sort",
                        question: "Zet in de goede volgorde: klinker, medeklinker of allebei? In 'step': s-t-e-p",
                        answer: "m-m-k-m",
                        options: ["k-k-m-k", "m-m-k-m", "m-k-k-m", "k-m-k-m"]
                    },
                    {
                        id: 8,
                        type: "same-sound",
                        question: "Welke twee woorden beginnen met dezelfde klank?",
                        answer: "spin - spel",
                        options: ["spin - spel", "spin - pin", "spin - tin", "spin - kin"]
                    },
                    {
                        id: 9,
                        type: "rhyme-odd-one-out",
                        question: "Welk woord rijmt NIET?",
                        visual: { words: ["roos", "boos", "doos", "rood"] },
                        answer: "rood",
                        options: ["roos", "boos", "doos", "rood"]
                    },
                    {
                        id: 10,
                        type: "sound-mastery",
                        visual: { emoji: "🎉" },
                        question: "Je bent een Klankenkampioen! Hoeveel klinkers zijn er?",
                        answer: "5",
                        options: ["3", "4", "5", "6"]
                    }
                ]
            }
        ]
    },

    // ==========================================
    // ISLAND 2: WOORDEN EILAND
    // Building words, spelling basics
    // ==========================================
    {
        id: 2,
        name: "Woorden Eiland",
        icon: "📝",
        description: "Leer woorden maken en spellen!",
        difficulty: "hard",
        unlockStars: 80,
        color: "#E84393",
        villages: [
            {
                id: 0,
                name: "Woordenbouw Dorp",
                icon: "🔨",
                theme: "word-building",
                description: "In Woordenbouw Dorp leer je woorden maken van letters!",
                unlockMessage: "Je hebt Woordenbouw Dorp ontgrendeld!",
                completeMessage: "Knap! Je kunt woorden bouwen! Door naar Spel Strand!",
                challenges: [
                    {
                        id: 1,
                        type: "word-build",
                        visual: { letters: ["k", "a", "t"] },
                        question: "Welk woord kun je maken van: k - a - t?",
                        answer: "kat",
                        options: ["tak", "kat", "akt", "tka"]
                    },
                    {
                        id: 2,
                        type: "word-build",
                        visual: { letters: ["b", "o", "o", "m"] },
                        question: "Welk woord kun je maken van: b - o - o - m?",
                        answer: "boom",
                        options: ["boom", "moob", "obom", "bomo"]
                    },
                    {
                        id: 3,
                        type: "word-build",
                        visual: { letters: ["h", "u", "i", "s"] },
                        question: "Welk woord kun je maken van: h - u - i - s?",
                        answer: "huis",
                        options: ["shui", "huis", "uish", "ishu"]
                    },
                    {
                        id: 4,
                        type: "letter-order",
                        visual: { scrambled: "noz" },
                        question: "Zet de letters in de goede volgorde: n - o - z",
                        answer: "zon",
                        options: ["noz", "zon", "onz", "zno"]
                    },
                    {
                        id: 5,
                        type: "letter-order",
                        visual: { scrambled: "eepn" },
                        question: "Zet de letters in de goede volgorde: e - e - p - n",
                        answer: "peen",
                        options: ["neep", "peen", "epen", "nepen"]
                    },
                    {
                        id: 6,
                        type: "missing-letter",
                        visual: { word: "h_nd" },
                        question: "Welke letter mist er? h_nd",
                        answer: "o",
                        options: ["a", "e", "o", "u"]
                    },
                    {
                        id: 7,
                        type: "missing-letter",
                        visual: { word: "b_er" },
                        question: "Welke letter mist er? b_er",
                        answer: "e",
                        options: ["a", "e", "i", "o"]
                    },
                    {
                        id: 8,
                        type: "missing-letter",
                        visual: { word: "ma_n" },
                        question: "Welke letter mist er? ma_n",
                        answer: "a",
                        options: ["a", "e", "i", "o"]
                    },
                    {
                        id: 9,
                        type: "word-build",
                        visual: { letters: ["s", "t", "o", "e", "l"] },
                        question: "Welk woord kun je maken van: s - t - o - e - l?",
                        answer: "stoel",
                        options: ["stoel", "loets", "toels", "elsto"]
                    },
                    {
                        id: 10,
                        type: "letter-order",
                        visual: { scrambled: "anam" },
                        question: "Zet de letters in de goede volgorde: a - n - a - m",
                        answer: "maan",
                        options: ["naam", "maan", "aman", "naam"]
                    }
                ]
            },
            {
                id: 1,
                name: "Spel Strand",
                icon: "🏝️",
                theme: "spelling",
                description: "Op Spel Strand leer je goed spellen!",
                unlockMessage: "Je hebt Spel Strand ontgrendeld!",
                completeMessage: "Geweldig! Je kunt goed spellen! Naar Woord Bos!",
                challenges: [
                    {
                        id: 1,
                        type: "spelling-choice",
                        visual: { emoji: "🐶", word: "hond" },
                        question: "Hoe spel je dit dier? 🐶",
                        answer: "hond",
                        options: ["hont", "hond", "hoond", "hondt"]
                    },
                    {
                        id: 2,
                        type: "spelling-choice",
                        visual: { emoji: "🎈", word: "ballon" },
                        question: "Hoe spel je dit? 🎈",
                        answer: "ballon",
                        options: ["balon", "ballon", "baalon", "balllon"]
                    },
                    {
                        id: 3,
                        type: "spelling-choice",
                        visual: { emoji: "🚗", word: "auto" },
                        question: "Hoe spel je dit? 🚗",
                        answer: "auto",
                        options: ["audo", "auto", "awto", "outo"]
                    },
                    {
                        id: 4,
                        type: "spelling-choice",
                        visual: { emoji: "🌳", word: "boom" },
                        question: "Hoe spel je dit? 🌳",
                        answer: "boom",
                        options: ["bom", "boom", "booom", "boomm"]
                    },
                    {
                        id: 5,
                        type: "spelling-choice",
                        visual: { emoji: "📚", word: "boek" },
                        question: "Hoe spel je dit? 📚",
                        answer: "boek",
                        options: ["boek", "book", "buk", "buuk"]
                    },
                    {
                        id: 6,
                        type: "spelling-error",
                        visual: { word: "scool" },
                        question: "Wat is er fout aan 'scool'?",
                        answer: "school",
                        options: ["schol", "school", "schhool", "skool"]
                    },
                    {
                        id: 7,
                        type: "spelling-error",
                        visual: { word: "kaat" },
                        question: "Dit woord is fout gespeld: 'kaat'. Hoe moet het?",
                        answer: "kat",
                        options: ["kat", "kaat", "katt", "kaatt"]
                    },
                    {
                        id: 8,
                        type: "double-letters",
                        visual: { word: "___oon" },
                        question: "Vul in: ___oon (twee dezelfde letters)",
                        answer: "maan → moo... nee, het is: boon of toon",
                        options: ["boon", "bon", "boen", "baan"]
                    },
                    {
                        id: 9,
                        type: "spelling-choice",
                        visual: { emoji: "🎂", word: "taart" },
                        question: "Hoe spel je dit? 🎂",
                        answer: "taart",
                        options: ["tart", "taart", "taaard", "taard"]
                    },
                    {
                        id: 10,
                        type: "spelling-choice",
                        visual: { emoji: "🏫", word: "school" },
                        question: "Hoe spel je dit? 🏫",
                        answer: "school",
                        options: ["scool", "school", "skool", "schol"]
                    }
                ]
            },
            {
                id: 2,
                name: "Woord Bos",
                icon: "🌲",
                theme: "word-families",
                description: "In Woord Bos leer je woordfamilies kennen!",
                unlockMessage: "Je hebt Woord Bos ontgrendeld!",
                completeMessage: "Super! Je kent woordfamilies! Door naar Zin Berg!",
                challenges: [
                    {
                        id: 1,
                        type: "word-family",
                        visual: { base: "-an" },
                        question: "Welk woord hoort bij de '-an' familie?",
                        answer: "man",
                        options: ["man", "men", "min", "mon"]
                    },
                    {
                        id: 2,
                        type: "word-family",
                        visual: { base: "-oom" },
                        question: "Welk woord hoort bij de '-oom' familie?",
                        answer: "boom",
                        options: ["baam", "beem", "biim", "boom"]
                    },
                    {
                        id: 3,
                        type: "word-family",
                        visual: { base: "-at" },
                        question: "Welke woorden horen bij de '-at' familie?",
                        answer: "kat, mat, rat",
                        options: ["kat, mat, rat", "kas, mas, ras", "kam, mam, ram", "kap, map, rap"]
                    },
                    {
                        id: 4,
                        type: "same-ending",
                        question: "Welk woord eindigt hetzelfde als 'huis'?",
                        answer: "muis",
                        options: ["huil", "muis", "huid", "huur"]
                    },
                    {
                        id: 5,
                        type: "same-ending",
                        question: "Welk woord eindigt hetzelfde als 'beer'?",
                        answer: "peer",
                        options: ["been", "peer", "beek", "beef"]
                    },
                    {
                        id: 6,
                        type: "word-change",
                        visual: { word: "kat" },
                        question: "Verander 1 letter in 'kat' om een nieuw woord te maken:",
                        answer: "rat",
                        options: ["rat", "kar", "kast", "kaas"]
                    },
                    {
                        id: 7,
                        type: "word-change",
                        visual: { word: "boom" },
                        question: "Verander 1 letter in 'boom' om een nieuw woord te maken:",
                        answer: "boot",
                        options: ["boon", "boot", "boos", "boek"]
                    },
                    {
                        id: 8,
                        type: "odd-word-out",
                        visual: { words: ["maan", "baan", "raam", "aan"] },
                        question: "Welk woord hoort NIET bij de '-aan' familie?",
                        answer: "raam",
                        options: ["maan", "baan", "raam", "aan"]
                    },
                    {
                        id: 9,
                        type: "word-family",
                        visual: { base: "-uis" },
                        question: "Maak 2 woorden met '-uis':",
                        answer: "huis, muis",
                        options: ["huis, muis", "huid, muid", "huil, muil", "huur, muur"]
                    },
                    {
                        id: 10,
                        type: "word-chain",
                        question: "kat → rat → ... (verander 1 letter)",
                        answer: "ram",
                        options: ["ras", "ram", "rad", "raf"]
                    }
                ]
            },
            {
                id: 3,
                name: "Zin Berg",
                icon: "🗻",
                theme: "sentences",
                description: "Op Zin Berg leer je zinnen maken!",
                unlockMessage: "Je hebt Zin Berg ontgrendeld!",
                completeMessage: "Fantastisch! Je kunt zinnen maken! Naar Schrijf Kasteel!",
                challenges: [
                    {
                        id: 1,
                        type: "sentence-word-count",
                        visual: { sentence: "De kat slaapt." },
                        question: "Hoeveel woorden heeft deze zin? 'De kat slaapt.'",
                        answer: "3",
                        options: ["2", "3", "4", "5"]
                    },
                    {
                        id: 2,
                        type: "sentence-order",
                        visual: { words: ["eet", "appel", "Piet", "een"] },
                        question: "Zet in de goede volgorde: eet - appel - Piet - een",
                        answer: "Piet eet een appel.",
                        options: ["Piet eet een appel.", "Eet Piet een appel.", "Een appel eet Piet.", "Appel een Piet eet."]
                    },
                    {
                        id: 3,
                        type: "sentence-order",
                        visual: { words: ["De", "speelt", "hond", "buiten"] },
                        question: "Zet in de goede volgorde: De - speelt - hond - buiten",
                        answer: "De hond speelt buiten.",
                        options: ["De hond speelt buiten.", "Speelt de hond buiten.", "Buiten speelt de hond.", "Hond de buiten speelt."]
                    },
                    {
                        id: 4,
                        type: "sentence-complete",
                        visual: { sentence: "Ik ___ naar school." },
                        question: "Vul in: Ik ___ naar school.",
                        answer: "ga",
                        options: ["ga", "gaat", "gaan", "ging"]
                    },
                    {
                        id: 5,
                        type: "sentence-complete",
                        visual: { sentence: "De zon ___." },
                        question: "Vul in: De zon ___.",
                        answer: "schijnt",
                        options: ["regent", "schijnt", "sneeuwt", "waait"]
                    },
                    {
                        id: 6,
                        type: "punctuation",
                        visual: { sentence: "Hoe heet jij" },
                        question: "Welk teken komt aan het eind? 'Hoe heet jij'",
                        answer: "?",
                        options: [".", "?", "!", ","]
                    },
                    {
                        id: 7,
                        type: "punctuation",
                        visual: { sentence: "Ik ben blij" },
                        question: "Welk teken komt aan het eind? 'Ik ben blij'",
                        answer: ".",
                        options: [".", "?", "!", ","]
                    },
                    {
                        id: 8,
                        type: "punctuation",
                        visual: { sentence: "Hoera we hebben gewonnen" },
                        question: "Welk teken past het best? 'Hoera we hebben gewonnen'",
                        answer: "!",
                        options: [".", "?", "!", ","]
                    },
                    {
                        id: 9,
                        type: "sentence-type",
                        visual: { sentence: "Ga je mee?" },
                        question: "Wat voor soort zin is dit? 'Ga je mee?'",
                        answer: "Vraag",
                        options: ["Vraag", "Mededeling", "Uitroep", "Bevel"]
                    },
                    {
                        id: 10,
                        type: "sentence-fix",
                        visual: { sentence: "de jongen rent snel" },
                        question: "Wat moet anders? 'de jongen rent snel'",
                        answer: "De + punt",
                        options: ["Niets", "De + punt", "Alleen De", "Alleen punt"]
                    }
                ]
            },
            {
                id: 4,
                name: "Schrijf Kasteel",
                icon: "🏰",
                theme: "writing-mastery",
                description: "In het Schrijf Kasteel test je al je schrijfkennis!",
                unlockMessage: "Je hebt Schrijf Kasteel ontgrendeld!",
                completeMessage: "Hoera! Je bent een Schrijfkampioen! Je hebt alle eilanden voltooid!",
                challenges: [
                    {
                        id: 1,
                        type: "mixed-writing",
                        question: "Hoeveel letters heeft het alfabet?",
                        answer: "26",
                        options: ["24", "25", "26", "28"]
                    },
                    {
                        id: 2,
                        type: "vowel-recognition",
                        question: "Noem alle klinkers:",
                        answer: "a, e, i, o, u",
                        options: ["a, b, c, d, e", "a, e, i, o, u", "a, e, i, o", "e, i, o, u, y"]
                    },
                    {
                        id: 3,
                        type: "spelling-choice",
                        visual: { emoji: "🦁", word: "leeuw" },
                        question: "Hoe spel je dit dier? 🦁",
                        answer: "leeuw",
                        options: ["leew", "leeuw", "lieu", "leuw"]
                    },
                    {
                        id: 4,
                        type: "rhyme-match",
                        visual: { word: "deur" },
                        question: "Welk woord rijmt op 'deur'?",
                        answer: "kleur",
                        options: ["deun", "kleur", "deur", "leur"]
                    },
                    {
                        id: 5,
                        type: "capital-usage",
                        question: "Welke zin is goed geschreven?",
                        answer: "Marie woont in Utrecht.",
                        options: ["marie woont in utrecht.", "Marie woont in Utrecht.", "Marie Woont In Utrecht.", "MARIE WOONT IN UTRECHT."]
                    },
                    {
                        id: 6,
                        type: "sentence-order",
                        visual: { words: ["rent", "De", "snel", "hond"] },
                        question: "Maak een goede zin: rent - De - snel - hond",
                        answer: "De hond rent snel.",
                        options: ["De hond rent snel.", "Rent de hond snel.", "Snel rent de hond.", "Hond de rent snel."]
                    },
                    {
                        id: 7,
                        type: "word-build",
                        visual: { letters: ["v", "r", "i", "e", "n", "d"] },
                        question: "Welk woord kun je maken? v-r-i-e-n-d",
                        answer: "vriend",
                        options: ["vriend", "vreind", "vriind", "vrined"]
                    },
                    {
                        id: 8,
                        type: "punctuation",
                        visual: { sentence: "Wat een mooie dag" },
                        question: "Welk teken past? 'Wat een mooie dag'",
                        answer: "!",
                        options: [".", "?", "!", ","]
                    },
                    {
                        id: 9,
                        type: "missing-letter",
                        visual: { word: "vl_nder" },
                        question: "Welke letter mist er? vl_nder",
                        answer: "i",
                        options: ["a", "e", "i", "o"]
                    },
                    {
                        id: 10,
                        type: "final-celebration",
                        visual: { emoji: "🎉🏆" },
                        question: "Je bent een Schrijfkampioen! Wat heb je allemaal geleerd?",
                        answer: "Letters, klinkers, woorden en zinnen!",
                        options: ["Alleen letters", "Alleen woorden", "Letters, klinkers, woorden en zinnen!", "Niets"]
                    }
                ]
            }
        ]
    }
];
