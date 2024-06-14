let SmallBAr = document.getElementById('small-bar');
let SideBar = document.getElementById('sidebar');
let MiniSidebar = document.getElementById('mini-sidebar');
let Content = document.querySelector('.content');
let MiniContent = document.querySelectorAll('.mini-content');
// let NavButton = document.getElementById('nav-button');
console.log(MiniContent);
console.log(Content);
// NavButton.addEventListener('click' , function(){
//     SmallBAr.style.display = "none";
// })
// function handleClick(){}



function NavButton(){
    SmallBAr.classList.toggle('active');
    SideBar.classList.toggle('active');
    MiniSidebar.classList.toggle('active');
    Content.classList.toggle('active');
    MiniContent.forEach(function(sufyan){
        sufyan.classList.toggle('active');
    })
    
}

 
// document.getElementById('small-bar').style.left = '200px';
// document.getElementsByTagName('body')[0].style.paddingLeft = '210px';
// document.getElementById('sidebar').style.display = 'block';
// document.getElementById('mini-sidebar').style.display = "none";
// document.querySelector(".mini-content").style.width = '310px';  