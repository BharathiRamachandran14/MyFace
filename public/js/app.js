document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
  const button=document.getElementById("colourChange");
  button.addEventListener("click",function(){
    const postimages=document.getElementsByClassName("postImage");
    for(let i=0;i<postimages.length;i++){
      postimages[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  })
});