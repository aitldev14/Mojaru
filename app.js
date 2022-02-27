/* navber */

let a = document.querySelectorAll("nav .container .navbar-collapse .navbar-nav a");
for (let i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    var b = document.querySelector("nav .container .navbar-collapse .navbar-nav .active");
    if (b) b.classList.remove("active");
    this.classList.add('active');
  };
}







function first_image(){
  document.getElementById("openion-2").innerHTML =  document.getElementById("openion-1").innerText;
  document.getElementById("image-1").src = "images/3.png";
  document.getElementById("1").style.cssText = `border-radius: 50%; border: 2px dashed #F27321; padding: 5px;`;
  document.getElementById("2").style.cssText = `opacity: 0.5; height: 65px; width: 65px; border-radius: 50%;`;
  document.getElementById("3").style.cssText = `opacity: 0.5; height: 65px; width: 65px; border-radius: 50%;`;
  document.getElementById("name-2").innerHTML = document.getElementById("name-1").innerText;
  document.getElementById("identity-2").innerHTML = document.getElementById("identity-1").innerText; 
   document.getElementById("1").classList.add("active");
  document.getElementById("2").classList.remove("active");
  document.getElementById("3").classList.remove("active");
   
}


function second_image(){
  document.getElementById("openion-2").innerHTML = "মজারুর কার্যক্রম আমি দেখেছি। তাদের বেশ কিছু ভিডিও দেখার সৌভাগ্য আমার হয়েছে। আমার কাছে মনে হয় এটি যথেষ্ট সম্ভাবনাময় এবং আগামী দিনের জন্য অত্যাবশ্যকীয়। আমি মজারুর উত্তরোত্তর সফলতা কামনা করি।মজারুর কার্যক্রম আমি দেখেছি। তাদের বেশ কিছু ভিডিও দেখার সৌভাগ্য আমার হয়েছে। আমার কাছে মনে হয় এটি যথেষ্ট সম্ভাবনাময় এবং আগামী দিনের জন্য অত্যাবশ্যকীয়। আমি মজারুর উত্তরোত্তর সফলতা কামনা করি।মজারুর কার্যক্রম আমি দেখেছি।"
  document.getElementById("image-1").src = "images/1.png";
  document.getElementById("2").style.cssText = `border-radius: 50%; border: 2px dashed #F27321; padding: 5px;`;
  document.getElementById("1").style.cssText = `opacity: 0.5; height: 65px; width: 65px; border-radius: 50%;`;
  document.getElementById("3").style.cssText = 'opacity: 0.5; height: 65px; width: 65px; border-radius: 50%;';
  document.getElementById("name-2").innerHTML = "অধ্যাপক ড. স্বদেশ চন্দ্র সামন্ত";
  document.getElementById("identity-2").innerHTML = "উপাচার্য, পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়"; 
  document.getElementById("2").classList.add("active");
  document.getElementById("1").classList.remove("active");
  document.getElementById("3").classList.remove("active");
}

function third_image(){
  document.getElementById("openion-2").innerHTML = document.getElementById("openion-3").innerText;
  document.getElementById("image-1").src = "images/2.png";
  document.getElementById("3").style.cssText = `border-radius: 50%; border: 2px dashed #F27321; padding: 5px;`;
  document.getElementById("1").style.cssText = `opacity: 0.5; height: 65px; width: 65px; border-radius: 50%;`;
  document.getElementById("2").style.cssText = `opacity: 0.5; height: 65px; width: 65px; border-radius: 50%;`;
  document.getElementById("name-2").innerHTML = document.getElementById("name-3").innerText;
  document.getElementById("identity-2").innerHTML = document.getElementById("identity-3").innerText;
  document.getElementById("3").classList.add("active"); 
  document.getElementById("1").classList.remove("active");
  document.getElementById("2").classList.remove("active");
}


/* single image click */
document.getElementById("1").addEventListener("click", function (){
  first_image();
});


document.getElementById("2").addEventListener("click", function(){
  second_image();
});

document.getElementById("3").addEventListener("click", function(){
  third_image();
});

/* up arrow click */

document.getElementById("up-arrow").addEventListener("click", function(){
  if(document.getElementById('2').classList.contains('active')){
      first_image();
      
  }
  
  else if(document.getElementById('1').classList.contains('active')){
      third_image();
  }

  else if(document.getElementById('3').classList.contains('active')){
      second_image();
  }
  else{
      console.log("None");
  }
});

/* down arrow click */

document.getElementById("down-arrow").addEventListener("click", function(){
  if(document.getElementById('2').classList.contains('active')){
      third_image();
  }
  
  else if(document.getElementById('1').classList.contains('active')){
      second_image();
  }    

  else if(document.getElementById('3').classList.contains('active')){
      first_image();
  }
  else{
      console.log("None");
  }
});









