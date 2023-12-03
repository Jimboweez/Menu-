const counterButtons = document.querySelectorAll(".counter-button");
const counters = document.querySelectorAll(".counter");

counterButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        const currentCount = parseInt(counters[index].textContent);

        if (e.target.classList.contains("increment")) {
            counters[index].textContent = currentCount + 1;
        } else if (e.target.classList.contains("decrement") && currentCount > 0) {
            counters[index].textContent = currentCount - 1;
        }
    });
}); 