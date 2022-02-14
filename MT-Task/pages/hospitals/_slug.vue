<template>
  <div class="clinic-slug">
    <TopPhoto :bg-img="Setting.clinics_header_image" />
    <div class="container mt-3">
      <h3>{{ clinic.name }}</h3>
      <!--eslint-disable vue/no-v-html-->
      <div class="service-content" v-html="clinic.description"></div>
      <!-- share social media -->
      <!-- <ShareSocial /> -->
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HospitalPage",
  layout: 'contactUsLayout',
  nuxtI18n: {
    paths: {
      ar: `/${encodeURI("hospitals")}/:slug`,
      en: `/hospitals/:slug`,
    },
  },
  validate({ app, params, store }) {
    const thePromise = new Promise(async (resolve, reject) => {
      if (app.i18n.locale === "en") {
        if (!store.state.clinic.en_loaded) {
          await store.dispatch("clinic/load_en_clinic", params.slug);
        }

        resolve(store.state.clinic.en_clinic);
      } else {
        if (!store.state.clinic.ar_loaded) {
          await store.dispatch("clinic/load_ar_clinic", params.slug);
        }

        resolve(store.state.clinic.ar_clinic);
      }
    });

    return thePromise.then((data) => {
      return data.slug === params.slug;
    });
  },
  async fetch() {
    if (!this.$store.state.clinic.en_loaded) {
      await this.$store.dispatch(
        "clinic/load_en_clinic",
        this.$route.params.slug
      );
    }

    if (!this.$store.state.clinic.ar_loaded) {
      await this.$store.dispatch(
        "clinic/load_ar_clinic",
        this.$route.params.slug
      );
    }

    await this.$store.dispatch("i18n/setRouteParams", {
      ar: { slug: this.ar_clinic.slug },
      en: { slug: this.en_clinic.slug },
    });
  },
  computed: {
    ...mapGetters(["Setting"]),
    ...mapState("clinic", ["en_clinic", "ar_clinic"]),
    clinic() {
      return this.$i18n.locale === "en" ? this.en_clinic : this.ar_clinic;
    },
  },
};
</script>
<style lang="scss">
.service-content {
  .subtitle {
    position: relative;
    top: 20px;

    @media screen and (max-width: 768px) {
      top: 0;
    }
  }

  .title {
    img {
      width: 80px;
      height: 84px;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }

  img.w-100 {
    height: 300px;
  }
}

.clinic-slug {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 3rem 0 1.5rem 0;
    color: #5d5d5d;
    text-transform: capitalize;
    font-weight: bold;

    &::after {
      content: '';
      width: 7%;
      display: block;
      height: 3px;
      border-radius: 0.3rem;
      background: #31aaa7;
      margin-top: 1.5rem;
    }
  }
}
</style>
