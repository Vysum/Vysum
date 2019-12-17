$.noty.defaults.theme = 'metroui';
$.noty.defaults.layout = 'topRight';
$.noty.defaults.force = true;
$.noty.defaults.maxVisible = 6;
$.noty.defaults.timeout = 10000;
$.noty.defaults.progressBar = true;

let notify = {};
notify.alert = function(sticky, message) {
    new Noty({
        type: 'alert',
        text: message,
        timeout: (!sticky) ? 10000 : false
    })
}
notify.success = function(sticky, message) {
    new Noty({
        type: 'success',
        text: message,
        timeout: (!sticky) ? 10000 : false
    })
}
notify.warning = function(sticky, message) {
    new Noty({
        type: 'warning',
        text: message,
        timeout: (!sticky) ? 10000 : false
    })
}
notify.error = function(sticky, message) {
    new Noty({
        type: 'error',
        text: message,
        timeout: (!sticky) ? 10000 : false
    })
}