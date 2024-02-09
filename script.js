function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

function moveNo() {
    var noElement = document.getElementById('answer-no');
    noElement.style.position = 'absolute';
    noElement.style.left = Math.random() * (window.innerWidth - noElement.clientWidth) + 'px';
    noElement.style.top = Math.random() * (window.innerHeight - noElement.clientHeight) + 'px';
}
