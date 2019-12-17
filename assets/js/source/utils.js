window.URL = (window.URL || window.webkitURL);

$.fn.swapClass = function(toRemove, toAdd) {
    $(this).removeClass(toRemove).addClass(toAdd);
}

function addCommas(number) {
    let split = number.toString().split('.');
    if(split[0].length >= 4) {
        split[0] = split[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    return split.join('.');
}

function handleNumber(commas, number) {
    if(commas) {
        return addCommas(number);
    } else {
        let letters = ['','K','M','B','T'];
        let index = 0;
        while(number >= 1000) {
            number /= 1000;
            index++;
        }
        let newValue = number.toFixed(1);
        if(newValue.split('.')[1] == '0') {
            newValue = newValue.split('.')[0];
        }
        return newValue + letters[index];
    }
}

function timestamp(timestamp) {
    return moment(timestamp).calendar();
}

function makeBlobVideo(videoURL, callback) {
    let xmlh = new XMLHttpRequest();
    xmlh.responseType = String('blob');
    xmlh.onload = function() {
        let fileRead = new FileReader();
        fileRead.onloadend = function() {
            let byteChars = atob(fileRead.result.slice(fileRead.result.indexOf(',') + 1));
            let byteNums = new Array(byteChars.length);
            for(let i = 0; i < byteChars.length; i++) {
                byteNums[i] = byteChars.charCodeAt(i);
            }
            let byteArray = new Uint8Array(byteNums);
            let blobData = new Blob([byteArray], {type: 'video/*'});
            let finalUrl = window.URL.createObjectURL(blobData);
            callback(finalUrl);
        }
    }
    xmlh.open('GET', videoURL);
    xmlh.send();
}

function renderViews(video) {
    let viewCount = handleNumber(true, video.views);
    let viewerCount = handleNumber(true, video.viewers);
    if(!video.stream) {
        return String(viewCount + ' views');
    } else {
        if(video.stream && !video.live) {
            return String(viewCount + ' views');
        } else {
            return String(viewerCount + ' watching');
        }
    }
}
function renderViewStatus(video) {
    let template = String(`<span class="badge {{b}}">{{t}}</span>`);
    let setBadge = (badge, text) => {
        return template.replace('{{b}}', badge).replace('{{t}}', text);
    }
    if(video.live) { return setBadge('badge-danger', 'LIVE') }
    else if(video.unlisted) { return setBadge('badge-dark', 'UNLISTED') }
    else if(video.private) { return setBadge('badge-dark', 'PRIVATE') }
    else { return '' }
}

function renderMainVideoData(video) {
    $('#mainVidTitle').html(video.title);
    $('#mainVidUpvotes').html(handleNumber(false, video.upvotes));
    $('#mainVidDownvotes').html(handleNumber(false, video.downvotes));
    $('#mainVidViews').html(renderViews(video));
    $('#mainVidViewBadge').html(renderViewStatus(video));
    $('#mainVidDescription').html(video.description);
}