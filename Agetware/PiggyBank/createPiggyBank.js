document.getElementById("createPiggyBankForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const bankName = document.getElementById("bankName").value;
    const initialAmount = document.getElementById("initialAmount").value;

    const piggyBanks = JSON.parse(localStorage.getItem("piggyBanks")) || [];
    piggyBanks.push({ name: bankName, amount: parseFloat(initialAmount) });

    localStorage.setItem("piggyBanks", JSON.stringify(piggyBanks));

    const messageDiv = document.createElement("div");
    messageDiv.textContent = "Your piggy bank account is created!";
    messageDiv.style.color = "green";
    messageDiv.style.marginTop = "1em";

    const formContainer = document.getElementById("createPiggyBankForm").parentNode;
    formContainer.appendChild(messageDiv);

    document.getElementById("createPiggyBankForm").reset();

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
});
