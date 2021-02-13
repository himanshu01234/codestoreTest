class Dice {
	constructor() {
		this.topFaceValue = Math.floor(Math.random() * 6) + 1;
	}
	rollDice() {
		return this.topFaceValue;
	}
}
class Driver {
	constructor() {
		this.Dice = new Dice();
		this.diceList = [];
	}
	rollDice() {
		for (let i = 0; i < 5; i++) {
			this.diceList.push(this.Dice.rollDice());
		}
	}
	sumDiceValue() {
		this.sum = 0;
		for (let i = 0; i < 5; i++) {
			//   console.log(this.diceList[i])
			this.sum = this.sum + this.diceList[i];
		}
		return this.sum;
	}
}

const driver = new Driver();
driver.rollDice();

console.log(driver.sumDiceValue());
