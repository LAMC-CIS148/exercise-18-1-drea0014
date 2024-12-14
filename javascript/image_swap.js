"use strict";

$(document).ready(function() {
    // Preload images
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // Set up event handlers for links
    $("#image_list a").click(function(evt) {
        // Swap image
        var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);

        // Swap caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        // Cancel the default action of the link
        evt.preventDefault();
    });

    // Move focus to the first thumbnail
    $("#image_list li:first-child a").focus();
});

