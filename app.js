

const message = document.querySelector('#text');
const lastMsg = document.querySelector('#lastMsg')
const btn = document.querySelector('#send');

btn.addEventListener('click', function(){
    let textValue = message.value;
    lastMsg.innerHTML = textValue;
})





    







