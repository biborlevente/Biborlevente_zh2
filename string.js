function randomSelection(strings) {
    if (strings.length < 5 || strings.length > 7) {
        return "A stringek számának 5, 6 vagy 7 kell lennie.";
    }

    var selectedStrings = [];
    while (selectedStrings.length < 3) {
        var randomIndex = Math.floor(Math.random() * strings.length);
        var selectedString = strings[randomIndex];

        // Ellenőrizzük, hogy a kiválasztott string még nem szerepel a választottak között
        if (!selectedStrings.includes(selectedString)) {
            selectedStrings.push(selectedString);
        }
    }

    return selectedStrings;
}

// Példa használat
var inputStrings = ["Első", "Második", "Harmadik", "Negyedik", "Ötödik", "Hatodik", "Hetedik"];
var result = randomSelection(inputStrings);

console.log("Véletlenszerűen kiválasztott stringek:", result);
