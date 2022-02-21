// -----JS CODE-----
//@input Component.RenderMeshVisual
//@input Asset.Material greenMat
//@input Asset.Material redMat
//@input Asset.Material yellowMat
//@input Component.Text carStatusText


var mesh = script.getSceneObject ().getComponent ("Component.RenderMeshVisual");

//SetCubeColor ("Red");
//
//function SetCubeColor (color) 
//        
//        switch (color) {
//            
//            case "Red": mesh.mainMaterial = script.greenMat;
//            print ("changing cube color to red");
//            break;
//            
//            default:
//            print ("color not valid");
//        
//    }
//}

script.api.setColorRed = function () {
    mesh.mainMaterial = script.redMat;
    
    print ("changing cube color to red!");
}

script.api.setColorGreen = function () {
    mesh.mainMaterial = script.greenMat;
    
    print ("changing cube color to green!");
}

script.api.setColorYellow = function () {
    mesh.mainMaterial = script.yellowMat;
    
    print ("changing cube color to yellow!");
}


global.SetCarStatus = function (status) {
    if (script.carStatusText) {
        script.carStatusText.text = status.toString();
    }    
}