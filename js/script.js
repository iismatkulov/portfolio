arr = [];
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        arr.shift = document.title;
        document.title = 'Вернись!';
    } else {
        document.title = arr[0];
    }
});