let processScroll = () => {
    let docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%';
    
    document.getElementById('progress-bar').style.setProperty('--scroll-amount', scrollPercent)
}

document.addEventListener('scroll', processScroll);
