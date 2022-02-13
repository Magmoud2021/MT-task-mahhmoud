<template>
  <div class="menu">
    <div class="menu__container container">
      <nav class="navbar navbar-expand-lg p-0">
        <div class="menu__containerFluid container-fluid">
          <nuxt-link to="/"
            ><img
              src="~/assets/images/logo/logo.webp"
              alt="logo"
              class="menu__logo"
          /></nuxt-link>

          <button
            class="menu__mobileBtn navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i class="menu__mobileIcon fas fa-bars"></i>
            </span>
          </button>

          <div
            id="navbarNav"
            class="collapse navbar-collapse w-100 justify-content-between"
          >
            <ul class="navbar-nav">
              <li class="menu__item nav-item">
                <nuxt-link class="menu__link nav-link" to="/" exact>
                  {{ $t("about_us") }}
                </nuxt-link>
              </li>

              <li class="menu__item nav-item">
                <nuxt-link
                  class="menu__link nav-link"
                  to="/"
                  exact
                  role="button"
                >
                  {{ $t("menu.hospitals") }}
                </nuxt-link>
              </li>

              <li class="menu__item nav-item dropdown">
                <nuxt-link
                  id="navbarDropdownMenuLink"
                  class="menu__link nav-link dropdown-toggle"
                  to="/"
                  exact
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ $t("menu.doctors") }}
                </nuxt-link>

                <ul
                  class="menu__dropdown dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <nuxt-link class="dropdown-item" to="/" exact
                      >{{ $t("menu.andalusia_doctors") }}
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link class="dropdown-item" to="/" exact
                      >{{ $t("menu.visitor_doctors") }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>

              <li class="menu__item nav-item dropdown">
                <nuxt-link
                  id="navbarDropdownMenuLink"
                  class="menu__link nav-link"
                  to="/"
                  exact
                >
                  {{ $t("menu.services") }}
                </nuxt-link>
              </li>

              <li class="menu__item nav-item dropdown">
                <nuxt-link
                  id="navbarDropdownMenuLink"
                  class="menu__link nav-link"
                  to="/"
                  exact
                >
                  {{ $t("menu.offers") }}
                </nuxt-link>
              </li>

              <li class="menu__item nav-item">
                <nuxt-link
                  v-if="$i18n.locale == 'ar'"
                  class="menu__link nav-link"
                  to="/"
                  exact
                  >{{ $t("menu.blog") }}</nuxt-link
                >
              </li>

              <li class="menu__item nav-item">
                <nuxt-link
                  v-if="$i18n.locale == 'ar'"
                  class="menu__link nav-link"
                  to="/"
                  exact
                  >{{ $t("events") }}
                </nuxt-link>
              </li>

              <li class="menu__item nav-item">
                <nuxt-link class="menu__link nav-link" to="/" exact>
                  {{ $t("contactUs") }}
                </nuxt-link>
              </li>
            </ul>

            <SocialMedia />
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    aboutLink() {
      return this.$i18n.locale === "en" ? "/en/about_us" : encodeURI("/من-نحن");
    },
    contactLink() {
      return this.$i18n.locale === "en"
        ? "/en/contact-us"
        : encodeURI("/اتصل-بنا");
    },
    offersLink() {
      return this.$i18n.locale === "en" ? "/en/offers" : encodeURI("/العروض");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/var.scss";

// stylelint-disable no-descending-specificity
.menu {
  border-top: 2px solid rgba(19, 67, 142, 0.5);
  padding: 5px 0;

  &__container,
  &__containerFluid {
    padding: 0;
  }

  &__container {
    @media screen and (max-width: 992px) {
      max-width: 95%;
    }
  }

  &__containerFluid {
    @media screen and (max-width: 992px) {
      justify-content: space-between !important;
    }
  }

  &__logo {
    max-height: 50px;

    @media screen and (min-width: 769px) {
      display: none;
    }
  }

  &__item {
    position: relative;

    @media screen and (max-width: 991px) {
      margin: 8px 0;
    }

    &::after {
      content: "";
      position: absolute;
      top: 18%;
      right: 0;
      width: 2px;
      height: 18px;
      border-right: $border;
      border-width: 2px;

      @media screen and (max-width: 992px) {
        display: none;
      }
    }

    &:lang(en) {
      &:last-of-type {
        &::after {
          display: none;
        }
      }
    }

    &:lang(ar) {
      &:first-of-type {
        &::after {
          display: none;
        }

        [class*="__link"] {
          padding-right: 0 !important;
        }
      }
    }
  }

  &__link {
    @extend .textSm__family;
    padding: 0 15px !important;
    color: map-get($colors, accent);
    text-transform: capitalize;

    &:hover {
      color: map-get($colors, lightAccent);
    }

    @media screen and (max-width: 991px) {
      padding: 0 !important;
    }
  }

  &__dropdown {
    border-color: map-get($colors, accent);

    .dropdown-item {
      text-transform: capitalize;

      // &:hover {
      //   @extend .menu__link:hover;
      // }
    }
  }

  &__mobileBtn {
    line-height: 1.5;
    outline: unset;
    box-shadow: unset;
    padding-left: 0;
    padding-right: 0;

    transform: translateX(-5px);
  }

  &__mobileIcon {
    color: map-get($colors, accent);
  }
}
</style>
