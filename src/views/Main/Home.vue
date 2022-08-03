<template>
  <div class="container">
    <div class="container__form">
      <ItemAddForm />
    </div>
    <div class="container__catalog">
      <CatalogList />
    </div>
  </div>
</template>

<script>
import ItemAddForm from "@/components/ItemAddFrom/ItemAddForm.vue";
import CatalogList from "@/components/Catalog/CatalogList.vue";
export default {
  name: "Home",
  components: {
    ItemAddForm,
    CatalogList,
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  @media (max-width: 1416px) {
    flex-direction: column;
    .container {
      &__form {
        width: 100%;
        max-width: 450px;
        margin: 0 auto;
      }
      &__catalog {
        width: 100%;
      }
    }
  }
  &__form {
    width: 21%;
  }
  &__catalog {
    width: 80%;
  }
}
</style>
