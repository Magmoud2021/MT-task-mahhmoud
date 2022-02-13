<template>
  <section class="services-page">
    <TopPhoto :bg-img="Setting.clinics_header_image" />

    <SideSectionHeadline :title="$t('menu.hospitals')" />

    <div class="container">
      <div class="row">
        <ClinicUnit
          v-for="clinic in clinics"
          :key="clinic.id"
          :clinic="clinic"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import { fetchStore } from "~/mixin/fetchStore";
export default {
  name: "HospitalsPage",
  nuxtI18n: {
    paths: {
      ar: `/${encodeURI("hospitals")}`,
      en: `/hospitals`,
    },
  },
  mixins: [
    fetchStore([
      // {
      //   stateName: 'subTitles',
      // },
      {
        stateName: "clinics",
      },
      // {
      //   stateName: 'contactUs',
      // },
    ]),
    // updateSeo('seoObj'),
  ],
  computed: {
    ...mapGetters(["Setting"]),
    // seoObj() {
    //   return this.contactUs?.clinics_seo
    // },
  },
  mounted() {
    this.$store.dispatch("clinic/reset_en_clinic");
    this.$store.dispatch("clinic/reset_ar_clinic");
  },
};
</script>
