<template>
  <section class="wrapper">
    <header class="header">
      <div class="header__upper">
        <div class="container container--px">
          <div class="row">
            <!-- social media -->
            <div class="col-12 col-lg-3 px-0 social-header my-1">
              <div class="social">
                <a
                  :href="Setting.facebook"
                  class="social__item"
                  target="_blank"
                >
                  <i class="fab fa-facebook-square social__icon"></i>
                </a>

                <a :href="Setting.twitter" class="social__item" target="_blank">
                  <i class="fab fa-twitter-square social__icon"></i>
                </a>

                <a
                  :href="Setting.instagram"
                  class="social__item"
                  target="_blank"
                >
                  <i class="fab fa-instagram-square social__icon"></i>
                </a>

                <a :href="Setting.youtube" class="social__item" target="_blank">
                  <i class="fab fa-youtube-square social__icon"></i>
                </a>
              </div>
            </div>
            <!-- Phone and mail -->
            <div class="col-12 col-lg-6 px-0 text-center my-1">
              <a :href="'tel:' + Setting.hotline" class="menu menu--has-mr dico">
                <i class="fas fa-phone menu__icon"></i>

                <span class="menu__text">{{ Setting.hotline }}</span>
              </a>

              <a :href="'mailto:' + Setting.email" class="menu menu--has-mr  dico">
                <i class="fas fa-envelope menu__icon"></i>

                <span class="menu__text">{{ Setting.email }}</span>
              </a>
            </div>
            <!-- screen zooming -->
            <div class="col-12 col-lg-3 px-0 fix-header my-1">
              <div class="btn-trans">
                <button
                  class="btn-trans__item"
                  title="increase text size"
                  @click="zoomPlus"
                >
                  <span class="btn-trans__title">A</span>

                  <i class="fas fa-plus btn-trans__icon"></i>
                </button>

                <button
                  class="btn-trans__item"
                  title="reset text size"
                  @click="zoomReset"
                >
                  <span class="btn-trans__title">A</span>
                </button>

                <button
                  class="btn-trans__item"
                  title="decrease text size"
                  @click="zoomMinus"
                >
                  <span class="btn-trans__title">A</span>

                  <i class="fas fa-minus btn-trans__icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TopHeader',
  data() {
    return {
      windowWidth: null,
    }
  },
  computed: {
    ...mapGetters(['Setting']),
  },
  beforeMount() {
    this.windowSize()
  },
  methods: {
    windowSize() {
      if (process.client) {
        this.windowWidth = window.outerWidth
      }
    },
    zoomMinus() {
      document.querySelector('*').style.cssText = 'zoom: 90%'
      document.querySelector('*').style.cssText += '-moz-transform: scale(0.8)'
      document.querySelector('*').style.cssText +=
        '-moz-transform-origin: center 0'
      document.body.classList.add('zoom-out')
      document.body.classList.remove('zoom-in')
    },
    zoomReset() {
      document.querySelector('*').style.cssText = 'zoom: normal'
      document.body.classList.remove('zoom-in')
      document.body.classList.remove('zoom-out')
    },
    zoomPlus() {
      document.querySelector('*').style.cssText = 'zoom: 120%'
      document.querySelector('*').style.cssText += '-moz-transform: scale(1.1)'
      document.querySelector('*').style.cssText +=
        '-moz-transform-origin: left 0'
      document.body.classList.add('zoom-in')
      document.body.classList.remove('zoom-out')
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.container {
  &--max {
    @media screen and (max-width: 991px) {
      max-width: 100%;
    }
  }

  &--px {
    @media screen and (min-width: 992px) {
      padding: 0 30px 0 40px;
    }
  }
}

.flex {
  display: flex;
  align-items: center;

  &--row {
    flex-direction: row;
  }

  &--col {
    flex-direction: column;
  }
}

.header {
  position: relative;
  overflow: hidden;

  &__upper {
    background-color: #0a3a5f;
    padding: 8px 0;
  }

  &__lower {
    &--100 {
      height: 100vh;
    }
  }

  &__col {
    @media screen and (max-width: 1199px) {
      width: 100%;
    }

    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;

      &--mb {
        margin-bottom: 15px;
      }

      &--space {
        > * {
          margin-bottom: 10px;
        }
      }
    }

    &--vcenter {
      line-height: 2;
    }

    &--100 {
      @media screen and (max-width: 1200px) {
        justify-content: center !important;
        text-align: center;
      }
    }

    &--space {
      @media screen and (max-width: 500px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between !important;
      }

      @media screen and (min-width: 501px) and (max-width: 767px) {
        margin-top: 10px;
      }
    }
  }

  &__row,
  &__flex {
    justify-content: space-between;
  }

  &__flex {
    justify-content: flex-end;

    & > * {
      margin-right: 5px;
    }
  }
}

.social {
  display: inline-block;
  line-height: 1;

  @media all and (min-width: 768px) {
    margin-right: 60px;
  }

  @media all and (max-width: 500px) {
    margin: 0;
    padding-left: 20px;
  }

  &__item {
    margin-right: 22px;

    &:last-of-type {
      margin-right: 0;
    }

    @media all and (max-width: 767px) {
      font-size: 22px;
    }
  }

  &__icon {
    color: #fff;
    font-size: 24px;
  }
}

.menu {
  font-size: 13px;
  margin-right: 5px;

  &--location {
    display: inline-block;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
  }

  &--profile {
    @media screen and (max-width: 1199px) {
      display: none;
    }
  }

  &__icon {
    margin-right: 4px;
    color: #fff;

    &--lang {
      margin-right: 0;
      font-size: 20px;
      color: #fff;
    }

    &--shift {
      color: #fff;
      transform: translateY(-3px);
    }
  }

  &__text {
    color: #fff;
  }

  &--select {
    background: none;
    border: none;
    margin-right: 0;
    padding-right: 0;

    @media screen and (min-width: 501px) and (max-width: 767px) {
      padding: 0 15px;
    }
  }

  &--has-mr {
    margin-right: 15px;

    @media all and (max-width: 500px) {
      margin: 0 !important;
    }
  }

  &--desktop {
    @media all and (max-width: 500px) {
      display: flex;
    }
  }

  &--mobile {
    margin: 0;
    padding: 0 15px 0 5px;

    @media all and (min-width: 501px) {
      display: none;
    }
  }
}

.select {
  position: relative;
  z-index: 99;

  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-right: 0;
  }

  &__list {
    position: absolute;
    padding: 5px 15px;
    bottom: -60px;
    background: #fff;

    &:not(.active) {
      display: none;
    }
  }

  &__current {
    margin: 0 8px;
    color: #fff;
  }

  &__lang {
    height: auto;
    margin-bottom: 5px;
    font-size: 11px;
    font-weight: normal;
    color: #007bff !important;

    &.exact-active-link {
      font-weight: bold;
    }
  }
}

.btn-trans {
  &__item {
    margin-right: 22px;
    width: 28px;
    height: 26px;
    padding: 0 0.1rem;
    color: #fff;
    font-size: 11px;
    border: 1.5px solid #fff;
    border-radius: 3.4px;
    background-color: transparent;
    &:active {
      background-color: #fff;
      color: #0a3a5f;
    }
    &:hover {
      background-color: #fff;
      color: #0a3a5f;
    }
  }
  @media screen and (max-width: 991px) {
    display: none;
  }

  @media screen and (min-width: 501px) and (max-width: 767px) {
    margin: 0 10px !important;
    transform: translateY(-2px);
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
}
.fix-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.social-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 991px) {
    justify-content: center;
  }
}
body:lang(ar) {
  .menu {
    &__icon {
      margin-right: unset;
      margin-left: 4px;
    }

    &--has-mr {
      margin-right: unset;
      margin-left: 15px;
    }

    &--profile {
      margin-right: unset;
      margin-left: 10px;
    }
  }

  .social {
    @media all and (min-width: 768px) {
      margin-right: unset;
      margin-left: 60px;
    }

    @media all and (max-width: 500px) {
      padding-right: 20px;
    }

    &__item {
      margin-right: 22px;

      &:first-of-type {
        margin-right: 0;
      }
      @media (max-width: 992px) {
        margin-right: 15px;
      }
    }
  }
}
.dico{
  text-decoration: none;
}
</style>
