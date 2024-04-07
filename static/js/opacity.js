document.addEventListener('DOMContentLoaded', function () {
    this.body.style.opacity = 0;
    setTimeout(function () {
        this.body.style.opacity = 1;
    }.bind(document), 500);
}.bind(document));