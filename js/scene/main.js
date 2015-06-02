function initSceneGraph(canvas, projectionMatrix, modelViewMatrix) {

    // Objekte erstellen

    // Sonne
    var sonne = new Orb("Sonne", 1392000, 7.25);

    //TODO: move it into the scene graph
    var cam = new Camera(projectionMatrix, modelViewMatrix);
    var keyboard = new KeyboardObserver(cam);
    cam.perspective(180, canvas.width / canvas.height, 0.49, 100.0);
    keyboard.registerEvents();

    // Planets
    var orbit = new Orbit(150,0);
    var earth = new Orb("Erde", 12800, 23.45);
    orbit.addChild(earth);
    sonne.addChild(orbit);

    //orbit = new Orbit(230, 1.85);
    //var mars  = new Orb("Mars", 6800, 25.19);
    //orbit.addChild(mars);
    //sonne.addChild(orbit);
    //
    //orbit = new Orbit(0.384, 5.145);
    //var moon  = new Orb("Mond", 3476, 1.54);
    //orbit.addChild(moon);
    //earth.addChild(orbit);


    // zeichne Szenengraph, gebe Wurzelobjekt als Start
    var sonnensystem = new Scenegraph(sonne);

    return sonnensystem;
}

