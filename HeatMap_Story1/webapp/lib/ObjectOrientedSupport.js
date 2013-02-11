var ee = {};
ee.namespace = function(packageName) {
    var packageElements = packageName.split(".");
    var packageObject = window;
    for (var n = 0; n < packageElements.length; n++) {
        var nextPackageElement = packageElements[n];
        if (!packageObject[nextPackageElement]) packageObject[nextPackageElement] = {};
        packageObject = packageObject[nextPackageElement]
    }
};

ee.extend = function(subClass, superClass) {
	var intermediateClass = new Function;
    intermediateClass.prototype = superClass.prototype;
    subClass["prototype"] = new intermediateClass;
};

ee.implement = ee.extend;
