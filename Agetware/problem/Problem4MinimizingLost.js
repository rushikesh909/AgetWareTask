function minimizeLoss(prices) {
    let priceInfo = prices.map((price, index) => ({ year: index + 1, price }));
    priceInfo.sort((a, b) => b.price - a.price);
    let minLoss = Infinity;
    let buyYear = -1;
    for (let i = 0; i < priceInfo.length - 1; i++) {
        for (let j = i + 1; j < priceInfo.length; j++) {
            let loss = priceInfo[i].price - priceInfo[j].price;
            if (loss > 0 && loss < minLoss && priceInfo[i].year < priceInfo[j].year) {
                minLoss = loss;
                buyYear = priceInfo[j].year;
                sellYear = priceInfo[i].year;
            }
        }
    }
    return { buyYear, sellYear, minLoss };
}
const prices = [20, 15, 7, 2, 13];
const result = minimizeLoss(prices);
console.log(`Buy in year ${result.buyYear}, sell in year ${result.sellYear}, with a loss of ${result.minLoss}.`);
