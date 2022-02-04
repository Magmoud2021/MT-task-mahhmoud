<template>
  <header class="header">

    <div class="header__container container">
      <div class="header__row row">
        <div
          class="
            header__col header__col--logo
            col-12 col-md-3
            d-none d-sm-block
          "
        >
          <nuxt-link :to="localePath('/')" class="hold-logo"
            ><img src="~/assets/images/logo/logo.webp" alt="logo"
          /></nuxt-link>
        </div>

        <div
          class="
            header__col header__col--actions
            col-12 col-md-9
            d-flex
            align-items-center
            justify-content-end
          "
        >
          <div class="right d-flex align-items-center">
            <Btn :text="$t('mtPrograms')" :url="localePath('/mt-programs')" />
            

            <form v-if="showForm" @submit.prevent="searchSubmit">
              <div class="header__search form-group">
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
              <span class="search__text pe-0">{{ $t('SearchTitle') }}</span>
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

                <span class="lang__name ps-0">{{ $i18n.locales[0].name }}</span>
              </nuxt-link>
              <nuxt-link
                v-if="$i18n.locale !== 'ar'"
                :to="switchLocalePath('ar')"
                class="lang__text"
              >
                <img
                  src="/assets/images/lang-flags/ic_langauge.png"
                  alt="Language Flag"
                />

                <span class="lang__name pe-0">{{ $i18n.locales[1].name }}</span>
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>
    </div>


  </header>
</template>

<script>
import { fetchStore } from '~/mixin/fetchStore'

export default {
  name: 'Header',
  mixins: [
    fetchStore(
      [
        {
          stateName: 'subTitles',
        },
      ],
      true
    ),
  ],
  data() {
    return {
      showForm: false,
      inputs: {
        search: null,
      },
    }
  },
  computed: {
    isBlog() {
      const blogArName = encodeURI('المدونة')
      const regEx = new RegExp(blogArName)
      return this.$route.path.match(regEx) !== null
    },
  },
  mounted() {
    this.$nextTick(function () {
      // show or hide search input
      window.addEventListener('load', () => {
        const searchInput = document.querySelector('.header__search')

        if (searchInput) {
          document.body.addEventListener('click', function (e) {
            if (
              e.target.closest('.header__search') == null &&
              e.target.closest('.search') == null
            ) {
              searchInput.style.display = 'none'
            }
          })
        }
      })
    })
  },
  methods: {
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
      this.showForm = !this.showForm
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/css/var.scss';

.header {
  &__container {
    @media screen and (max-width: 992px) {
      max-width: 95%;
    }
  }

  &__row {
    @media screen and (max-width: 820px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }
  }

  &__col {
    &--actions {
      padding: 0;

      @media screen and (max-width: 820px) {
        justify-content: space-between !important;
      }
    }
  }

  .btn {
    margin: 0 45px;

    @media screen and (max-width: 820px) {
      margin: 0;
    }
  }

  &__search {
    position: relative;
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

span {
  padding: 0 8px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
}

.lang {
  position: relative;
  top: -2px;
  padding-left: 0;

  &__text {
    @extend .textSm__family;
    color: map-get($colors, accent);
    font-weight: 600;
    text-transform: capitalize;
  }

  img {
    max-height: 25px;
  }

  &:lang(en) {
    padding-right: 0;
  }

  @media screen and (max-width: 768px) {
    top: 0;
  }
}

.right {
  text-align: right;

  @media screen and (max-width: 820px) {
    width: 100%;
    justify-content: space-between !important;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin: 5px 0 !important;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column-reverse;
  }
}

.hold-logo {
  display: block;
  height: auto;
  margin: 17px 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }

  img {
    height: 50px;
    object-fit: contain;
    display: block;
    transform: translateX(-5px);

    &:lang(ar) {
      transform: translateX(5px);
    }
  }
}

.right:lang(ar) {
  text-align: left;
}

.active-link,
.exact-active-link {
  background-color: transparent !important;
}

.vr__line {
  display: inline-block;
  margin: 0 22px;
  padding: 0;
  width: 2px;
  height: 30px;
  background-color: map-get($colors, accent);
  transform: translateY(-2px);

  @media screen and (max-width: 550px) {
    display: none;
  }
}

.search {
  margin: 0;
  padding: 0;

  &__icon {
    color: map-get($colors, accent);
  }

  &__text {
    @extend .lang__text;

    &:lang(ar) {
      padding-right: 8px !important;
      padding-left: 0;
    }
  }

  @media screen and (max-width: 550px) {
    display: none;
    margin: 15px 0;
  }
}
</style>
