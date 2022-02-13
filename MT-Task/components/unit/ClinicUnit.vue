<template>
  <div class="col-lg-4 col-md-6 col-12 mb-4">
    <nuxt-link to="/hospitals">
      <div class="clinic_unit">
        <img
          :src="clinic.photo"
           class="clinic_unit--img"
          :title="clinic.image_title"
          :alt="'clinic.image_alt'"
        />

       <h3 class="clinic_unit--heading">{{ clinic.name }}</h3>

        <p class="clinic_unit--paragraph dico">
          {{ clinic.small_description | cutParagraph }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ClinicUnit',
  filters: {
    cutParagraph(value) {
      if (value.length > 200) {
        return value.slice(0, 150) + '...'
      } else {
        return value
      }
    },
  },
  props: {
    clinic: {
      
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
.clinic_unit {
  text-align: center;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 10px 0 rgba(34, 31, 31, 0.24);
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  &--img {
    width: 95px;
    height: 95px;
    object-fit: cover;
    display: block;
    margin: 0 auto 2rem auto;
  }

  &--heading {
    font-size: 24px;
    color: #5d5d5d;
    height: 27px;
    overflow: hidden;



  }

  &--paragraph {
    font-size: 16px;
    color: #737373;
    height: 70px;
    overflow: hidden;

  }

  &:hover {
    background: #f1f1f1;
    box-shadow: 0 0 4px 4px #f1f1f1;
  }
}
 a{
   text-decoration:none;
}
</style>
