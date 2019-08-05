function restore_options() {
    $("#validURL").hide();
    chrome.storage.sync.get({
        url: '',
        scrolling: "no"
    }, function(items) {
        $("#scrolling").val(items.scrolling);
        $("#url").val(items.url);
    });
}

$("#save").on("click", function() {
    $("#validURL").hide();
    let scrolling = $("#scrolling").val();
    let url = $("#url").val();

    if (url !== undefined && url.length > 0) {
        chrome.storage.sync.set({
            scrolling: scrolling,
            url: url
        }, function() {
            $("#save").val("Settings saved!");
            setTimeout(() => {
                $("#save").val("Save Settings");
            }, 1500);
        });
    } else {
        $("#validURL").show();
    }
});

document.addEventListener('DOMContentLoaded', restore_options);