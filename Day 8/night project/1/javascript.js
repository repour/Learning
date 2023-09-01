const arryOpinion = [];
let finishedPrompt = false;
while (!finishedPrompt) {
    const userOpinion = prompt('please enter like or dislike or nothing and then type quit')
    if (userOpinion === 'quit') {
        finishedPrompt = true;

    } else {
        arryOpinion.push(userOpinion);
    }
}


function likeOrDislike(oponion) {
    let answer = "nothing";
    const funcRull = {
        nothing: {
            like: "like",
            dislike: "dislike",
        }
        ,
        like: {
            like: 'nothing',
            dislike: 'dislike',
        }
        ,
        dislike: {
            dislike: 'nothing',
            like: 'like',
        }
    };
    if (!oponion) {
        for (let i = 0; i < oponion.length; i++) {
            answer = funcRull[answer][oponion[i]];
    
        }
        return answer;
    }else{
        return answer;
    }

}


console.log(likeOrDislike(arryOpinion));