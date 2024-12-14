"use strict";
$(document).ready(function() {
    // Update the year in the footer
    const currentYear = new Date().getFullYear();
    $("footer p").html(`&copy; ${currentYear}, San Joaquin Valley Town Hall, Fresno, CA 93755`);
    
    // Preload images
    $("#image_list a").each(function() {
        const swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // Set up event handlers for links    
    $("#image_list a").click(function(evt) {
        // Swap image
        const imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);

        // Swap caption
        const caption = $(this).attr("title");
        $("#caption").text(caption);

        // Cancel the default action of the link
        evt.preventDefault();
    });

    // Move focus to the first thumbnail
    $("li:first-child a:first-child").focus();
});

