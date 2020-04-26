const goPlay = confirm('Do you want to play a game?');
const settings = {
    randoms: {
        min: 0,
        max: 5
    },
    prizes: {
        max: 100,
        avarage: 50,
        min: 30
    },
    currentPrizes: {
        max: 100,
        avarage: 50,
        min: 30
    },
    state: 1,
    totalPrize: 0

}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const finalMessage = (prize, success) => {
    const msg_lost = `Thank you for your participation. Your prize is: ${prize} $`;
    const msg_win = `Congratulation, you won! Your prize is: ${prize} $. Do you want to continue?`;
    const msg = success ? msg_win : msg_lost;

    let goNext;
    success ? goNext = confirm(msg) : alert(msg);


    settings.totalPrize = prize;

    if (goNext) {
        ++settings.state;

        settings.currentPrizes.max *= 2;
        settings.currentPrizes.min *= 2;
        settings.currentPrizes.avarage *= 2;

        start(settings);
    }
}

const start = (settings) => {

    const maxPrize = settings.currentPrizes.max;
    const avaragePrize = settings.currentPrizes.avarage;
    const minPrize = settings.currentPrizes.min;

    let prize = settings.totalPrize;
    let counter = 3;
    let success = false;

    while (counter > 0) {
        const randomNumber = getRandomNumber(settings.randoms.min, settings.randoms.max * settings.state);
        console.log(randomNumber);

        const playerNumber = prompt(`
        Choose a roulette pocket number from ${settings.randoms.min} to ${settings.randoms.max * settings.state}
        Attempts left: ${counter}
        Total prize: ${prize} 
        Possible prize on current attempt: ${maxPrize}$`);

        if (+playerNumber === randomNumber) {
            switch (counter) {
                case 3:
                    prize += maxPrize;
                    break;
                case 2:
                    prize += avaragePrize;
                    break
                case 1:
                    prize += minPrize
                    break;
                default:
                    prize += 0;
            }
        }
        counter--;
    }

    if (prize > settings.totalPrize) {
        success = true;
    }
    finalMessage(prize, success);
}

if (goPlay) {
    start(settings);
} else {
    alert('You did not become a billionaire, but can.')
}