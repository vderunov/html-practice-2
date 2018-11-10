$(window).scroll(function () {
    02
    $('svg.radial-progress').each(function (index, value) {
        03
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        04
        if (
            05 $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
            06 $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25) 07
        ) {
            08
            // Get percentage of progress
            09
            percent = $(value).data('percentage');
            10
            // Get radius of the svg's circle.complete
            11
            radius = $(this).find($('circle.complete')).attr('r');
            12
            // Get circumference (2πr)
            13
            circumference = 2 * Math.PI * radius;
            14
            // Get stroke-dashoffset value based on the percentage of the circumference
            15
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            16
            // Transition progress for 1.25 seconds
            17
            $(this).find($('circle.complete')).animate({
                'stroke-dashoffset': strokeDashOffset
            }, 1250);
            18
        }
        19
    });
    20
}).trigger('scroll');