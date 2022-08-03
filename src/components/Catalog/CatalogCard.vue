<template>
  <li class="card">
    <div class="card__delete" @click="deleteHandler(item.id)">
      <img src="@/assets/img/trash.svg" alt="" />
    </div>
    <div class="card__image">
      <img :src="item.imgSrc" alt="" />
    </div>
    <div class="card__info">
      <div class="card__title">
        <h3 class="title">{{ item.title }}</h3>
      </div>
      <div class="card__desc">
        <p class="card__description">
          {{ item.description }}
        </p>
      </div>
      <div class="card__price">
        <p class="price">{{ item.price }} руб</p>
      </div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
import { SET_DELETE_ITEM } from "@/store/mutation-types";
export default {
  name: "CatalogCard",
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    ...mapMutations({
      deleteItem: SET_DELETE_ITEM,
    }),
    deleteHandler(id) {
      this.deleteItem(id);
    },
  },
};
</script>

<style lang="scss">
@import "./CatalogCard.scss";
</style>
