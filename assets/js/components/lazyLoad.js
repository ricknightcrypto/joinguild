export function lazyLoad() {
    $('img.lazy[data-src]').each(function () {
        $(this).lazy();
    })
}