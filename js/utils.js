/**
 * Created by kostja93 on 02.06.15.
 */

function degToRad(deg) {
    return deg * Math.PI / 180;
}

function scale(realLength) {
    return realLength / 13920 / 2.0;
}

function calculateSpeed(relativ, referenz) {
    if (relativ == 0)
        return 0;
    return (referenz/relativ) / 100.0 ;
}