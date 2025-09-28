chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Обработка сообщения
    sendResponse({status: 'ok'});
});
