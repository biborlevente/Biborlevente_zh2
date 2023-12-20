function calculateAreaWithHeightAndSide(height, side) {
    var result;
    result = height * side;
    return result;
}
function calculateAreaWithAngleAndSides(angle, side1, side2) {
    var radians = (angle * Math.PI) / 180; // Convert angle to radians
    var result2;
    result2 = side1 * side2 * Math.sin(radians);
    return result2;
}

/*Ezzel a programmal kétféleképpen ki lehet számolni egy paralelogramma területét. vagy a magassággal és az oldalak megadásával
vagy pedig a szögek és két oldal megadásával*/
