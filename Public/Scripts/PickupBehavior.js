// -----JS CODE-----


//script.api.DestroyPickup = DestroyPickup ();
//

var initialized = false;

script.api.destroyPickup = function() {
    
    if (!initialized) {
        return;
    }
    
    print ("Pickup obtained!");
    
    global.addScore ();
    
    script.getSceneObject().destroy();
}


function Initialize () {
    initialized = true;
    
    print ("Pickup initialized!");
    
}

Initialize ();
