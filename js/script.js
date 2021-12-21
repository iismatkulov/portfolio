var title = 0;
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        title = document.title;
        document.title = 'Вернись, сука!';
    } else {
        document.title = title;
    }
});

