<template>
  <div class="form__wrapp">
    <h1 class="form__title">Добавление товара</h1>
    <form class="form__form" @submit.prevent="submitHandler">
      <div class="form__input form__input_info">
        <p class="form__input-title">
          Название товара<span class="quote"></span>
        </p>
        <input
          class="form__input-input"
          placeholder="Введите наименование товара"
          ref="filterTitle"
          v-model="filterTitle"
          :class="{ error: errors.titleError }"
          type="text"
        />
        <span v-show="errors.titleError" class="form__error">
          {{ errors.titleError }}
        </span>
      </div>
      <div class="form__input">
        <p class="form__input-title">Описание товара</p>
        <textarea
          class="form__input-input form__input-desc"
          placeholder="Введите описание товара"
          v-model="filterDesc"
          maxlength="208"
          ref="filterDesc"
          type="text"
        />
      </div>
      <div class="form__input">
        <p class="form__input-title">
          Ссылка на изображение товара<span class="quote"></span>
        </p>
        <input
          class="form__input-input"
          placeholder="Введите ссылку"
          v-model="filterImgUrl"
          ref="filterImgUrl"
          :class="{ error: errors.imgError }"
          type="text"
        />
        <span v-show="errors.imgError" class="form__error">
          {{ errors.imgError }}
        </span>
      </div>
      <div class="form__input">
        <p class="form__input-title">Цена товара<span class="quote"></span></p>
        <input
          v-model.number="filters.price"
          class="form__input-input"
          placeholder="Введите цену"
          type="number"
          :class="{ error: errors.priceError }"
        />
        <span v-show="errors.priceError" class="form__error">
          {{ errors.priceError }}
        </span>
      </div>
      <div class="form__btn">
        <button
          :disabled="checkErorrs"
          type="submit"
          class="form__btn-add"
          :class="{ 'form__btn-add--active': !checkErorrs }"
        >
          Добавить товар
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { SET_ADD_ITEM } from "@/store/mutation-types";
import { mapMutations } from "vuex";
export default {
  name: "ItemAddForm",
  data() {
    return {
      filters: {
        title: "",
        desc: "",
        imgUrl: "",
        price: null,
      },
      errors: {},
      error: true,
    };
  },
  watch: {
    filterTitle: function () {
      if (this.filterTitle) {
        delete this.errors["titleError"];
      } else {
        this.errors["titleError"] = "Введите название товара!";
      }
    },
    filterImgUrl: function () {
      if (this.filterImgUrl) {
        delete this.errors["imgError"];
      } else {
        this.errors["imgError"] = "Введите ссылку на изображение!";
      }
    },
    "filters.price": function () {
      if (this.filters.price) {
        delete this.errors["priceError"];
      } else {
        this.errors["priceError"] = "Введите стоимость товара!";
      }
    },
  },
  computed: {
    checkErorrs() {
      if (
        this.filterImgUrl &&
        this.filterTitle &&
        this.filters.price &&
        this.filters.price > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
    filterTitle: {
      get() {
        return this.filters.title;
      },
      set(title) {
        this.$refs.filterTitle.value = title;
        this.filters.title = title;
      },
    },
    filterDesc: {
      get() {
        return this.filters.desc;
      },
      set(desk) {
        this.$refs.filterDesc.value = desk;
        this.filters.desc = desk;
      },
    },
    filterImgUrl: {
      get() {
        return this.filters.imgUrl;
      },
      set(url) {
        this.$refs.filterImgUrl.value = url;
        this.filters.imgUrl = url;
      },
    },
  },
  methods: {
    ...mapMutations({
      addItem: SET_ADD_ITEM,
    }),
    submitHandler() {
      if (Object.keys(this.errors).length === 0) {
        let item = {
          title: this.filterTitle,
          description: this.filterDesc,
          imgSrc: this.filterImgUrl,
          price: this.filters.price,
          id: uuidv4(),
        };
        this.addItem(item);
        this.filterTitle = "";
        this.filterDesc = "";
        this.filterImgUrl = "";
        this.filters.price = "";
      }
      this.$nextTick(() => {
        this.errors = {};
      });
    },
  },
};
</script>

<style lang="scss">
.quote {
  display: inline-block;
  background-color: #ff8484;
  width: 5px;
  height: 5px;
  border-radius: 4px;
  position: absolute;
  margin-left: 2px;
}
.form {
  &__wrapp {
    width: 100%;
  }
  &__title {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3f3f3f;
    margin-bottom: 16px;
  }
  &__form {
    max-width: 332px;
    height: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    justify-content: space-between;
  }

  &__input {
    width: 100%;
    display: flex;
    flex-direction: column;
    &-input {
      width: auto;
      padding: 10px 16px;
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: 2px solid #ffffff;
      outline: none;
      transition: border 0.5s ease;
      &:focus {
        border: 2px solid #f6f6f68a;
      }
    }
    &-desc {
      height: 108px;
      resize: none;
    }
  }

  &__input-title {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
    margin-bottom: 4px;
  }
  &__btn {
    margin-top: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    &-add {
      padding: 10px 92px;
      background: #eeeeee;
      border-radius: 10px;
      border: none;
      letter-spacing: -0.02em;
      color: #b4b4b4;
      transition: all 0.5s ease;
    }
    &-add--active {
      transition: all 0.5s ease;
      background: #7bae73;
      color: #ffffff;
    }
  }
}

.form__error {
  font-size: 14px;
  color: #ff8484;
  margin-top: 4px;
}

.error {
  border: 2px solid #ff8484;
  &:focus {
    border: 2px solid #ff8484;
  }
}
</style>
