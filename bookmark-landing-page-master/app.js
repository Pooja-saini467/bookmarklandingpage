const menu = document.querySelector('.menu')

const buttom = document.querySelectorAll('.toggle')

for (const btn of buttom) {
  btn.addEventListener('click', function () {
    menu.classList.toggle('show')
  })
}

tab1 = document.getElementsByClassName("bookmarking1")[0]
tab2 = document.getElementsByClassName("bookmarking2")[0]
tab3 = document.getElementsByClassName("bookmarking3")[0]
tab1_btn = document.getElementById("tab1") 
tab2_btn = document.getElementById("tab2") 
tab3_btn = document.getElementById("tab3") 

tab1_btn.addEventListener("click", () => {
  tab1.style.display = "flex"
  tab2.style.display = "none"
  tab3.style.display = "none"
  tab1_btn.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
  tab2_btn.style.border = "none"
  tab3_btn.style.border = "none"
})

tab2_btn.addEventListener("click", () => {
  tab2.style.display = "flex"
  tab1.style.display = "none"
  tab3.style.display = "none"
  tab2_btn.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
  tab1_btn.style.border = "none"
  tab3_btn.style.border = "none"
})

tab3_btn.addEventListener("click", () => {
  tab3.style.display = "flex"
  tab1.style.display = "none"
  tab2.style.display = "none"
  tab3_btn.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
  tab1_btn.style.border = "none"
  tab2_btn.style.border = "none"
})
const dark = document.getElementById("dark");
const theme = document.querySelector("#theme-link");
 dark.addEventListener("click", function() {
   if (theme.getAttribute("href") == "stylesheet.css") {
     theme.href = "style.css";
   } else {
     theme.href = "stylesheet.css";
   }
 });

 
