// Objekte erstellen

// Sonne
var sonne = new Orb("Sonne");

// Planet
var planet = new Orb("Planet");

//...


// Urknall
sonne.addChild(planet);


// zeichne Szenengraph, gebe Wurzelobjekt als Start
var sonnensystem = new Scenegraph(sonne);

sonnensystem.draw();