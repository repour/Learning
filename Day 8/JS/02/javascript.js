let getStr = prompt("please enter your array , and seperate name with comma");
let arryFromStr = getStr.split(",");

function nameLikes(arryFromStr) {
    if (!getStr) {
        /////////////////// It's for empty result///////////////////
        console.log("Nobody likes this.");
    }else if(arryFromStr.length < 3){
        /////////////////// for one or two names///////////////////
        switch (arryFromStr.length) {
            case 1:
                console.log(`${arryFromStr[0]} likes this.`);
                break;
            default:
                console.log(`${arryFromStr[0]} and ${arryFromStr[1]} likes this.`);
                break;        
        }
    }else {
        /////////////////// And for more than two names///////////////////
        let names = "";
        for (let i = 0; i < arryFromStr.length-1; i++) {
            names = names + arryFromStr[i] + " , ";
        }
        names.slice(0 , -2);
        console.log(`${names}and ${arryFromStr[arryFromStr.length-1]} likes this.`);
    }
    
}
nameLikes(arryFromStr);
