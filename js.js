document.getElementById("get-started-button").addEventListener("click", function() {
    document.getElementById("get-started-container").style.display = "none";
    document.getElementById("signup-page-container").style.display = "block";
});

function revealWebsite() {
    document.getElementById("get-started-container").style.display = "none";
    document.getElementById("signup-page-container").style.display = "block";
}

function clearText(div) {
    if (div.innerText === div.getAttribute('data-placeholder')) {
        div.innerText = '';
    }
}

function restoreText(div) {
    if (div.innerText.trim() === '') {
        div.innerText = div.getAttribute('data-placeholder');
    }
}

document.querySelector(".input-container-1").addEventListener("click", function() {
    this.classList.add("active");
});

document.addEventListener("click", function(event) {
    let container = document.querySelector(".input-container-1");
    if (!container.contains(event.target)) {
        container.classList.remove("active");
    }
});

document.querySelector('.signin-button-1').addEventListener('click', function(event) {
    event.preventDefault();
    
    document.getElementById('signup-page-container').style.display = 'none';
    document.getElementById('signin-page-container').style.display = 'block';
});

document.querySelector('.signup-button-2').addEventListener('click', function(event) {
    event.preventDefault();
    
    document.getElementById('signin-page-container').style.display = 'none';
    document.getElementById('signup-page-container').style.display = 'block';
});