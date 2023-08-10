const modifier = {
  siteHeaderCartModalopen: "site-header__cart-modal--open",
  imgThumbnailActive: "img-showcase__thumbnail--active",
  lightBoxOpen: "lightbox--open",
};

// Shopping cart modal
const elSiteHeaderCartLink = document.querySelector(
  ".js-site-header-cart-link"
);
const elSiteHeaderCartModal = document.querySelector(
  ".site-header__cart-modal"
);

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener("click", function (evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle(modifier.siteHeaderCartModalopen);
  });
}

// Img showcase
const elImgShowcaseActiveImg = document.querySelector(
  ".img-showcase__active-img"
);
const elsImgShowcaseThumbnailButton = document.querySelectorAll(
  ".js-img-showcase-thumbnail-button"
);
const elsImgThumbnail = document.querySelectorAll(".img-showcase__thumbnail");

elsImgShowcaseThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener("click", function () {
    elsImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifier.imgThumbnailActive);
    });

    elButton.parentElement.classList.add(modifier.imgThumbnailActive);

    elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina}`;
  });
});

// LIGHTBOX
const elLightBox = document.querySelector(".lightbox");
const elLightboxToggler = document.querySelector(".js-lightbox-toggler");
const elLightBoxClose = document.querySelector(".js-lightbox-close");

if (elLightboxToggler) {
  elLightboxToggler.addEventListener("click", function () {
    elLightBox.classList.add(modifier.lightBoxOpen);
  });
}

if (elLightBoxClose) {
  elLightBoxClose.addEventListener("click", function () {
    elLightBox.classList.remove(modifier.lightBoxOpen);
  });
}
