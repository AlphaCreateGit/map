$(document).ready(function () {
  let activeMarker = null;

  $(".marker").on("click", function (e) {
    $(".marker").addClass("hidden");
    const city = $(this).data("city");
    $(this).addClass("hidden");
    $(".map-img").addClass("zoom");
    $(".map-content").removeClass("show");
    $(`.map-content[data-city-map="${city}"]`).addClass("show");

    activeMarker = $(this);
    if ($(".map-content.show").length) {
      const activeMarkerDetail = $(
        `.marker-detail.active[data-city="${city}"]`
      );
      const markerId = activeMarkerDetail.data("marker");
      $(`.data-content[data-content="${city}"] .location`).removeClass(
        "active show"
      );
      $(`.location[data-content="${markerId}"]`).addClass("active show");
    }
  });

  $(".icon-close").on("click", function (e) {
    $(".map-content").removeClass("show");
    $(".marker").removeClass("hidden");
    $(".map-img").removeClass("zoom");
  });

  $(".marker-detail").on("click", function (e) {
    const city = $(this).data("city");
    const markerId = $(this).data("marker");
    $(`.marker-detail[data-city="${city}"]`).removeClass("active");
    $(this).addClass("active");
    $(`.data-content[data-content="${city}"] .location`).removeClass(
      "active show"
    );
    $(`.location[data-content="${markerId}"]`).addClass("active show");
  });

  $(".mobile-back").on("click", function (e) {
    const city = $(this).data("city");
    $(`.data-content[data-content="${city}"] .location`).removeClass(
      "active show"
    );
  });
});
