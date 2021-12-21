document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        document.title.value = 'Вернись!';
    } else {
        console.log('is visible');
    }
});