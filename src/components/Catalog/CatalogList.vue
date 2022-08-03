<template>
  <div class="catalog">
    <select @change="handleSort($event.target.value)" class="catalog__filter">
      <option value="min">По умолчанию</option>
      <option value="min">По цене min</option>
      <option value="max">По цене max</option>
      <option value="name">По наименованию</option>
    </select>
    <ul v-if="items.length" class="catalog__list">
      <CatalogCard v-for="item in items" :item="item" :key="item.id" />
    </ul>
    <div v-else class="empty">
      <p>Добавьте товары через форму!</p>
    </div>
  </div>
</template>

<script>
import CatalogCard from "@/components/Catalog/CatalogCard.vue";
import { GET_ITEMS } from "@/store/getter-types";
import { SET_SORT_ITEMS } from "@/store/mutation-types";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CatalogList",
  components: {
    CatalogCard,
  },
  computed: {
    ...mapGetters({
      items: GET_ITEMS,
    }),
  },
  methods: {
    ...mapMutations({
      sort: SET_SORT_ITEMS,
    }),
    handleSort(value) {
      this.sort(value);
    },
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
    outline: none;
    border: none;
    @media (max-width: 1416px) {
      margin-top: 18px;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    justify-content: space-around;
  }
}

.empty {
  width: 350px;
  margin: 20% auto;
}
</style>
