var paths = ["index.html", "index.html#about-section", "index.html#coaches-section", "index.html#gallery-section", "index.html#rackets-section", "index.html#contact-section", "author.html"];
var nav = ["HOME", "ABOUT US", "COACHES", "GALLERY", "RACKETS", "CONTACT", "AUTHOR"];
var menu = document.getElementById("menu");
var links = "";
for(var i=0; i<nav.length; i++) {
    links+="<li class='nav-item'><a class='nav-link linkh' href=" + paths[i] + ">" + nav[i] + "</a></li>";
}
menu.innerHTML=links;



var footer = document.getElementById("ft");
footer.innerHTML="<p class='mb-0 p-1'>&copy All rights reserved Vladimir Jesic 2023. | <a href='index.html' target='_blank'>Documentation</a> | <a href='index.html' target='_blank'>Sitemap</a></p>"