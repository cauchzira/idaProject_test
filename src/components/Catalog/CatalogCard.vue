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
.card {
  width: 30%;
  max-height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;
  @media (max-width: 1416px) {
    width: 45%;
  }
  &:hover {
    .card__delete {
      opacity: 1;
    }
  }

  &__delete {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    width: 32px;
    height: 32px;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
    border-radius: 10px;
    position: absolute;
    right: -16px;
    top: -16px;
    transition: opacity 0.5s ease;
    img {
      width: 20px;
      height: 20px;
    }
  }

  &__image {
    width: 100%;
    img {
      width: 100%;
      height: 230px;
      object-fit: cover;
    }
  }

  &__info {
    padding: 16px;
    word-break: break-word;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 235px;
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #3f3f3f;
    margin-bottom: 16px;
  }
  &__desc {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #3f3f3f;
    margin-bottom: 32px;
    text-align: justify;
  }
  &__price {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3f3f3f;
  }
}
</style>
