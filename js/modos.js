  document.getElementById("switch-label").addEventListener("click", modo);
  document.getElementById("switch-label1").addEventListener("click", modor);
  document.getElementById("switch-label2").addEventListener("click", modotw);
  document.getElementById("switch-label3").addEventListener("click", modovine);

   if (localStorage.getItem('dark-mode') === 'true' && localStorage.getItem('rand-mode') === 'true') {
       document.body.classList.add('dark');
       document.getElementById("switch-label").checked = true;
       document.body.classList.add('rand');
       document.getElementById("switch-label1").checked = true;
       document.getElementById("texto").innerHTML = "Dark-Instagram";
   } else {
       if (localStorage.getItem('dark-mode') === 'true' && localStorage.getItem('tw-mode') === 'true') {
           document.body.classList.add('dark');
           document.getElementById("switch-label").checked = true;
           document.body.classList.add('tw');
           document.getElementById("switch-label2").checked = true;
           document.getElementById("texto").innerHTML = "Dark-Twitch";
       } else {
           if (localStorage.getItem('dark-mode') === 'true' && localStorage.getItem('vine-mode') === 'true') {
               document.body.classList.add('dark');
               document.getElementById("switch-label").checked = true;
               document.body.classList.add('vine');
               document.getElementById("switch-label3").checked = true;
               document.getElementById("texto").innerHTML = "Dark-Vine";
           } else {
               if (localStorage.getItem('dark-mode') === 'true') {
                   document.body.classList.add('dark');
                   document.getElementById("switch-label").checked = true;
                   document.getElementById("texto").innerHTML = "Dark";
               } else {
                   if (localStorage.getItem('rand-mode') === 'true') {
                       document.body.classList.add('rand');
                       document.getElementById("switch-label1").checked = true;
                       document.getElementById("texto").innerHTML = "Instagram";
                   } else {
                       if (localStorage.getItem('tw-mode') === 'true') {
                           document.body.classList.add('tw');
                           document.getElementById("switch-label2").checked = true;
                           document.getElementById("texto").innerHTML = "Twitch";
                       } else {
                           if (localStorage.getItem('vine-mode') === 'true') {
                               document.body.classList.add('vine');
                               document.getElementById("switch-label3").checked = true;
                               document.getElementById("texto").innerHTML = "Vine";
                           } else {
                               document.body.classList.remove('dark');
                               document.getElementById("switch-label").checked = false;
                               document.body.classList.remove('rand');
                               document.getElementById("switch-label1").checked = false;
                               document.body.classList.remove('tw');
                               document.getElementById("switch-label2").checked = false;
                               document.body.classList.remove('vine');
                               document.getElementById("switch-label3").checked = false;
                           }
                       }
                   }
               }
           }
       }
   }
   

   function modo() {
       document.body.classList.toggle('dark');
       if (document.body.classList.contains('dark')) {
           localStorage.setItem('dark-mode', 'true');
           if (document.body.classList.contains('rand')) {
               document.getElementById("texto").innerHTML = "Dark-Instagram";
           } else {
               if (document.body.classList.contains('tw')) {
                   document.getElementById("texto").innerHTML = "Dark-Twitch";
               } else {
                   if (document.body.classList.contains('vine')) {
                       document.getElementById("texto").innerHTML = "Dark-Vine";
                   } else {
                       document.getElementById("texto").innerHTML = "Dark";
                   }
               }
           }
       } else {
           localStorage.setItem('dark-mode', 'false');
           if (document.body.classList.contains('rand')) {
               document.getElementById("texto").innerHTML = "Instagram";
           } else {
               if (document.body.classList.contains('tw')) {
                   document.getElementById("texto").innerHTML = "Twitch";
               } else {
                   if (document.body.classList.contains('vine')) {
                       document.getElementById("texto").innerHTML = "Vine";
                   } else {
                       document.getElementById("texto").innerHTML = "";
                   }
               }
           }
       }
   }

   function modor() {
       if (localStorage.getItem('tw-mode') === 'true') {
           document.body.classList.remove('tw');
           document.getElementById("switch-label2").checked = false;
           localStorage.setItem('tw-mode', 'false');
       }
       if (localStorage.getItem('vine-mode') === 'true') {
           document.body.classList.remove('vine');
           document.getElementById("switch-label3").checked = false;
           localStorage.setItem('vine-mode', 'false');
       }
       document.body.classList.toggle('rand');
       if (document.body.classList.contains('rand')) {
           localStorage.setItem('rand-mode', 'true');
           if (document.body.classList.contains('dark')) {
               document.getElementById("texto").innerHTML = "Dark-Instagram";
           } else document.getElementById("texto").innerHTML = "Instagram";
       } else {
           localStorage.setItem('rand-mode', 'false');
           if (document.body.classList.contains('dark')) {
               document.getElementById("texto").innerHTML = "Dark";
           } else {
               document.getElementById("texto").innerHTML = "";
           }
       }
   }

   function modotw() {
       if (localStorage.getItem('rand-mode') === 'true') {
           document.body.classList.remove('rand');
           document.getElementById("switch-label1").checked = false;
           localStorage.setItem('rand-mode', 'false');
       }
       if (localStorage.getItem('vine-mode') === 'true') {
           document.body.classList.remove('vine');
           document.getElementById("switch-label3").checked = false;
           localStorage.setItem('vine-mode', 'false');
       }
       document.body.classList.toggle('tw');
       if (document.body.classList.contains('tw')) {
           localStorage.setItem('tw-mode', 'true');
           if (document.body.classList.contains('dark')) {
               document.getElementById("texto").innerHTML = "Dark-Twitch";
           } else document.getElementById("texto").innerHTML = "Twitch";
       } else {
           localStorage.setItem('tw-mode', 'false');
           if (document.body.classList.contains('dark')) {
               document.getElementById("texto").innerHTML = "Dark";
           } else {
               document.getElementById("texto").innerHTML = "";
           }
       }
   }

   function modovine() {
       if (localStorage.getItem('rand-mode') === 'true') {
           document.body.classList.remove('rand');
           document.getElementById("switch-label1").checked = false;
           localStorage.setItem('rand-mode', 'false');
       }
       if (localStorage.getItem('tw-mode') === 'true') {
           document.body.classList.remove('tw');
           document.getElementById("switch-label2").checked = false;
           localStorage.setItem('tw-mode', 'false');
       }
       document.body.classList.toggle('vine');
       if (document.body.classList.contains('vine')) {
           localStorage.setItem('vine-mode', 'true');
           if (document.body.classList.contains('dark')) {
               document.getElementById("texto").innerHTML = "Dark-Vine";
           } else document.getElementById("texto").innerHTML = "Vine";
       } else {
           localStorage.setItem('vine-mode', 'false');
           if (document.body.classList.contains('dark')) {
               document.getElementById("texto").innerHTML = "Dark";
           } else {
               document.getElementById("texto").innerHTML = "";
           }
       }
   }