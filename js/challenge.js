let counter = document.getElementById('counter');
let seconds = parseInt(counter.innerText);
let playing=!0;
counting = function(){
    return setInterval(()=>{
        seconds = seconds + 1;
        counter.innerText = seconds;
    },1000);
};
let interval = counting();
let minus = document.getElementById('minus');
minus.addEventListener('click',()=>{
    // e.preventDefault();
    seconds = seconds - 1; 
    counter.innerText = seconds;
    
});
let plus = document.getElementById('plus');
plus.addEventListener('click',()=>{
    // e.preventDefault();
    seconds = seconds + 1;
    counter.innerText = seconds;
    
});
let heart = document.getElementById('heart');
heart.addEventListener('click',()=>{
    // e.preventDefault();
    let likesList = document.createElement('li');
    let likes = document.querySelector('.likes');
    likes.appendChild(likesList);
    
    likesList.innerText = `${seconds} has been liked 1 time `
    
});
let comment = document.getElementById('comment-input');
let submit = document.getElementById('submit');
let list = document.getElementById('list');
submit.addEventListener('click',(e)=>{
    
    let p = document.createElement('p');
    let com = comment.value ;
    p.innerText = com ;
    list.appendChild(p);
    comment.value = '';
    e.preventDefault();
});
let pause = document.getElementById('pause');
pause.addEventListener('click',()=>{
    playing?(playing=!1,clearInterval(interval),pause.innerText = 'resume')
    :(playing=! 0 , interval = counting(),pause.innerText = 'pause');
    minus.toggleAttribute('disabled');
    plus.toggleAttribute('disabled');
    heart.toggleAttribute('disabled');
    submit.toggleAttribute('disabled');

    
});


