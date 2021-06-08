window.addEventListener("DOMContentLoaded", () => {
    //- イベントリスナー登録
    document
        .getElementById("talk__submit")
        .addEventListener("click", handler_request_reply);
});

//写真データ格納
var items = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg'];
var random = Math.floor(Math.random() * items.length);


function handler_request_reply(txt) {
    // 入力コメント取得
    const comment = document.getElementById("talk__input").value;
    let formdata = new FormData();
    // apikey
    formdata.append("apikey", "DZZAwY9u8n7MKcdQN3nD25Ix4GzJ9zIS");
    // コメント
    formdata.append("query", comment);


    // apiにリクエスト
    fetch("https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk", {
        method: "post",
        body: formdata,
    }).then((response) => {
        response.json().then((data) => {
            //レスポンス取得
            const reply = data.results[0].reply;

            //html生成
            let parent = document.getElementById("talk");
            let talk__Me = document.createElement('div');
            let talk__Reply = document.createElement('div');
            let talk__me = document.createElement('p');
            let talk__reply = document.createElement('p');
            let face = document.createElement('div');
            let face2 = document.createElement('div');
            let faceImg = document.createElement('img');
            let faceImg2 = document.createElement('img');
            let name = document.createElement('p');
            let name2 = document.createElement('p');
            let already = document.createElement(('div'))
            let num = 0;


            //クラス名追加
            talk__Me.className = 'talk__Me';
            talk__Reply.className = 'talk__Reply';
            talk__reply.className = 'talk__reply' + num;
            talk__me.className = 'talk__me';
            face.className = 'face'
            face2.className = 'face2'
            faceImg.className = 'images'
            faceImg2.className = 'image'
            name.setAttribute('id', 'name')
            name2.setAttribute('id', 'name2')
            already.setAttribute('id', 'already')

            //親要素に子要素追加
            talk__reply.setAttribute('id', 'talk__reply')
            parent.appendChild(talk__Me);
            parent.appendChild(talk__Reply);
            talk__Me.appendChild(talk__me);
            talk__Me.appendChild(face);
            talk__Reply.appendChild(face2)
            talk__Reply.appendChild(name2)
            face.appendChild(faceImg)
            face2.appendChild(faceImg2)
            faceImg.setAttribute('src', 'images/me.png');
            faceImg2.setAttribute('src', items[random]);
            talk__Me.appendChild(name)
            name.textContent = '自分'
            

 
            if(faceImg2.src === 'https://3web4.github.io/chatbot/images/1.jpg'){
                name2.textContent='橋本環奈'
            } else if(faceImg2.src === 'https://3web4.github.io/chatbot/images/2.jpg') {
                name2.textContent='石原さとみ'
            } else if(faceImg2.src === 'https://3web4.github.io/chatbot/images/3.jpg') {
                name2.textContent='広瀬すず'
            } else if(faceImg2.src === 'https://3web4.github.io/chatbot/images/4.jpg') {
                name2.textContent='浜辺美波'
            } else if(faceImg2.src === 'https://3web4.github.io/chatbot/images/5.jpg') {
                name2.textContent='新垣結衣'
            } else if(faceImg2.src === 'https://3web4.github.io/chatbot/images/6.jpg') {
                name2.textContent='吉岡里帆'
            } else if(faceImg2.src === 'https://3web4.github.io/chatbot/images/7.jpg') {
                name2.textContent='佐々木希'
            }else if(faceImg2.src === 'https://3web4.github.io/chatbot/images/moe.jpg') {
                name2.textContent='もえちゃ〜〜ん！！'
            }

        
            talk__Me.appendChild(already)
            already.textContent = '既読'

            talk__Reply.appendChild(talk__reply);
            talk__reply.innerHTML = reply;
            talk__me.innerHTML = comment;
            document.querySelector(".talk__reply").innerHTML = reply;

            comment = none



        });
    });

    //チェンジボタンを押した時
    document.getElementById('talk__change').addEventListener('click', function() {
        faceImg2.setAttribute('src', items[random]);
    })


}





