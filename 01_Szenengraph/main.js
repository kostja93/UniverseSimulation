// Objekte erstellen

// Sonne
var sonne = new Orb("Sonne", 0, 1392000, 0, 7.25);

// Planet
var orbit_earth = new Orbit(150,0);
var earth = new Orb("Erde", 12800, 23.45);
orbit_earth.addChild(earth);
sonne.addChild(orbit_earth);

var orbit_mars = new Orbit(230, 1.85);
var mars  = new Orb("Mars", 6800, 25.19);
orbit_mars.addChild(mars);
sonne.addChild(orbit_mars);

orbitMoon = new Orbit(0.384, 5.145);
var moon  = new Orb("Mond", 3476, 1.54);
orbitMoon.addChild(moon);
earth.addChild(orbitMoon);


// zeichne Szenengraph, gebe Wurzelobjekt als Start
var sonnensystem = new Scenegraph(sonne);

sonnensystem.draw();