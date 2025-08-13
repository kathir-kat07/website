function scb() {
    let value = document.querySelector(".subscribe");
    if (value.innerText === "subscribe") {
        value.innerText = "subscribed";

    }
    else {
        value.innerText = "subscribe";
    }

}