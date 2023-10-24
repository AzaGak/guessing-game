class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.aver = Math.round((this.max + this.min) / 2);
        return this.aver;
    }

    lower() {
        this.max = this.aver;
    }

    greater() {
        this.min = this.aver;
    }
}

module.exports = GuessingGame;
