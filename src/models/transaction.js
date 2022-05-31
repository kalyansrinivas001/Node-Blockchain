class Transaction {
    constructor(from, to, sensorVal) {
        if (!from || !to || isNaN(sensorVal))
            throw new Error('Invalid data');

        this.from = from;
        this.to = to;
        this.sensorVal = sensorVal;
        this.timestamp = Math.floor(+new Date() / 1000);
    }
}

module.exports = Transaction;