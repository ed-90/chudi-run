const chudik = document.getElementById("chudik");
const spike = document.getElementById("spike"); 

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (chudik.classList != "jump") {
        chudik.classList.add("jump")
    }
    setTimeout(function() {
        chudik.classList.remove("jump")        
    }, 300);
}

let isAlive = setInterval(function() {
    let chudikTop = parseInt(window.getComputedStyle(chudik).getPropertyValue("top"));
    let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue("left"));

    if (spikeLeft < 50 && spikeLeft > 0 && chudikTop >= 140) {
        alert("Game Over!")
    }
}, 10)