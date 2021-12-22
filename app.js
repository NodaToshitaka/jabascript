let hello = ('Hello' + 'World');
alert(hello);

let orange = 120;
let apple = 120;
if(orange<apple){
  alert('orange<apple')
} else if(orange == apple){
  alert('orange=apple')
} else{
  alert('orange>apple')
}

let max = 10000;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let num2 = 0;
let i;

for(i = 1; i < 11; i++){
  num2 = num2 + i;
}

alert('1から10まで足し算した結果は' + num2 + 'です');

let x = 25;
let y = 5;
let add = x + y;
let sub = x - y;
let mul = x * y;
let div = x / y;
alert(x + '+' + y + 'は' +add + "、" + x + '-' + y + "は" + sub + '、' + x + "×" + y + "は" + mul + "、" + x + "÷" + y + "は" + div);

let alertString;
alertString = addString("WebCamp");

alert(alertString)

function addString(strA){
  let addStr = "Hello " + strA;
  return addStr
}

let promptStr = prompt('何か好きな文字を入力してください');

alert(promptStr)


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

while ((user_hand != "グー") && (user_hand != "パー")　&& (user_hand != "チョキ") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。 \nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。')
} else {
  alert("またチャレンジしてね")
}


function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}


