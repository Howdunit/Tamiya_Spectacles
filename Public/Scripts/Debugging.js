// -----JS CODE-----
//@input Component.Text text;

script.createEvent ("TouchStartEvent").bind (OnTouchStart);
script.createEvent ("TouchMoveEvent").bind (OnTouchMove);
script.createEvent ("TouchEndEvent").bind (OnTouchEnd);
script.createEvent ("UpdateEvent").bind (Update);


var dict = {};


function OnTouchStart (eventData) {
//    dict [eventData] = eventData.getTouchPosition().x;
//        for (var key in dict) {
//                print (dict [key]);
//        }    
//    
//    if (script.text) {
//        script.text.text = Object.keys (dict).length.toString();        
//    }
}



function OnTouchMove (eventData) {
    
    
}



function OnTouchEnd (eventData) {
//    var hasValue = dict [eventData] ? true : false;
//    
//    // if the ID is registered, remove it from the dictionary.
//    if (hasValue) {
//        delete dict [eventData];
//    }    
//    
//    for (var key in dict) {
//            print (dict [key]);
//    }     
//    
//    if (script.text) {
//        script.text.text = Object.keys (dict).length.toString();        
//    }
}


function Update (eventData) {
    
    
}