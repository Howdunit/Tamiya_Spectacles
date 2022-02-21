// -----JS CODE-----
//@input float force
//@input float burstForce
//@input float turnForce
//@input float turnSpeed
//@input float touchTolerance
//@input float maxSpeed
//@input vec3 turnForceOffset
//@input string forceMode {"widget":"combobox", "values":[{"label":"VelocityChange","value":"VelocityChange"}, {"label":"Acceleration","value":"Acceleration"}, {"label":"Impulse","value":"Impulse"},{"label":"Force","value":"Force"}]}
//@input Component.ScriptComponent statusCubeScript
//@input SceneObject steeringWheel
//@input SceneObject speedoMeter
//@input SceneObject boosterGauge



var body = script.getSceneObject().getComponent ("Physics.BodyComponent");
var carObject = script.getSceneObject();
script.createEvent ("TouchStartEvent").bind (OnTouchStart);
script.createEvent ("TouchMoveEvent").bind (OnTouchMove);
script.createEvent ("TouchEndEvent").bind (OnTouchEnd);
script.createEvent ("UpdateEvent").bind (Update);
script.createEvent ("LateUpdateEvent").bind (LateUpdate);

var touchStartPos = 0;
var touchEndPos = 0;
var touchCurrPos = 0;

var isTouchActive = false;
var fingersTouched = 0;
var powerGauge = 100;
var touchIDs = [];
var touchIdDict = {
};

var testArray = [1, 2, 3];
var testValue = 1;
var isMovingForward = false;

script.api.burstJump = BurstJump;
script.api.stopCar = StopCar;


global.addScore = function () {
    
    
    powerGauge += 20;
    print ("updated score to: " + powerGauge); 
}



function OnTouchStart (eventData) {
    
    print (Object.keys (touchIdDict));
    var hasValue = touchIdDict [eventData.getTouchId()] ? true : false;
    
    // if the ID is not registered, add it to the array. If it is, don't do anything.
    if (!hasValue) {
        touchIdDict [eventData.getTouchId()] = eventData.getTouchPosition().x;
    }
    print (Object.keys (touchIdDict));
    
    global.SetCarStatus (Object.keys (touchIdDict).length);
    
    if (Object.keys (touchIdDict).length >= 1) {
        isTouchActive = true;
        
        // Move Backward if there's currently more than 2 touches on pad.
        if (Object.keys (touchIdDict).length >= 2) {
//            isMovingForward = false;
        }
        
        // Move Forward if there's currently 1 touch on pad.
        else {
////            isMovingForward = true;
//            touchCurrPos = eventData.getTouchPosition().x;
        }
    }
    
    touchStartPos = eventData.getTouchPosition().y;
    
    
//    print (touchIDs);
//    const index = touchIDs.indexOf(eventData.getTouchId());
//    
//    // if the ID is not registered, add it to the array. If it is, don't do anything.
//    if (index < 0) {
//        touchIDs.push (eventData.getTouchId());
//    }
//    print (touchIDs);
//    
//    
////    BurstJump ();
////    print ("Touch ID is: " + eventData.getTouchId());
//    
//    if (touchIDs.length >= 1) {
//        isTouchActive = true;
//        
//        // Move Backward if there's currently more than 2 touches on pad.
//        if (touchIDs.length >= 2) {
//            isMovingForward = false;
//        }
//        
//        // Move Forward if there's currently 1 touch on pad.
//        else {
//            isMovingForward = true;
//            touchCurrPos = eventData.getTouchPosition().x;
//        }
//    }
//        
//    print ("car is currently moving: " + isTouchActive + " and is moving forward: " + isMovingForward);
       
}

function OnTouchMove (eventData) {
    // Update values in dictionary.
    
    var hasValue = touchIdDict [eventData.getTouchId()] ? true : false;
    
    if (hasValue) {
        touchIdDict [eventData.getTouchId()] = eventData.getTouchPosition().x;
        
//        print ("key: " + eventData.getTouchId() + "value: " + eventData.getTouchPosition().x);
        for (var key in touchIdDict) {
//            print (touchIdDict [key]);
        }        
        
    }
    
//    // Calculate average x value of all the touch positions and map it to the car's rotation.
//    // Handle redundant function callbacks from multiple touches.
//    
//    if (Object.keys (touchIdDict).length >= 1) {
//        CalculateMultTouchPos (eventData);
//    }    
    
    
    
    
//    if (touchIDs.length >= 1) {
//        touchCurrPos = eventData.getTouchPosition().x;
//    }
//    
//    else {
//        var touchPosSum;
//        
////        for (let i = 0; i < touchIDs.length; i++) {
////            
////        }
//         
//    }
}


// BUG: Sometimes the touch end doesn't register properly on multi-touch. 
// Maybe when one of them is unassigned the system is automatically updating the ID of the other existing touches?

function OnTouchEnd (eventData) {

    print (Object.keys (touchIdDict));
    var hasValue = touchIdDict [eventData.getTouchId()] ? true : false;
    
    // if the ID is registered, remove it from the dictionary.
    if (hasValue) {
        delete touchIdDict [eventData.getTouchId()];
    }
    
//    isTouchActive = false;
//    touchIdDict = {};    
    
    print (Object.keys (touchIdDict));
    
    global.SetCarStatus (Object.keys (touchIdDict).length);
    
    if (Object.keys (touchIdDict).length <= 0) {
        isTouchActive = false;
    }     
   
    touchEndPos = eventData.getTouchPosition().y;
    
    if (Math.abs (touchEndPos - touchStartPos) >= 0.8) {
        
        isMovingForward = !isMovingForward;
        isMovingForward ? script.statusCubeScript.api.setColorGreen() : script.statusCubeScript.api.setColorRed();
        print ("switching gear...");
    }
    
    
    
    
//    print (touchIDs);
//    const index = touchIDs.indexOf(eventData.getTouchId());
//    
//    // If the ID is registered, remove it from the array.
//    if (index > -1) {
//        touchIDs.splice (index, 1);
//    }
//    print (touchIDs);
//    
//    if (touchIDs.length <= 0) {
//        isTouchActive = false;
//    }
//
//    
//    //Reset values.
//    touchStartPos = 0;    
//    touchCurrPos = 0;
}

function CalculateMultTouchPos () {

    if (Object.keys (touchIdDict).length >= 1) {
        var sum = 0;
        var averageX;
        
        for (var key in touchIdDict) {
            sum += touchIdDict [key];
        }
        
        
        averageX = sum / Object.keys (touchIdDict).length;

        touchCurrPos = averageX;
    }        
    
}



function BurstJump () {
    if (powerGauge >= 100) {
        
        if (body != null) {
            
            var direction = script.getTransform().forward.add (script.getTransform().up);
            direction.normalize;
            
            

            body.addForce (direction.uniformScale (script.burstForce), Physics.ForceMode.Force);
        }        
        
        print ("Burst Jump activated!");
        
//        powerGauge = 0;
    }
    
    else {
        print ("Require more power");
    }    
}

function StopCar () {
    if (body != null) {
        body.clearMotion ();
//        body.velocity = new vec3 (0,0,0);
//        body.angularVelocity = new vec3 (0,0,0);
        print ("stopping car");
    }
}


function Update (eventData) {
    
    global.SetCarStatus (parseInt (body.velocity.length));
    
    if (isTouchActive) {
 
        if (body != null) {
            
            CalculateMultTouchPos ();
            
            // Turn Left / Right
            var zRot = global.Map (Math.abs (touchCurrPos - 1), 0, 1, -45, 45);
            var DEG_TO_RAD = 0.0174533;  
            var RAD_TO_DEG = 57.2958;      
            
            // Add rotation to the car in the turning direction.
            var YRotDelta = script.turnSpeed * (0.5 - touchCurrPos) * getDeltaTime ();
            var YRotToApply = quat.angleAxis (YRotDelta * DEG_TO_RAD, vec3.up());
            var oldRotation = script.getSceneObject().getTransform().getWorldRotation();
            var newRotation = YRotToApply.multiply (oldRotation);
            script.getSceneObject().getTransform().setWorldRotation (newRotation);
            
            // Rotate the steering wheel to reflect turning direction.     
            if (script.steeringWheel) {
                
                script.steeringWheel.getTransform().setLocalRotation (quat.fromEulerAngles (90 * DEG_TO_RAD, 0 * DEG_TO_RAD, zRot * DEG_TO_RAD));                
            }
            

            // Move Forward / Backward
            var moveForce = isMovingForward ? script.getTransform().forward.uniformScale (script.force) : 
            script.getTransform().back.uniformScale (script.force * 0.4);
                    
            body.addForce (moveForce, Physics.ForceMode.Force);
            
            body.velocity = body.velocity.clampLength (20); 
                                    
        }
        
        print ("touch is active!");
    }
    
    
    // Check if the car is facing downwards
    if (carObject.getTransform().down.dot (vec3.up()) >= 0.7) {
        
        var forward = carObject.getTransform().forward;
        
        carObject.getTransform().setWorldRotation (quat.lookAt (forward, vec3.up()));
        print ("Car has been flipped");
    }
}

function LateUpdate (eventData) {
    
}

