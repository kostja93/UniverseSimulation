function initSceneGraph(canvas, projectionMatrix, modelViewMatrix) {

    // Objekte erstellen

    var solarsystem = new Node();
    // Sonne
    var sonne = new Orb("Sonne", 1392000, 7.25);

    solarsystem.addChild(sonne);
    var cam = new Camera(projectionMatrix, modelViewMatrix);
    solarsystem.addChild(cam);
    var keyboard = new KeyboardObserver(cam);
    cam.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100000.0);
    keyboard.registerEvents();

    // Planets
    //var orbit = new Orbit(150,0);
    //var earth = new Orb("Erde", 12800, 23.45);
    //orbit.addChild(earth);
    //sonne.addChild(orbit);

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
    return new Scenegraph(sonne);
}
