document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        document.title = 'Вернись!';
    } else {
        console.log('is visible');
    }
});