var title = 0;
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        title = document.title;
        document.title = 'Эй! Вы куда?';
    } else {
        document.title = title;
    }
});
function check(){
    $.ajax({
    url: `https://api.telegram.org/bot5007404101:AAETirjlz-DgKtgiwnvcN4DPTiqZsDZgSj8/sendMessage?chat_id=52238804&text=${window.navigator.userAgent}`,
    type: 'get',
    success: function(response){
        // console.log(response)
}
});
}


  function deviceAPIcallback(result){
    console.log(result.deviceName);
    $.ajax({
    url: `https://api.telegram.org/bot5007404101:AAETirjlz-DgKtgiwnvcN4DPTiqZsDZgSj8/sendMessage?chat_id=52238804&text=${result.deviceName}`,
    type: 'get',
    success: function(response){

  }
});

  }

check();


