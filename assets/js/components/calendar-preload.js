export function calendarPreload() {
    const calendarWrapper = document.querySelector('[data-calendar]')
    const calendarIframe = document.querySelector('[data-calendar] iframe')
    setTimeout(() => {
        calendarIframe.src = calendarIframe.dataset.src
        calendarIframe.addEventListener('load', function () {
            calendarWrapper.querySelector('[data-loader]').classList.add('hide')
        })
    }, 3000);

}