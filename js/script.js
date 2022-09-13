$(function () {
  function cssControlResize() {
    cssControlScrol();

    let bodyWidth = parseInt($("body").width());
    let wraperWidth = parseInt($(".wraper").width());
    let buregerActive = $(".row__menu-active");


    row.width(wraperWidth);


    headerVidio.height(parseInt(headerVidio.width()) * 0.55);


    let CountItemInRow = Math.floor(
      parseInt(prouctsMenuContainer.width()) /
        (parseInt(prouctsMenuItem.width()) +
          parseInt(prouctsMenuItem.css("margin-left")) * 2)
    );
    let CountItemInLastRow =
      CountItemInRow - (prouctsMenuItem.length % CountItemInRow);

    $(".product-invisible").detach();
    if (
      (CountItemInLastRow == 1 && CountItemInRow != CountItemInLastRow) ||
      (CountItemInLastRow == 2 && CountItemInRow != CountItemInLastRow)
    ) {
      prouctsMenuContainer.append($('<li class="product-invisible"></li>'));
    } else {
      $(".product-invisible").detach();
    }


    if (bodyWidth > 1249) {
      chek1 = chek2 = chek3 = chek4 = chek5 = false;
      chek1 = true;
    } else if (bodyWidth <= 1249 && bodyWidth > 980) {
      chek1 = chek2 = chek3 = chek4 = chek5 = false;
      chek2 = true;
    } else if (bodyWidth <= 980 && bodyWidth > 690) {
      chek1 = chek2 = chek3 = chek4 = chek5 = false;
      chek3 = true;
    } else if (bodyWidth <= 690 && bodyWidth > 430) {
      chek1 = chek2 = chek3 = chek4 = chek5 = false;
      chek4 = true;
    } else {
      chek1 = chek2 = chek3 = chek4 = chek5 = false;
      chek5 = true;
    }


    buttonHegth.height(
      $(".chank4 .button").height() +
        parseInt($(".chank4 .button").css("padding-top")) * 2
    );


    contactInfoContainer.width(
      (bodyWidth - wraperWidth) / 2 +
        wraperWidth -
        parseInt(contactInfoContainer.offset().left)
    );

    if (bodyWidth > 568) {
      $(".menu").css({ opacity: 0.85 });
      buregerActive.addClass("row__menu");
      buregerActive.removeClass("row__menu-active");
      bureger.removeClass("burger-active");
      on = false;
      $("body").removeClass("lock");
    }
  }

  function cssControlScrol() {
    let bodyWidth = parseInt($("body").width());
    let buregerActive = $(".row__menu-active");

    buregerActive.css({ top: row.height() });

    if ($(window).scrollTop() >= 30) {
      row.css({ top: 0 });

      if (bodyWidth > 1024) {
        row.height(60);
      } else if (bodyWidth > 736) {
        row.height(40);
      } else if (bodyWidth > 0) {
        row.height(30);
      }
    } else {
      if (bodyWidth > 1249) {
        row.css({ top: 30 - $(window).scrollTop() });
        row.height(89);
      } else if (bodyWidth > 736) {
        row.css({ top: 0 });
        row.height(60);
      } else if (bodyWidth > 0) {
        row.css({ top: 0 });
        row.height(50);
      }
    }
  }

  function cssControl() {
    let bodyWidth = $("body").width();
    let select = $(".select");
    let windowWidth = $(window).width();

    backgroundHeader.height(
      parseInt(header.height()) +
      parseInt(header.css("padding-top")) +
      parseInt(header.css("padding-bottom")) +
      parseInt($(".button").css("padding-top"))
    );

    backgroundOffers.css({
      top: chank4.offset().top - $(".background__header").height(),
    });
    backgroundOffers.height(
      chank4.height() + parseInt(chank4.css("padding-top")) * 2
    );

    backgroundFooter.css({
      top:
        footer.offset().top -
        $(".background__header").height() -
        backgroundOffers.height(),
    });
    backgroundFooter.height(
      footer.height() + parseInt(footer.css("padding-top")) * 2
    );
    

    if (bodyWidth > 555) {
      $(".menu").css({ 'top': 0, 'display': 'flex' });
      bureger.removeClass("burger-active");
    } else {
      if (!on) {
        $(".menu").css({ 'top': -500, 'display': 'block' });
      }
    }


    let countProuctsMenuItem = Math.floor(
      prouctsMenuContainer.width() / prouctsMenuItem.width()
    );
    let countInfoImgListItem = Math.floor(
      infoImgList.width() / infoImgListItem.width()
    );

    if (countProuctsMenuItem > 1) {
      prouctsMenuItem.css({
        "margin-bottom":
          (parseInt(prouctsMenuContainer.width()) -
            parseInt(prouctsMenuItem.width()) * countProuctsMenuItem) /
          (countProuctsMenuItem - 1),
      });
    } else {
      prouctsMenuItem.css({
        "margin-bottom":
          15,
      });
    }


    if (windowWidth > 1249 && chek1) {
      infoImgListItem.css({
        "margin-bottom": 0,
      });

      $(".people").append(peopleInfo);
      $(".info-wraper").append(infoImgList);

      chek1 = chek2 = chek3 = chek4 = chek5 = false;
    } else if (windowWidth > 980 && chek2) {
      infoImgListItem.css({
        "margin-bottom":
          (parseInt(infoImgList.width()) -
            parseInt(infoImgListItem.width()) * countInfoImgListItem) /
          (countInfoImgListItem - 1),
      });

      $(".people").append(peopleInfo);
      $(".info-wraper").append(infoImgList);

      chek1 = chek2 = chek3 = chek4 = chek5 = false;
    } else if (windowWidth > 690 && chek3) {
      infoImgListItem.css({
        "margin-bottom": 0,
      });

      $(".people").append(peopleInfo)
      $(".chank3").append(infoImgList);

      chek1 = chek2 = chek3 = chek4 = chek5 = false;
    } else if (windowWidth > 430 && chek4) {
      infoImgListItem.css({
        "margin-bottom": 0,
      });


      $(".chank3").append(infoImgList);
      $(".chank3").append(peopleInfo);

      chek1 = chek2 = chek3 = chek4 = chek5 = false;
    } else if (chek5) {
      infoImgListItem.css({
        "margin-bottom":
          (parseInt(infoImgList.width()) -
            parseInt(infoImgListItem.width()) * countInfoImgListItem) /
          (countInfoImgListItem - 1),
      });

      $(".chank3").append(infoImgList);
      $(".chank3").append(peopleInfo);

      chek1 = chek2 = chek3 = chek4 = chek5 = false;
    }

    peopleImg.css({ "background-color": select.attr("data-color") });

    peopleImg.height(
      $(".info-wraper").height() -
        parseInt(infoImgListItem.css("margin-bottom"))
    );
    if (windowWidth > 850) {
      peopleImg.width($(".info-wraper").height() * 0.7);
    } else {
      peopleImg.width($(".info-wraper").height() * 0.8);
    }
  }

  function buregerToggle() {
    let bodyWidth = $("body").width();

    if (bodyWidth <= 568) {
        
      if (on) {
        $(".menu").css({ 'top': -500, 'display': 'block', });
        bureger.removeClass("burger-active");
        on = false;
      } else {
        $(".menu").css({ 'top': 0, 'display': 'block', });
        bureger.addClass("burger-active");
        on = true;
      }
        
      
    }
  }


  let backgroundHeader = $(".background__header");
  let backgroundOffers = $(".background__offers");
  let backgroundFooter = $(".background__footer");

  let row = $(".row");
  let bureger = $(".row__burger");
  let header = $(".header");
  let headerVidio = $(".header__vidio");
  let prouctsMenuContainer = $(".proucts-menu__container");
  let prouctsMenuItem = $(".proucts-menu__item");
  let peopleImg = $(".people__img");
  let peopleInfo = $(".people__info");
  let infoImgList = $(".img-list");
  let infoImgListItem = $(".img-list__item");
  let buttonHegth = $(".button-hegth");
  let contactInfoContainer = $(".contact-info-container");
  let chank4 = $(".chank4");
  let footer = $(".footer");

  let on = false;
  let chek1 = chek2 = chek3 = chek4 = chek5 = false;

  $(".proucts-menu").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    asNavFor: ".slick-dots-my",
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".slick-dots-my").slick({
    arrows: false,
    variableWidth: true,
    centerMode: true,
    asNavFor: ".proucts-menu",
  })

  $("[aria-label='1 of 5']").text("all");
  $("[aria-label='2 of 5']").text("print template");
  $("[aria-label='3 of 5']").text("web template");
  $("[aria-label='4 of 5']").text("user interface");
  $("[aria-label='5 of 5']").text("mock-up");


  cssControlResize();
  setTimeout(cssControlResize, 500);
  setInterval(cssControl, 10);


  $(window).scroll(() => {
    cssControlScrol();
  });

  $(window).resize(() => {
    cssControlResize();
    setTimeout(cssControlResize, 500);
  });

  $(".row__burger-wraper").on("click", (e) => {
    buregerToggle();
  });

  $(".row__item").on("click", (e) => {
    buregerToggle();
  });

  $("a.scrollto").click(function () {
    let elementClick = $(this).attr("href")
    let destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  $(".img-list").on("click", (e) => {
    let item = e.target.closest(".img-list__item");

    $(".select").removeClass("select");
    item.classList.add("select");
  });
});
