// -----JS CODE-----
//@input SceneObject respawnLocation
//@input SceneObject carObject

script.api.respawnCar = function () {
        
    if (script.respawnLocation && script.carObject) {
        
        script.carObject.getTransform().setWorldPosition (script.respawnLocation.getTransform().getWorldPosition());
        
        script.carObject.getTransform().setWorldRotation (script.respawnLocation.getTransform().getWorldRotation());
        
        print ("car has been respawned!");
    }
}