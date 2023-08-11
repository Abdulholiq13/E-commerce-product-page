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
const elProductPageGallery = document.querySelector(".product-page__gallery");
const elImgShowcaseActiveImg = elProductPageGallery.querySelector(
  ".img-showcase__active-img"
);
const elsImgShowcaseThumbnailButton = elProductPageGallery.querySelectorAll(
  ".js-img-showcase-thumbnail-button"
);

const elsImgThumbnail = elProductPageGallery.querySelectorAll(
  ".img-showcase__thumbnail"
);

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

const elImgLightboxActiveImg = elLightBox.querySelector(
  ".img-showcase__active-img--lightbox"
);
const elsImgLightboxThumbnailButton = elLightBox.querySelectorAll(
  ".js-img-lightbox-thumbnail-button"
);
const elsLightboxImgThumbnail = elLightBox.querySelectorAll(
  ".img-showcase__thumbnail"
);

elsImgLightboxThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener("click", function () {
    elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifier.imgThumbnailActive);
    });

    elButton.parentElement.classList.add(modifier.imgThumbnailActive);

    elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
  });
});

// Lightbox control
const elLightboxControlPrev = elLightBox.querySelector(
  ".js-lightbox-control-prev"
);
const elLightboxControlNext = elLightBox.querySelector(
  ".js-lightbox-control-next"
);

let elNextActiveItem;

if (elLightboxControlNext) {
  elLightboxControlNext.addEventListener("click", function () {
    //Find active li element
    const elActiveItem = elLightBox.querySelector(
      ".img-showcase__thumbnail--active"
    );
    //Remove active li element's styles
    elActiveItem.classList.remove(modifier.imgThumbnailActive);

    if (elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[0];
    } else {
      elNextActiveItem = elActiveItem.nextElementSibling;
    }
    elNextActiveItem.classList.add(modifier.imgThumbnailActive);

    elImgLightboxActiveImg.src =
      elNextActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
  });
}

if (elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener("click", function () {
    //Find active li element
    const elActiveItem = elLightBox.querySelector(
      ".img-showcase__thumbnail--active"
    );
    //Remove active li element's styles
    elActiveItem.classList.remove(modifier.imgThumbnailActive);

    if (elActiveItem.previousElementSibling === null) {
      elNextActiveItem =
        elsLightboxImgThumbnail[elsLightboxImgThumbnail.length - 1];
    } else {
      elNextActiveItem = elActiveItem.previousElementSibling;
    }
    elNextActiveItem.classList.add(modifier.imgThumbnailActive);

    elImgLightboxActiveImg.src =
      elNextActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
  });
}

// PRODUCT COUNT
const elProductQtyDecrementButton = document.querySelector(
  ".js-product-quantity-decrement-button"
);
const elProductQtyIncrementButton = document.querySelector(
  ".js-product-quantity-increment-button"
);
const elProductQty = document.querySelector(".product-info-quantity");

if (elProductQtyIncrementButton) {
  elProductQtyIncrementButton.addEventListener("click", function () {
    elProductQty.textContent = parseInt(elProductQty.textContent, 10) + 1;
  });
}
if (elProductQtyDecrementButton) {
  elProductQtyDecrementButton.addEventListener("click", function () {
    const qty = parseInt(elProductQty.textContent, 10);

    if (qty > 0) {
      elProductQty.textContent = parseInt(elProductQty.textContent, 10) - 1;
    }
  });
}
