function initSceneGraph() {

    // View erstellen
    var cam = new Camera();
    cam.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100000.0);

    // Sonne
    var sunOrbit = new Orbit(0, 0, 0);
    var sonne = new Orb("Sonne", 7.25, 25.38);
    var gold = new Material([0.8, 0.8, 0.0, 1.0], [0.25, 0.20, 0.07, 1.0], [0.75, 0.61, 0.23, 1.0], [0.63, 0.56, 0.37, 1.0], 51.2);
    gold.addChild(sonne);
    sonne.addChild(new Sphere(scale(13920)));
    sonne.addChild(new Light(
        [0, 0, 0, 1],
        [0.2, 0.2, 0.2, 1],
        [0.8, 0.8, 0.8, 1],
        [1.0, 1.0, 1.0, 1]
    ));

    sunOrbit.addChild(gold);
    cam.addChild(sunOrbit);

    // Planets
    var earthOrbit = new Orbit(150, 0, 1);
    var earth = new Orb("Erde", 23.45, 1.0);
    earth.addChild(new Sphere(scale(12800)));
    var jade = new Material([0.0, 0.0, 0.0, 1.0], [0.14, 0.22, 0.16, 0.9], [0.54, 0.89, 0.63, 0.9], [0.32, 0.32, 0.32, 0.9], 12.8);
    jade.addChild(earth);
    earthOrbit.addChild(jade);
    sunOrbit.addChild(earthOrbit);

    var marsOrbit = new Orbit(230, 1.85, 1.88);
    var mars  = new Orb("Mars", 25.19, 1.03);
    mars.addChild(new Sphere(scale(6800)));
    var silber = new Material([0.0, 0.0, 0.0, 1.0], [0.19, 0.19, 0.19, 1.0], [0.51, 0.51, 0.51, 1.0], [0.51, 0.51, 0.51, 1.0], 51.2);
    silber.addChild(mars);
    marsOrbit.addChild(silber);
    sunOrbit.addChild(marsOrbit);

    var moonOrbit = new Orbit(50, 45.145, 27.32);
    var moon  = new Orb("Mond", 3476, 1.54, 27.32);
    var silberMoon = new Material([0.0, 0.0, 0.0, 1.0], [0.19, 0.19, 0.19, 1.0], [0.51, 0.51, 0.51, 1.0], [0.51, 0.51, 0.51, 1.0], 51.2);
    var lengthOfMoon = scale(3476);
    moon.addChild(new Quader(lengthOfMoon, lengthOfMoon, lengthOfMoon));
    silberMoon.addChild(moon);
    moonOrbit.addChild(silberMoon);
    earthOrbit.addChild(moonOrbit);

    var keyboard = new KeyboardObserver(cam);
    keyboard.registerEvents();
    return new Scenegraph(cam);
}

