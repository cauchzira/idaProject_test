<template>
  <div class="catalog">
    <p class="catalog__filter">FILTER</p>
    <ul class="catalog__list">
      <CatalogCard v-for="index in limit" :key="index" />
    </ul>
  </div>
</template>

<script>
import CatalogCard from "@/components/Catalog/CatalogCard.vue";
export default {
  name: "CatalogList",
  components: {
    CatalogCard,
  },
  data() {
    return {
      limit: 10,
    };
  },
};
</script>

<style lang="scss">
.catalog {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &__filter {
    width: 110px;
    padding: 5px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    text-align: center;
    margin-right: 1.5%;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    justify-content: space-around;
  }
}
</style>
