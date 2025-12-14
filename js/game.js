/**
 * Aria's Eiland Avontuur - Main Game Logic
 * Handles game state, UI interactions, and challenge flow
 * Supports multiple islands with different difficulty levels
 */

class AriaGame {
    constructor() {
        // Game state
        this.currentIsland = null;
        this.currentVillage = null;
        this.currentChallenge = null;
        this.progress = this.loadProgress();

        // DOM elements
        this.screens = {
            start: document.getElementById('start-screen'),
            islands: document.getElementById('islands-screen'),
            map: document.getElementById('map-screen'),
            village: document.getElementById('village-screen'),
            challenge: document.getElementById('challenge-screen')
        };

        this.modals = {
            success: document.getElementById('success-modal'),
            villageComplete: document.getElementById('village-complete-modal'),
            islandComplete: document.getElementById('island-complete-modal'),
            gameComplete: document.getElementById('game-complete-modal')
        };

        // Initialize
        this.bindEvents();
        this.updateUI();
    }

    // ==========================================
    // PROGRESS MANAGEMENT
    // ==========================================

    loadProgress() {
        const saved = localStorage.getItem('ariaProgress');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Validate that the progress structure matches current ISLANDS structure
            // If not (e.g., old version with VILLAGES), reset progress
            if (parsed.islands && parsed.islands.length === ISLANDS.length) {
                return parsed;
            }
        }
        // Default progress - all challenges locked except first village of first island
        return this.createDefaultProgress();
    }

    createDefaultProgress() {
        return {
            islands: ISLANDS.map((island, islandIndex) => ({
                id: island.id,
                unlocked: islandIndex === 0,
                completed: false,
                villages: island.villages.map((village, villageIndex) => {
                    const villageUnlocked = islandIndex === 0 && villageIndex === 0;
                    return {
                        id: village.id,
                        unlocked: villageUnlocked,
                        completed: false,
                        challenges: village.challenges.map((c, challengeIndex) => ({
                            id: c.id,
                            completed: false,
                            // First challenge is unlocked when village is unlocked
                            unlocked: villageUnlocked && challengeIndex === 0
                        }))
                    };
                })
            })),
            totalStars: 0
        };
    }

    saveProgress() {
        localStorage.setItem('ariaProgress', JSON.stringify(this.progress));
    }

    resetProgress() {
        localStorage.removeItem('ariaProgress');
        this.progress = this.createDefaultProgress();
        this.currentIsland = null;
        this.currentVillage = null;
        this.updateUI();
    }

    getIslandProgress(islandId) {
        return this.progress.islands[islandId];
    }

    getVillageProgress(islandId, villageId) {
        return this.progress.islands[islandId].villages[villageId];
    }

    getIslandStars(islandId) {
        const island = this.getIslandProgress(islandId);
        return island.villages.reduce((total, v) => {
            return total + v.challenges.filter(c => c.completed).length;
        }, 0);
    }

    getVillageStars(islandId, villageId) {
        const village = this.getVillageProgress(islandId, villageId);
        return village.challenges.filter(c => c.completed).length;
    }

    getTotalStars() {
        return this.progress.islands.reduce((total, island) => {
            return total + island.villages.reduce((vTotal, v) => {
                return vTotal + v.challenges.filter(c => c.completed).length;
            }, 0);
        }, 0);
    }

    // ==========================================
    // EVENT BINDING
    // ==========================================

    bindEvents() {
        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            this.showScreen('islands');
            this.playSound('start');
        });

        // Island cards
        document.querySelectorAll('.island-card').forEach(card => {
            card.addEventListener('click', () => {
                const islandId = parseInt(card.dataset.island);
                if (!card.classList.contains('locked')) {
                    this.openIsland(islandId);
                }
            });
        });

        // Back to islands button
        document.getElementById('back-to-islands').addEventListener('click', () => {
            this.showScreen('islands');
        });

        // Village markers
        document.querySelectorAll('.village-marker').forEach(marker => {
            marker.addEventListener('click', () => {
                const villageId = parseInt(marker.dataset.village);
                if (!marker.classList.contains('locked')) {
                    this.openVillage(villageId);
                }
            });
        });

        // Back to map button
        document.getElementById('back-to-map').addEventListener('click', () => {
            this.showScreen('map');
        });

        // Close challenge button
        document.getElementById('close-challenge').addEventListener('click', () => {
            if (this.currentVillage) {
                const villageId = this.currentIsland.villages.findIndex(v => v.id === this.currentVillage.id);
                this.openVillage(villageId);
            } else {
                this.showScreen('village');
            }
        });

        // Next challenge button
        document.getElementById('next-challenge-btn').addEventListener('click', () => {
            this.hideModal('success');
            this.goToNextChallenge();
        });

        // Continue after village complete
        document.getElementById('continue-btn').addEventListener('click', () => {
            this.hideModal('villageComplete');
            this.showScreen('map');
        });

        // Continue after island complete
        document.getElementById('island-continue-btn').addEventListener('click', () => {
            this.hideModal('islandComplete');
            this.showScreen('islands');
        });

        // Play again button
        document.getElementById('play-again-btn').addEventListener('click', () => {
            this.hideModal('gameComplete');
            this.resetProgress();
            this.showScreen('start');
        });
    }

    // ==========================================
    // SCREEN MANAGEMENT
    // ==========================================

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            if (screen) screen.classList.remove('active');
        });
        if (this.screens[screenName]) {
            this.screens[screenName].classList.add('active');
        }

        if (screenName === 'islands') {
            this.updateIslandsUI();
        } else if (screenName === 'map') {
            this.updateMapUI();
        }
    }

    showModal(modalName) {
        if (this.modals[modalName]) {
            this.modals[modalName].classList.remove('hidden');
        }
    }

    hideModal(modalName) {
        if (this.modals[modalName]) {
            this.modals[modalName].classList.add('hidden');
        }
    }

    // ==========================================
    // UI UPDATES
    // ==========================================

    updateUI() {
        this.updateIslandsUI();
        this.updateTotalStarsDisplay();
    }

    updateTotalStarsDisplay() {
        const totalStars = this.getTotalStars();
        document.querySelectorAll('.total-stars-count').forEach(el => {
            el.textContent = totalStars;
        });
        // Update max stars (150 total for 3 islands × 5 villages × 10 challenges)
        document.querySelectorAll('.total-stars-max').forEach(el => {
            el.textContent = getTotalStarsPossible();
        });
    }

    updateIslandsUI() {
        const totalStars = this.getTotalStars();
        this.updateTotalStarsDisplay();

        document.querySelectorAll('.island-card').forEach(card => {
            const islandId = parseInt(card.dataset.island);
            const island = ISLANDS[islandId];
            const islandProgress = this.getIslandProgress(islandId);
            const stars = this.getIslandStars(islandId);
            const maxStars = island.villages.length * 10;

            // Update stars display
            const starsEl = card.querySelector('.island-stars-earned');
            if (starsEl) starsEl.textContent = stars;
            
            const maxStarsEl = card.querySelector('.island-stars-max');
            if (maxStarsEl) maxStarsEl.textContent = maxStars;

            // Check if island should be unlocked based on stars
            const shouldUnlock = totalStars >= island.unlockStars;
            if (shouldUnlock && !islandProgress.unlocked) {
                islandProgress.unlocked = true;
                // Also unlock the first village and its first challenge
                islandProgress.villages[0].unlocked = true;
                islandProgress.villages[0].challenges[0].unlocked = true;
                this.saveProgress();
            }

            // Update locked/unlocked status
            if (islandProgress.unlocked) {
                card.classList.remove('locked');
                const statusEl = card.querySelector('.island-status');
                if (statusEl) statusEl.textContent = '';
            } else {
                card.classList.add('locked');
                const statusEl = card.querySelector('.island-status');
                if (statusEl) statusEl.textContent = `🔒 ${island.unlockStars} ⭐ nodig`;
            }

            // Update completed status
            if (islandProgress.completed) {
                card.classList.add('completed');
            } else {
                card.classList.remove('completed');
            }
        });
    }

    updateMapUI() {
        if (!this.currentIsland) return;

        const islandId = this.currentIsland.id;
        this.updateTotalStarsDisplay();

        // Update map header
        document.getElementById('current-island-name').textContent = this.currentIsland.name;
        document.getElementById('current-island-icon').textContent = this.currentIsland.icon;

        document.querySelectorAll('.village-marker').forEach(marker => {
            const villageId = parseInt(marker.dataset.village);
            
            // Check if this village exists in current island
            if (villageId >= this.currentIsland.villages.length) {
                marker.style.display = 'none';
                return;
            }
            
            marker.style.display = 'flex';
            
            const village = this.currentIsland.villages[villageId];
            const villageProgress = this.getVillageProgress(islandId, villageId);
            const stars = this.getVillageStars(islandId, villageId);

            // Update village info
            marker.querySelector('.village-icon').textContent = village.icon;
            marker.querySelector('.village-label').textContent = village.name;
            marker.querySelector('.stars-earned').textContent = stars;

            // Update locked/unlocked status
            if (villageProgress.unlocked) {
                marker.classList.remove('locked');
                marker.querySelector('.village-status').textContent = '';
            } else {
                marker.classList.add('locked');
                marker.querySelector('.village-status').textContent = '🔒';
            }

            // Update completed status
            if (villageProgress.completed) {
                marker.classList.add('completed');
            } else {
                marker.classList.remove('completed');
            }
        });
    }

    // ==========================================
    // ISLAND SCREEN
    // ==========================================

    openIsland(islandId) {
        this.currentIsland = ISLANDS[islandId];
        this.showScreen('map');
        this.playSound('open');
    }

    // ==========================================
    // VILLAGE SCREEN
    // ==========================================

    openVillage(villageId) {
        if (!this.currentIsland) return;

        this.currentVillage = this.currentIsland.villages[villageId];
        const islandId = this.currentIsland.id;
        const villageProgress = this.getVillageProgress(islandId, villageId);

        // Update village header
        document.getElementById('village-icon').textContent = this.currentVillage.icon;
        document.getElementById('village-name').textContent = this.currentVillage.name;
        document.getElementById('village-stars').textContent = this.getVillageStars(islandId, villageId);
        document.getElementById('village-description').textContent = this.currentVillage.description;

        // Generate challenge cards
        const grid = document.getElementById('challenges-grid');
        grid.innerHTML = '';

        this.currentVillage.challenges.forEach((challenge, index) => {
            const challengeProgress = villageProgress.challenges[index];
            const card = document.createElement('div');
            card.className = 'challenge-card';

            if (challengeProgress.completed) {
                card.classList.add('completed');
            } else if (!challengeProgress.unlocked) {
                card.classList.add('locked');
            }

            card.innerHTML = `<span class="challenge-number">${challenge.id}</span>`;

            if (!card.classList.contains('locked')) {
                card.addEventListener('click', () => {
                    this.openChallenge(index);
                });
            }

            grid.appendChild(card);
        });

        this.showScreen('village');
    }

    // ==========================================
    // CHALLENGE SCREEN
    // ==========================================

    openChallenge(challengeIndex) {
        this.currentChallenge = {
            index: challengeIndex,
            data: this.currentVillage.challenges[challengeIndex]
        };

        const challenge = this.currentChallenge.data;

        // Update header
        document.getElementById('challenge-number').textContent = `Opdracht ${challenge.id}`;

        // Generate visual (if any)
        const visualContainer = document.getElementById('challenge-visual');
        visualContainer.innerHTML = this.generateVisual(challenge);

        // Set question
        document.getElementById('challenge-question').textContent = challenge.question;

        // Generate options
        const optionsContainer = document.getElementById('challenge-options');
        optionsContainer.innerHTML = '';

        // Shuffle options for variety
        const shuffledOptions = this.shuffleArray([...challenge.options]);

        shuffledOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => this.checkAnswer(option, btn));
            optionsContainer.appendChild(btn);
        });

        // Hide feedback
        document.getElementById('challenge-feedback').classList.add('hidden');

        this.showScreen('challenge');
        this.playSound('open');
    }

    generateVisual(challenge) {
        if (!challenge.visual) return '';

        const v = challenge.visual;

        if (challenge.type === 'visual-addition') {
            const leftGroup = v.emoji.repeat(v.left);
            const rightGroup = v.emoji.repeat(v.right);
            return `
                <span class="visual-group">${leftGroup}</span>
                <span style="font-size: 2rem; margin: 0 10px;">+</span>
                <span class="visual-group">${rightGroup}</span>
            `;
        }

        if (challenge.type === 'visual-subtraction') {
            const totalEmojis = v.emoji.repeat(v.total);
            return `<span class="visual-group">${totalEmojis}</span>`;
        }

        if (challenge.type === 'counting' || challenge.type === 'word-problem') {
            return `<span class="visual-group">${v.emoji.repeat(v.count)}</span>`;
        }

        if (challenge.type === 'visual-comparison') {
            const leftGroup = v.emoji.repeat(v.left);
            const rightGroup = v.emoji.repeat(v.right);
            return `
                <div style="display: flex; gap: 40px; align-items: center;">
                    <div style="text-align: center;">
                        <span class="visual-group">${leftGroup}</span>
                        <div style="font-size: 1rem; margin-top: 5px;">Links</div>
                    </div>
                    <span style="font-size: 2rem;">of</span>
                    <div style="text-align: center;">
                        <span class="visual-group">${rightGroup}</span>
                        <div style="font-size: 1rem; margin-top: 5px;">Rechts</div>
                    </div>
                </div>
            `;
        }

        return '';
    }

    checkAnswer(selectedAnswer, buttonElement) {
        const challenge = this.currentChallenge.data;
        const isCorrect = selectedAnswer === challenge.answer;

        // Disable all buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
        });

        if (isCorrect) {
            buttonElement.classList.add('correct');
            this.playSound('correct');

            // Mark challenge as completed
            this.completeChallenge();

            // Show success feedback briefly, then modal
            setTimeout(() => {
                this.showSuccessModal();
            }, 800);
        } else {
            buttonElement.classList.add('incorrect');
            this.playSound('incorrect');

            // Show feedback
            this.showFeedback(false);

            // Re-enable buttons after delay
            setTimeout(() => {
                buttonElement.classList.remove('incorrect');
                document.querySelectorAll('.option-btn').forEach(btn => {
                    btn.disabled = false;
                });
                document.getElementById('challenge-feedback').classList.add('hidden');
            }, 1500);
        }
    }

    showFeedback(isCorrect) {
        const feedbackEl = document.getElementById('challenge-feedback');
        const contentEl = feedbackEl.querySelector('.feedback-content');

        if (isCorrect) {
            const message = this.getRandomItem(FEEDBACK.correct);
            contentEl.innerHTML = `<span class="feedback-icon">✅</span><span class="feedback-text">${message}</span>`;
            contentEl.className = 'feedback-content success';
        } else {
            const message = this.getRandomItem(FEEDBACK.incorrect);
            contentEl.innerHTML = `<span class="feedback-icon">💭</span><span class="feedback-text">${message}</span>`;
            contentEl.className = 'feedback-content error';
        }

        feedbackEl.classList.remove('hidden');
    }

    showSuccessModal() {
        const message = this.getRandomItem(FEEDBACK.correct);
        document.getElementById('success-message').textContent = message;
        this.showModal('success');
    }

    completeChallenge() {
        const islandId = this.currentIsland.id;
        const villageId = this.currentVillage.id;
        const challengeIndex = this.currentChallenge.index;
        const villageProgress = this.getVillageProgress(islandId, villageId);
        const islandProgress = this.getIslandProgress(islandId);

        // Mark current challenge as completed
        villageProgress.challenges[challengeIndex].completed = true;

        // Unlock next challenge if exists
        if (challengeIndex + 1 < villageProgress.challenges.length) {
            villageProgress.challenges[challengeIndex + 1].unlocked = true;
        }

        // Check if village is complete
        const villageComplete = villageProgress.challenges.every(c => c.completed);
        if (villageComplete) {
            villageProgress.completed = true;

            // Unlock next village if exists
            if (villageId + 1 < islandProgress.villages.length) {
                islandProgress.villages[villageId + 1].unlocked = true;
                // Also unlock the first challenge of the next village
                islandProgress.villages[villageId + 1].challenges[0].unlocked = true;
            }
        }

        // Check if island is complete
        const islandComplete = islandProgress.villages.every(v => v.completed);
        if (islandComplete) {
            islandProgress.completed = true;
        }

        this.progress.totalStars = this.getTotalStars();
        this.saveProgress();
    }

    goToNextChallenge() {
        const islandId = this.currentIsland.id;
        const villageId = this.currentVillage.id;
        const villageProgress = this.getVillageProgress(islandId, villageId);
        const islandProgress = this.getIslandProgress(islandId);
        const currentIndex = this.currentChallenge.index;

        // Check if village is complete
        const villageComplete = villageProgress.challenges.every(c => c.completed);

        if (villageComplete) {
            // Check if island is complete
            const islandComplete = islandProgress.villages.every(v => v.completed);

            if (islandComplete) {
                // Check if game is complete
                const gameComplete = this.progress.islands.every(i => i.completed);

                if (gameComplete) {
                    document.getElementById('final-star-count').textContent = this.getTotalStars();
                    this.showModal('gameComplete');
                    this.playSound('gameComplete');
                } else {
                    document.getElementById('island-complete-message').textContent = this.currentIsland.villages[villageId].completeMessage;
                    document.getElementById('island-complete-stars').textContent = this.getIslandStars(islandId);
                    this.showModal('islandComplete');
                    this.playSound('villageComplete');
                }
            } else {
                document.getElementById('complete-message').textContent = this.currentVillage.completeMessage;
                this.showModal('villageComplete');
                this.playSound('villageComplete');
            }
        } else {
            // Go to next uncompleted challenge
            const nextIndex = villageProgress.challenges.findIndex((c, i) => i > currentIndex && !c.completed);

            if (nextIndex !== -1) {
                this.openChallenge(nextIndex);
            } else {
                // Find first uncompleted challenge
                const firstUncompleted = villageProgress.challenges.findIndex(c => !c.completed);
                if (firstUncompleted !== -1) {
                    this.openChallenge(firstUncompleted);
                } else {
                    this.showScreen('village');
                    this.openVillage(villageId);
                }
            }
        }
    }

    // ==========================================
    // UTILITIES
    // ==========================================

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    playSound(type) {
        // Simple audio feedback using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            switch (type) {
                case 'correct':
                    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
                    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
                    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.4);
                    break;

                case 'incorrect':
                    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.3);
                    break;

                case 'start':
                case 'open':
                    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.1);
                    break;

                case 'villageComplete':
                case 'gameComplete':
                    // Celebratory fanfare
                    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
                    notes.forEach((freq, i) => {
                        const osc = audioContext.createOscillator();
                        const gain = audioContext.createGain();
                        osc.connect(gain);
                        gain.connect(audioContext.destination);
                        osc.frequency.setValueAtTime(freq, audioContext.currentTime + i * 0.15);
                        gain.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.15);
                        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.15 + 0.3);
                        osc.start(audioContext.currentTime + i * 0.15);
                        osc.stop(audioContext.currentTime + i * 0.15 + 0.3);
                    });
                    return;
            }
        } catch (e) {
            // Audio not supported, continue silently
            console.log('Audio not available');
        }
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.game = new AriaGame();
});
