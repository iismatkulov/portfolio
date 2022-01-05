var title = 0;
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        title = document.title;
        document.title = 'Эй! Вы куда?';
    } else {
        document.title = title;
    }
});

