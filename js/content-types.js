/**
 * Aria's Eiland Avontuur - Content Types
 * Defines different learning categories: Math, Writing, Nature, Reading
 * Dutch language throughout
 */

const CONTENT_TYPES = [
    {
        id: 'math',
        name: 'Rekenen',
        icon: '🔢',
        description: 'Leer optellen, aftrekken en meer!',
        color: '#74C0FC',
        gradient: 'linear-gradient(135deg, #74C0FC, #4dabf7)',
        unlocked: true,
        dataKey: 'MATH_ISLANDS'
    },
    {
        id: 'writing',
        name: 'Schrijven',
        icon: '✏️',
        description: 'Leer letters en woorden schrijven!',
        color: '#FF6B9D',
        gradient: 'linear-gradient(135deg, #FF6B9D, #C44569)',
        unlocked: true,
        dataKey: 'WRITING_ISLANDS'
    },
    {
        id: 'nature',
        name: 'Natuur',
        icon: '🌿',
        description: 'Ontdek dieren en planten!',
        color: '#00B894',
        gradient: 'linear-gradient(135deg, #00B894, #00a085)',
        unlocked: false, // Coming soon
        dataKey: 'NATURE_ISLANDS'
    },
    {
        id: 'reading',
        name: 'Lezen',
        icon: '📚',
        description: 'Leer woorden en zinnen lezen!',
        color: '#6C5CE7',
        gradient: 'linear-gradient(135deg, #6C5CE7, #5541d7)',
        unlocked: false, // Coming soon
        dataKey: 'READING_ISLANDS'
    }
];

// Rename existing ISLANDS to MATH_ISLANDS for clarity
// The actual MATH_ISLANDS will be set from the existing ISLANDS in game.js
