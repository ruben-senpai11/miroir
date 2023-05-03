function changeText() {
    var button = document.getElementById("myButton");
    if (
   
        button.innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd"d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg> Voir les tarifs'
    ) {
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg> Voir les tarifs'
    } else {
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd"d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg> Voir les tarifs'
    }
}

var darkenButtons = document.querySelectorAll(".darken-button");

for (var i = 0; i < darkenButtons.length; i++) {
  var darkenOverlay = document.createElement("div");
  darkenOverlay.classList.add("darken-overlay");
  darkenButtons[i].appendChild(darkenOverlay);

  darkenButtons[i].addEventListener("mouseover", function() {
    this.querySelector(".darken-overlay").style.display = "block";
  });

  darkenButtons[i].addEventListener("mouseout", function() {
    this.querySelector(".darken-overlay").style.display = "none";
  });
}
