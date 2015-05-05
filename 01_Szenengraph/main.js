// Objekte erstellen

// Sonne
var sonne = new Orb("Sonne", 0, 1392000, 0, 7.25);

// Planet
var earth = new Orb("Erde", 150, 12800, 0, 23.45);
var mars  = new Orb("Mars", 230, 6800, 1.85, 25.19);
var moon  = new Orb("Mond", 0.384, 3476, 5.145, 1.54);

//...


// Urknall
sonne.addChild(earth);
sonne.addChild(mars);
earth.addChild(moon);


// zeichne Szenengraph, gebe Wurzelobjekt als Start
var sonnensystem = new Scenegraph(sonne);

sonnensystem.draw();