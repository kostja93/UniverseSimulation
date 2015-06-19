function initSceneGraph() {

    // View erstellen
    var cam = new Camera();
    cam.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100000.0);

    // Sun
    var sunOrbit = createSun();
    cam.addChild(sunOrbit);

    //Planets

    //Mars
    sunOrbit.addChild(createPlanetSystem(
        {
            radius: 230,
            rotation: 1.85,
            speed: 1.88
        },{
            name: 'mars',
            radius: 6800,
            tilt: 25.19,
            speed: 1.03
        }
    ));
    //Merkur
    sunOrbit.addChild(createPlanetSystem(
        {
            radius: 60,
            rotation: 7,
            speed: 0.24
        },{
            name: 'merkur',
            radius: 4900,
            tilt: 0.0,
            speed: 0
        }
    ));
    //Venus
    sunOrbit.addChild(createPlanetSystem(
        {
            radius: 110,
            rotation: 3.4,
            speed: 0.62
        },{
            name: 'venus',
            radius: 12100,
            tilt: 177.0,
            speed: 0
        }
    ));
    //Jupiter
    sunOrbit.addChild(createPlanetSystem(
        {
            radius: 800,
            rotation: 1.04,
            speed: 11.86
        },{
            name: 'jupiter',
            radius: 143000,
            tilt: 3.12,
            speed: 0.41
        }
    ));

    var keyboard = new KeyboardObserver(cam);
    keyboard.registerEvents();
    return new Scenegraph(cam);
}

function createSun() {
    var sunOrbit = new Orbit(0, 0, 0);
    var sun = new Orb("sun", 7.25, 25.38);
    var gold = new Material([0.8, 0.8, 0.0, 1.0], [0.25, 0.20, 0.07, 1.0], [0.75, 0.61, 0.23, 1.0], [0.63, 0.56, 0.37, 1.0], 51.2);
    var texture = new Texture("assets/textures/sun.jpg");

    gold.addChild(sun);
    sun.addChild(texture);
    texture.addChild(new Sphere(scale(13920)));

    sun.addChild(new Light(
        [0, 0, 0, 1],
        [0.2, 0.2, 0.2, 1],
        [0.8, 0.8, 0.8, 1],
        [1.0, 1, 1, 1]
    ));

    sunOrbit.addChild(gold);

    return sunOrbit;
}

function createPlanetSystem(orbit, planet, subPlanets) {
    var orbit_ = new Orbit(orbit.radius, orbit.rotation, orbit.speed);
    var planet_ = new Orb(planet.name, planet.tilt, planet.speed);
    var material = new Material([0.0, 0.0, 0.0, 1.0], [0.19, 0.19, 0.19, 1.0], [0.51, 0.51, 0.51, 1.0], [0.51, 0.51, 0.51, 1.0], 51.2);
    var texture  = new Texture('assets/textures/' + planet.name + '_small.jpg');
    var geometric = new Sphere(scale(planet.radius));

    orbit_.addChild(material);
    material.addChild(texture);
    texture.addChild(planet_);
    planet_.addChild(geometric);

    if (typeof subPlanets != 'undefined')
        orbit_.addChild(subPlanets);

    return orbit_;
}

