// Objekte erstellen

// Sonne
var sonne = new Orb("Sonne", 0, 1392000, 0, 7.25);

// Planet
var translation = new Transform(150,0);
var rotation    = new Transform(0,0);
var earth = new Orb("Erde", 12800, 23.45);
translation.addChild(earth);
rotation.addChild(translation);
sonne.addChild(rotation);

translation = new Transform(230,0);
rotation    = new Transform(0,1.85);
var mars  = new Orb("Mars", 6800, 25.19);
translation.addChild(mars);
rotation.addChild(translation);
sonne.addChild(rotation);

translation = new Transform(0.384, 0);
rotation    = new Transform(0, 5.145);
var moon  = new Orb("Mond", 3476, 1.54);
translation.addChild(moon);
rotation.addChild(translation);
earth.addChild(rotation);


// zeichne Szenengraph, gebe Wurzelobjekt als Start
var sonnensystem = new Scenegraph(sonne);

sonnensystem.draw();