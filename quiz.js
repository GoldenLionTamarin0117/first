var quiz=[
  ["解放演説で有名な　16代大統領エブライハム・　リンカーンの前職は次の内どれ？","市長","奴隷商人","レスラー","狩人",3],
  ["お坊さんが木魚（あのポコポコ言うやつ）を叩く意味は何？","眠くならないようにするため","一定のリズムでお経を唱えられるようにするため","悪霊を寄せ付けないようにするため","早く成仏させるため",1],
  ["parapsychology（パラサイコロジー）の意味は？","対象に寄生すること","テレパシーや心霊現象","他者を操ること、洗脳など","隕石などの特別なものを磨くこと",2],
  ["四葉のクローバーはなぜみつけると幸運になると言われているのか？","葉の一つが心臓（ハート）に似ていて、それが多いから","クローバーは踏まれるほど葉が多くなるため、葉が多いほど辛いことを肩代わりしてくれると考えたから","葉が多いほど、風に乗って遠くまで行けるから。","十字架に似ているから",4],
  ["豚のクルクルしている尻尾が伸びて真っ直ぐになるのはどんな時？","恐怖を感じた時","寝ている時","ご飯を食べている時","走っている時",2]
];
　[""]
var counter = 0;
var score = 0;
var end = false;

//初期HTML記述をセット
var DefaultHTML;
function DefaultSave() {
   　DefaultHTML = document.body.innerHTML;
}
// HTML記述を初期状態に戻す
function HTMLRestore() {
  　　document.body.innerHTML = DefaultHTML;
}
function set(){
  var order = document.getElementById("order");
  var question = document.getElementById("question");
  var reset=document.getElementById("reset");
  order.innerHTML = "【第"+(counter+1)+"問】";
  question.innerHTML = quiz[counter][0];
  reset.innerHTML="リセット";
  for(var i = 1; i < 5; i ++){
    var answer = document.getElementById("answer" + i);
    answer.innerHTML = quiz[counter][i];
  }
  }
function reset(){


}
//num＝答えのボタン
function judge(num){
  if(end){
    return;
  }
  var result = document.getElementById("result");
　   var answer = quiz[counter][5];
  if(answer == num){
    result.innerHTML = "正解！";
    score += 1;
  }
  else{
    result.innerHTML = "不正解...";
  }
  if(counter == quiz.length - 1){
    result.innerHTML += quiz.length + "問中" + score + "問正解！";
    end = true;
  }
  else{
  counter += 1;
set();
}
}