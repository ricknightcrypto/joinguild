import { calendarPreload } from "./components/calendar-preload";
import { lazyLoad } from "./components/lazyLoad";
import { initReviewsSlick } from "./components/reviews-slick";
import { smoothScroll } from "./components/smoothe-scroll";
import { videoPreload } from "./components/video-preload";

export function runAfterDomLoad() {
    $(window).bind('load', function () {
        $('body').removeClass('preload')   
        videoPreload()
        calendarPreload()
    });
    lazyLoad()
    initReviewsSlick()
    smoothScroll()

}
