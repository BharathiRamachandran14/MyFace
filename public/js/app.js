document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
  const button=document.getElementById("colourChange");
  button.addEventListener("click",function(){
    const postimages=document.getElementsByClassName("postImage");
    for(let i=0;i<postimages.length;i++){
      postimages[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  })
 const btn=document.getElementById("btnmenu");
 btn.addEventListener("click", function(){
   const dropdown=document.getElementById("dropdown");
   
   dropdown.className="dropdown dropdown-open";
  const x=document.getElementById("close");
  x.addEventListener("click",function(){
    dropdown.className="dropdown dropdown-close";
  })
 })
 // You could separate the display:none property from the dropdown class, and put it in its own dropdown-closed class
 // Then every time the user opens or closes the menu you can switch the class name
 // So it will always have the dropdown class applied to give the text etc styles
 // But we'll switch just the dropdown-open and dropdown-closed classes on click so that we change the display property

  

});