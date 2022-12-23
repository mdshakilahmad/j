$(function () {
  $("#menu_two").slicknav({
    closeOnClick: true, // it's new line added
    appendTo: ".mobile_menu_load", //Clicking will remove menu the tag
  });
});

$("#menu_two").onePageNav({
  currentClass: "current",
  changeHash: false,
  scrollSpeed: 750,
});

//Clicking will remove menu the tag

// scrol_my_menu_select start
// Load Function start
$(window).on("load", function () {
  smoothScrolling($("header ul li a[href^='#']"), 80);
});
// Load Function end
// Active current Li start
function smoothScrolling($links, $topGap) {
  var links = $links;
  var topGap = $topGap;

  links.on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - topGap,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
    return false;
  });
}
// Active current Li end

// scrol_my_menu_select end
