// -----JS CODE-----
//@input float force
//@input string forceMode {"widget":"combobox", "values":[{"label":"VelocityChange","value":"VelocityChange"}, {"label":"Acceleration","value":"Acceleration"}, {"label":"Impulse","value":"Impulse"},{"label":"Force","value":"Force"}]}
var body = script.getSceneObject().getComponent ("Physics.BodyComponent");
script.createEvent ("TouchStartEvent").bind (AddForce);


function AddForce () {
    
    print ("testing...");
    
    if (body != null) {
    
    body.addForce (script.getTransform().forward.uniformScale (script.force), Physics.ForceMode.Force);
    }
}