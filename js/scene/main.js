function initSceneGraph(modelViewMatrix) {

    // Objekte erstellen
    var cam = new Camera(modelViewMatrix);
    cam.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100000.0);

    var solarsystem = new Node();
    // Sonne
    var sunOrbit = new Orbit(0, 0, 0);
    var sonne = new Orb("Sonne", 13920, 7.25, 25.38);
    sunOrbit.addChild(sonne);
    cam.addChild(sunOrbit);
    // Planets
    var earthOrbit = new Orbit(150, 0, 1);
    var earth = new Orb("Erde", 12800, 23.45, 1.0);
    earthOrbit.addChild(earth);
    sunOrbit.addChild(earthOrbit);

    var marsOrbit = new Orbit(230, 1.85, 1);
    var mars  = new Orb("Mars", 6800, 25.19, 1.03);
    marsOrbit.addChild(mars);
    sunOrbit.addChild(marsOrbit);

    var moonOrbit = new Orbit(50, 5.145, 0);
    var moon  = new Orb("Mond", 3476, 1.54, 27.32);
    moonOrbit.addChild(moon);
    earthOrbit.addChild(moonOrbit);

    // zeichne Szenengraph, gebe Wurzelobjekt als Start
    var keyboard = new KeyboardObserver(cam);
    keyboard.registerEvents();
    return new Scenegraph(cam);
}

