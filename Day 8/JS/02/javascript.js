let getStr = prompt("please enter your array , and seperate name with comma");
let arryFromStr = getStr.split(",");

function nameLikes(arry, str) {
    if (!str) {
        /////////////////// It's for empty result///////////////////
        console.log("Nobody likes this.");
    }else if(arry.length < 3){
        /////////////////// for one or two names///////////////////
        switch (arry.length) {
            case 1:
                console.log(`${arry[0]} likes this.`);
                break;
            default:
                console.log(`${arry[0]} and ${arry[1]} likes this.`);
                break;        
        }
    }else {
        /////////////////// And for more than two names///////////////////
        let names = "";
        for (let i = 0; i < arry.length-1; i++) {
            names = names + arry[i] + " , ";
        }
        names.slice(0 , -2);
        console.log(`${names}and ${arry[arry.length-1]} likes this.`);
    }
    
}
nameLikes(arryFromStr , getStr);
