<template>
  <div class="form__wrapp">
    <h1 class="form__title">Добавление товара</h1>
    <from class="form__form">
      <div class="form__input">
        <p class="form__input-title">
          Название товара<span class="quote"></span>
        </p>
        <input
          class="form__input-input"
          placeholder="Введите наименование товара"
          type="text"
        />
      </div>
      <div class="form__input">
        <p class="form__input-title">
          Название товара<span class="quote"></span>
        </p>
        <textarea
          class="form__input-input form__input-desc"
          placeholder="Введите описание товара"
          type="text"
        />
      </div>
      <div class="form__input">
        <p class="form__input-title">
          Название товара<span class="quote"></span>
        </p>
        <input
          class="form__input-input"
          placeholder="Введите ссылку"
          type="text"
        />
      </div>
      <div class="form__input">
        <p class="form__input-title">
          Название товара<span class="quote"></span>
        </p>
        <input
          class="form__input-input"
          placeholder="Введите цену"
          type="text"
        />
      </div>
      <div class="form__btn">
        <button class="form__btn-add">Добавить товар</button>
      </div>
    </from>
  </div>
</template>

<script>
export default {
  name: "ItemAddForm",
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
  }

  &__input {
    margin-bottom: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    &:last-child {
      margin-top: 24px;
    }
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
    &-add {
      padding: 10px 92px;
      background: #eeeeee;
      border-radius: 10px;
      border: none;
      letter-spacing: -0.02em;
      color: #b4b4b4;
    }
  }
}
</style>
