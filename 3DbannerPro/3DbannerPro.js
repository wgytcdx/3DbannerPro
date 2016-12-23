/**
 * Created by 15267 on 2016/12/23.
 */

$(window).on('mousemove', function(e) {
    var w=e.currentTarget.innerWidth,h=e.currentTarget.innerHeight;
    var offsetX = 0.5 - e.pageX / w, /* where e.pageX is our cursor X coordinate */
        offsetY = 0.5 - e.pageY / h,
        offsetPoster = $poster.data('offset'), /* custom value for animation depth */
        transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)';

    /* apply transform to $poster */
    $poster.css('transform', transformPoster);

    /* parallax foreach layer */
    /* loop thought each layer */
    /* get custom parallax value */
    /* apply transform */
    $layer.each(function() {
        var $this = $(this);
        var offsetLayer = $this.data('offset') || 0; /* get custom parallax value, if element docent have data-offset, then its 0 */
        var transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';

        $this.css('transform', transformLayer);
    });
});




var $poster = $('.poster');
var $shine = $('.shine');
var $layer = $('div[class *= "layer-"]');

$poster.data("offset",15);

$(window).on('mousemove', function(e) {
    var w=e.currentTarget.innerWidth,h=e.currentTarget.innerHeight;
    var offsetX = 0.5 - e.pageX / w, /* where e.pageX is our cursor X coordinate */
        offsetY = 0.5 - e.pageY / h,
        offsetPoster = $poster.data('offset'), /* custom value for animation depth */
        transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)';

    dy = e.pageY - h / 2,
        dx = e.pageX - w / 2,
        theta = Math.atan2(dy,dx), /* get angle in radians */
        angle = theta * 180 / Math.PI; /* convert rad in degrees */
    if (angle < 0) {
        angle = angle + 360;
    }

    /* apply transform to $poster */
    $poster.css('transform', transformPoster);
    $shine.css('background', 'linear-gradient(' + (angle - 90) + 'deg, rgba(255,255,255,' + e.pageY / h + ') 0%,rgba(255,255,255,0) 80%)');

    /* parallax foreach layer */
    /* loop thought each layer */
    /* get custom parallax value */
    /* apply transform */
    $layer.each(function() {
        var $this = $(this);
        var offsetLayer = $this.data('offset') || 0; /* get custom parallax value, if element docent have data-offset, then its 0 */
        var transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';

        $this.css('transform', transformLayer);
    });
});
