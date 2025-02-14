

var cards = document.querySelectorAll('.panel');

[...cards].forEach((card,i)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    fs[i] = (1-fs[i]);
    checknflip();
	
  });
});


document.getElementById("button1").click()
