function initSceneGraph() {

    // View erstellen
    var cam = new Camera();
    cam.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100000.0);

    // Sonne
    var sunOrbit = new Orbit(0, 0, 0);
    var sonne = new Orb("Sonne", 7.25, 25.38);
    sonne.addChild(new Sphere(scale(13920)));

    sunOrbit.addChild(sonne);
    cam.addChild(sunOrbit);

    // Planets
    var earthOrbit = new Orbit(150, 0, 1);
    var earth = new Orb("Erde", 23.45, 1.0);
    earth.addChild(new Sphere(scale(12800)));
    earthOrbit.addChild(earth);
    sunOrbit.addChild(earthOrbit);

    var marsOrbit = new Orbit(230, 1.85, 1.88);
    var mars  = new Orb("Mars", 25.19, 1.03);
    mars.addChild(new Sphere(scale(6800)));
    marsOrbit.addChild(mars);
    sunOrbit.addChild(marsOrbit);

    var moonOrbit = new Orbit(50, 45.145, 27.32);
    var moon  = new Orb("Mond", 3476, 1.54, 27.32);
    var lengthOfMoon = scale(3476);
    moon.addChild(new Quader(lengthOfMoon, lengthOfMoon, lengthOfMoon));
    //moon.addChild(new Sphere(lengthOfMoon));
    moonOrbit.addChild(moon);
    earthOrbit.addChild(moonOrbit);

    var keyboard = new KeyboardObserver(cam);
    keyboard.registerEvents();
    return new Scenegraph(cam);
}

