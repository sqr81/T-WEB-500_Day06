module.exports = {

    arraysAreEqual: function (arr1, arr2) {
        //déclarer var longueur tableau
        let arr1Length = arr1.length;
        let arr2Length = arr2.length;

        //let arrLength = ;
        //comparer longueur tableau
        if (arr1Length === arr2Length) {
            //parcourir tableau 
            for (i = 0; i < arr1Length; i++) {
                for (i = 0; i < arr2Length; i++){
                    //console.log(arr2[i], arr1[i])
                    if (arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
                        //console.log(arr2[i], arr1[i]
                        return true
                        ;
                    }
                    else{
                        return false;
                    }
                }
                
            }
        }
        else {
            return false ;
        }
    }


}


