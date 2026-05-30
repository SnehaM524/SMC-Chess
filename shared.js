// build decorative starting board (only if present)
(function(){
  var board=document.getElementById('board');
  if(!board) return;
  var black=['♜','♞','♝','♛','♚','♝','♞','♜'];
  var white=['♖','♘','♗','♕','♔','♗','♘','♖'];
  var html='';
  for(var r=0;r<8;r++){
    for(var c=0;c<8;c++){
      var dark=(r+c)%2===1;var pc='';
      if(r===0) pc='<span class="pc">'+black[c]+'</span>';
      else if(r===1) pc='<span class="pc">♟</span>';
      else if(r===6) pc='<span class="pc">♙</span>';
      else if(r===7) pc='<span class="pc">'+white[c]+'</span>';
      html+='<span class="'+(dark?'d':'l')+'">'+pc+'</span>';
    }
  }
  board.innerHTML=html;
})();

// FAQ accordion
document.querySelectorAll('.faq button').forEach(function(b){
  b.addEventListener('click',function(){
    var item=b.parentElement,ans=item.querySelector('.ans'),open=item.classList.contains('open');
    document.querySelectorAll('.faq').forEach(function(f){f.classList.remove('open');f.querySelector('.ans').style.maxHeight=null;});
    if(!open){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px';}
  });
});

// mobile menu
var burger=document.getElementById('burger'),links=document.getElementById('links');
if(burger){burger.addEventListener('click',function(){links.classList.toggle('show');});}

// scroll reveal
var io=new IntersectionObserver(function(es){
  es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

// year
var yr=document.getElementById('yr'); if(yr){yr.textContent=new Date().getFullYear();}
