<template>
  <div class="fixedMenu">
    <div class="fixedMenu__container container">
      <nav
        id="navbar_top"
        class="fixedMenu__navbar navbar navbar-expand-lg"
        style="display: none"
      >
        <div class="fixedMenu__containerFluid container-fluid">
          <nuxt-link :to="localePath('/')"
            ><img
              src="~/assets/images/logo/logo.webp"
              alt="logo"
              class="fixedMenu__logo"
          /></nuxt-link>

          <button
            class="fixedMenu__mobileBtn navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i class="fixedMenu__mobileIcon fas fa-bars"></i>
            </span>
          </button>

          <div
            id="navbarNav"
            class="collapse navbar-collapse w-100 justify-content-between"
          >
            <nuxt-link :to="localePath('/')"
              ><img
                src="~/assets/images/logo/logo.webp"
                alt="logo"
                class="fixedMenu__logo--pc"
            /></nuxt-link>
            <ul v-if="!showForm" class="navbar-nav">
              <li class="fixedMenu__item nav-item">
                <nuxt-link
                  class="fixedMenu__link nav-link"
                  :to="aboutLink"
                  exact
                >
                  {{ $t('about_us') }}
                </nuxt-link>
              </li>

              <li class="fixedMenu__item nav-item">
                <nuxt-link
                  class="fixedMenu__link nav-link"
                  :to="localePath('/hospitals')"
                  exact
                  role="button"
                >
                  {{ $t('menu.hospitals') }}
                </nuxt-link>
              </li>

              <li class="fixedMenu__item nav-item dropdown">
                <nuxt-link
                  id="navbarDropdownMenuLink"
                  class="fixedMenu__link nav-link dropdown-toggle"
                  :to="localePath('/doctors')"
                  exact
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ $t('menu.doctors') }}
                </nuxt-link>

                <ul
                  class="fixedMenu__dropdown dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <nuxt-link
                      class="dropdown-item"
                      :to="localePath(`/doctors`)"
                      exact
                      >{{ $t('menu.andalusia_doctors') }}
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link
                      class="dropdown-item"
                      :to="localePath(`/visitor-doctors`)"
                      exact
                      >{{ $t('menu.visitor_doctors') }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>

              <li class="fixedMenu__item nav-item dropdown">
                <nuxt-link
                  id="navbarDropdownMenuLink"
                  class="fixedMenu__link nav-link"
                  :to="localePath('/services')"
                  exact
                >
                  {{ $t('menu.services') }}
                </nuxt-link>
              </li>

              <li class="fixedMenu__item nav-item dropdown">
                <nuxt-link
                  id="navbarDropdownMenuLink"
                  class="fixedMenu__link nav-link"
                  :to="offersLink"
                  exact
                >
                  {{ $t('menu.offers') }}
                </nuxt-link>
              </li>

              <li class="fixedMenu__item nav-item">
                <nuxt-link
                  v-if="$i18n.locale == 'ar'"
                  class="fixedMenu__link nav-link"
                  :to="localePath(`/${encodeURI('المدونة')}`)"
                  exact
                  >{{ $t('menu.blog') }}</nuxt-link
                >
              </li>

              <li class="fixedMenu__item nav-item">
                <nuxt-link
                  class="fixedMenu__link nav-link"
                  :to="contactLink"
                  exact
                >
                  {{ $t('contactUs') }}
                </nuxt-link>
              </li>
            </ul>
            <div class="btns-holder">
              <Btn
                class="mtBtn"
                :text="$t('mtPrograms')"
                :url="localePath('/mt-programs')"
              />

              <form v-if="showForm" @submit.prevent="searchSubmit">
                <div class="header__fsearch form-group">
                  <input
                    v-model="inputs.search"
                    type="text"
                    class="form-control"
                    :placeholder="$t('searchDoctor')"
                  />

                  <button type="submit">
                    <i class="fas fa-arrow-circle-right"></i>
                  </button>
                </div>
              </form>
              <button class="search" @click="searchBtnHandler">
                <i class="search__icon fas fa-search"></i>
              </button>
              <span v-if="!isBlog" class="vr__line"></span>
              <span class="lang" role="button">
                <nuxt-link
                  v-if="
                    $i18n.locale !== 'en' &&
                    this.$route.path !=
                      '/%D8%A7%D9%84%D9%85%D8%AF%D9%88%D9%86%D8%A9'
                  "
                  :to="switchLocalePath('en')"
                  class="lang__text"
                >
                  <img
                    src="~/assets/images/lang-flags/ic_langauge.png"
                    alt="Language Flag"
                  />
                </nuxt-link>
                <nuxt-link
                  v-if="$i18n.locale !== 'ar'"
                  :to="switchLocalePath('ar')"
                  class="lang__text"
                >
                  <img
                    src="~/assets/images/lang-flags/ic_langauge.png"
                    alt="Language Flag"
                  />
                </nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedMenu',
  data() {
    return {
      showForm: false,
      inputs: {
        search: null,
      },
    }
  },
  computed: {
    aboutLink() {
      return this.$i18n.locale === 'en' ? '/en/about_us' : encodeURI('/من-نحن')
    },
    contactLink() {
      return this.$i18n.locale === 'en'
        ? '/en/contact-us'
        : encodeURI('/اتصل-بنا')
    },
    offersLink() {
      return this.$i18n.locale === 'en' ? '/en/offers' : encodeURI('/العروض')
    },
    isBlog() {
      const blogArName = encodeURI('المدونة')
      const regEx = new RegExp(blogArName)
      return this.$route.path.match(regEx) !== null
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.fixedMenu()
    })
  },
  methods: {
    fixedMenu() {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 150) {
          document.getElementById('navbar_top').classList.add('fixed-top')
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top')
        }
      })
    },
    searchSubmit() {
      if (this.$i18n.locale === 'en') {
        this.$router.push(this.localePath(`/search/${this.inputs.search}`))
      } else {
        this.$router.push(
          this.localePath(`/${encodeURI('البحث')}/${this.inputs.search}`)
        )
      }
      this.showForm = false
    },
    searchBtnHandler() {
      console.log('clicked!')
      this.showForm = !this.showForm
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/var.scss';

// stylelint-disable no-descending-specificity
.fixedMenu {
  // display: none;
  border-top: $border;

  &__navbar {
    @media screen and (min-width: 992px) {
      padding: 1rem 6%;
    }
    @media screen and (max-width: 992px) {
      padding: 1rem 1rem;
    }
    background-color: #fff !important;
  }
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
    &--pc {
      width: 250px;
      @media screen and (max-width: 769px) {
        display: none !important;
      }
    }
  }

  &__item {
    position: relative;

    @media screen and (max-width: 991px) {
      margin: 8px 0;
    }

    &::after {
      content: '';
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

        [class*='__link'] {
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

// style for fixedMenu

.fixed-top {
  display: flex !important;
  position: fixed;
  -webkit-box-shadow: 0 7px 5px 1px rgba(0, 0, 0, 0.09);
  box-shadow: 0 7px 5px 1px rgba(0, 0, 0, 0.09);
  // top: 0;
}

.btns-holder {
  display: flex;
  align-items: center;
}

.search {
  padding: 0;

  &__icon {
    color: map-get($colors, accent);
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
}

.vr__line {
  display: inline-block;
  padding: 0;
  width: 1px;
  height: 30px;
  background-color: map-get($colors, accent);
  transform: translateY(-2px);
  margin: 0 1rem;

  @media screen and (max-width: 992px) {
    display: none;
  }
}

.lang {
  position: relative;
  top: -2px;
  padding-left: 0;

  img {
    max-height: 25px;
  }

  &:lang(en) {
    padding-right: 0;
  }

  @media screen and (max-width: 768px) {
    top: 0;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
}

.mtBtn {
  margin: 0 1rem;
  @media screen and (max-width: 992px) {
    display: none;
  }
}

.header {
  &__fsearch {
    position: relative;
    // display: none;
    margin: 0 15px 0 0;

    &:lang(ar) {
      margin: 0 0 0 15px;
    }

    @media screen and (max-width: 550px) {
      display: inline-block !important;
      margin: 15px 0 !important;
    }

    .form-control {
      padding-right: 35px;

      &:lang(ar) {
        padding-left: 35px;
        padding-right: 12px;
      }
    }

    button {
      position: absolute;
      top: 12%;
      right: 5px;
      color: map-get($colors, accent);

      &:lang(ar) {
        left: 2%;
        right: unset;
      }
    }
  }
}
</style>
