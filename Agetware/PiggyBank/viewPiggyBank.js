window.addEventListener("DOMContentLoaded", () => {
    const piggyBanksList = document.getElementById("piggyBanksList");

    const piggyBanks = JSON.parse(localStorage.getItem("piggyBanks")) || [];

    if (piggyBanks.length === 0) {
        piggyBanksList.innerHTML = "<p>No piggy banks found. Create one to get started!</p>";
        return;
    }

    piggyBanks.forEach((bank, index) => {
        const bankDiv = document.createElement("div");
        bankDiv.classList.add("piggy-bank");
        bankDiv.innerHTML = `
            <h3>${bank.name}</h3>
            <p>Amount: $<span class="bank-amount">${bank.amount.toFixed(2)}</span></p>
            <button onclick="addTransaction(${index})">Add Transaction</button>
            <button class="break-btn" onclick="breakPiggyBank(${index})">Break Piggy Bank</button>
        `;
        piggyBanksList.appendChild(bankDiv);
    });
});

/**
 * Add transaction to a piggy bank
 */
function addTransaction(index) {
    const transactionAmount = parseFloat(prompt("Enter transaction amount (use negative values for expenses):"));

    if (isNaN(transactionAmount)) {
        alert("Invalid amount!");
        return;
    }

    const piggyBanks = JSON.parse(localStorage.getItem("piggyBanks")) || [];
    piggyBanks[index].amount += transactionAmount;

    localStorage.setItem("piggyBanks", JSON.stringify(piggyBanks));
    alert("Transaction successful!");
    location.reload();
}

/**
 * Break a piggy bank
 */
function breakPiggyBank(index) {
    const confirmation = confirm("Are you sure you want to break this piggy bank? All saved money will be withdrawn!");

    if (!confirmation) return;

    const piggyBanks = JSON.parse(localStorage.getItem("piggyBanks")) || [];
    const brokenBank = piggyBanks.splice(index, 1);

    localStorage.setItem("piggyBanks", JSON.stringify(piggyBanks));
    alert(`You have withdrawn $${brokenBank[0].amount.toFixed(2)}!`);
    location.reload();
}
