$(document).ready(function () {
  $(".marker").on("click", function (e) {
    // handle click marker
    $(".marker").addClass("hidden");
    const city = $(this).data("city");
    // console.log(marker);
    const markerOffset = $(this).offset();
    const x = markerOffset.left;
    const y = markerOffset.top;
    $(this).addClass("hidden");
    lastOpenedPosition = { x, y };
    $(".map-img")
      .addClass("zoom")
      .css({
        transformOrigin: `${x}px ${y}px`,
      });
    $(".map-content").removeClass("show");
    $(`.map-content[data-city-map="${city}"]`)
      .addClass("show")
      .css({
        transformOrigin: `${x - 100}px ${y}px`,
      });
  });

  // Handle close icon click
  $(".icon-close").on("click", function (e) {
    $(".map-content").removeClass("show");
    $(".marker").removeClass("hidden");
    $(".map-img").removeClass("zoom");
  });
  // Handle click marker detail
  $(".marker-detail").on("click", function (e) {
    const city = $(this).data("city");
    const markerId = $(this).data("marker");
    // remove class active when clicked marker
    $(`.marker-detail[data-city="${city}"]`).removeClass("active");
    $(this).addClass("active");
    //
    $(`.data-content[data-content="${city}"] .location`).removeClass(
      "active show"
    );
    $(`.location[data-content="${markerId}"]`).addClass("active show");
  });
  // handle button back mobile
  $(".mobile-back").on("click", function (e) {
    const city = $(this).data("city");
    // $(`.data-content[data-content="${city}"] .location`).removeClass(
    //   "active show"
    // );
  });
});
