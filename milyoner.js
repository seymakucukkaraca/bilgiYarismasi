var saniye ;
var dakika ;
var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');
var saatKontrol =1;
var saniyeSayaci=0;

var app={
    questions:[
        {q:'Halk arasında " sen benden daha betersin" anlamında kullanılan sözde, hangisini söyledikten sonra ' +
                '"seninki benden kara" denir?\n', options:['a) Tencere yuvarlanmış','b) Tencere dibin kara','c) Üzüm üzüme baka baka ','d) Bir elin nesi var '],answer:2},

        {q:'Kolu ya da bacağı alçıya alınan kişiye arkadaşları genellikle hangisini yaparlar?\n',options:['a) Omuzda taşırlar '
                ,'b) Alçısını imzalarlar','c) Havaya atıp tutarlar',' d) Saçlarını boyarlar'],answer:2},

        {q:'"Kanka, sence bana bakar mı?" diye sorup arkadaşının fikrini almak isteyen biri, ' +
                'muhtemelen hangisinden bahsediyordur?',options:['a) Hoşlandığı kişiden ','b) Sahipleneceği kediden',
                'c) Güvenlik kamerasından',' d) Yağlı boya potreden'],answer:1},

        {q:'Hangisini söyleyen kişi, "Bu kırgınlığı küslüğü ortadan kaldıralım" demiş olur?\n',options:['a) Aramızdaki dağlara tırmanalım',
                ' b) Aramıza duvarlar örelim',' c) Aramızdaki buzları eritelim','d) Aramıza kara kedi koyalım'],answer:3},

        {q:'Bir kitabın beyaz perdeye uyarlandığı söyleniyorsa o kitaba hangisi olmuştur?\n',options:['a) İndirime girmiştir',
                'b) Filmi çekilmiştir','c) Az satmıştır',' d) Fuara katılmıştır'],answer:2}

    ],

    index:0,
    load:function(){
        if(this.index<=this.questions.length-1){
            quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
            op1.innerHTML=this.questions[this.index].options[0];
            op2.innerHTML=this.questions[this.index].options[1];
            op3.innerHTML=this.questions[this.index].options[2];
            op4.innerHTML=this.questions[this.index].options[3];
            this.scoreCard();


        }
        else{
            quizBox.innerHTML="GAME OVER...!!!"
            op1.style.display="none";
            op2.style.display="none";
            op3.style.display="none";
            op4.style.display="none";
            btn.style.display="none";


            function oyunBitti() {
                alert("Tebrikler ! "+" "+dakika+" dk"+" "+saniye+" sn içerisinde tamamladınız. ");

            }

        }

    },
    next:function(){
        this.index++;
        this.load();
    },
    check:function(ele){

        var id=ele.id.split('');


        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            ele.className="DOĞRU";
            ele.innerHTML="DOĞRU";
            this.scoreCard();

        }
        else{
            ele.className="YANLIŞ";
            ele.innerHTML="YANLIŞ";
        }


    },

    notClickAble:function(){
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";

        }
    },

    clickAble:function(){
        for(let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''

        }

    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.questions.length+"/"+this.score;
    }
}

window.onload=app.load();

function button(ele){
    app.check(ele);
    app.notClickAble();

}
function  next(){
    app.next();
    app.clickAble();
}
var saniyesayaci = 0;

var gecenSaniye = 0;
var gecenDakika = -1;
function uyariVer()
{
    gecenSaniye = (saniyesayaci%60);
    if((gecenSaniye%60)==0)
    {
        gecenDakika++;
    }
    gecenSaniye = saniyesayaci%60;
    document.getElementById("sadeceSaniyeyiGoster").innerHTML = (gecenDakika + " dakika " + gecenSaniye + " saniye ");
    saniyesayaci++;
}

var saniye =  setInterval(uyariVer,1000);
function stop() {
    clearInterval(saniye);
}



