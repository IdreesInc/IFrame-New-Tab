$(function() {
    chrome.storage.sync.get({
        url: '',
        scrolling: "no"
    }, function(response) {
        $("#embedded").attr("scrolling", response.scrolling);
        $("#embedded").attr("src", response.url);
    });
});

