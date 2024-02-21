<script setup>

</script>

<template>
  <div>
    <div class="macros-params__list">
      <div v-for="param of 9" class="macros-params__item">
        <div class="macros-params__title">Время игры</div>
        <div class="macros-params__cells-list">
          <div v-for="cell of 9" class="macros-cell">
            <div class="macros-cell__progress"></div>
            <div class="macros-cell__value">1</div>
            <div class="macros-cell__efficiency">79%</div>
            <div class="macros-cell__proportion">5/5</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.macros-params {
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 4px;
  }

  &__item {
    width: calc((100% - 8px) / 3);
    border-radius: 4px;
    background: var(--Neutral-7, #2B2D34);
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
  }

  &__title {
    overflow: hidden;
    color: var(--Neutral-1, #E9EAEC);
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
    line-height: 128%; /* 20.48px */
  }

  &__cells-list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 4px;
  }
}

.macros-cell {
  padding: 6px 8px;
  height: 52px;
  border-radius: 4px;
  background: var(--Neutral-8, #24262D);
  width: calc((100% - 8px) / 3);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  &__value {
    overflow: hidden;
    color: var(--neutral-left-32, rgba(255, 255, 255, 0.32));
    text-overflow: ellipsis;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__efficiency {
    overflow: hidden;
    color: var(--neutral-left-32, rgba(255, 255, 255, 0.32));
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
  }

  &__proportion {
    overflow: hidden;
    color: var(--neutral-left-32, rgba(255, 255, 255, 0.32));
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 700;
    line-height: 132%; /* 17.16px */
    width: 100%;

  }

  &__progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 0;
    border-radius: 2px;
    opacity: 0.04;
    background: var(--Neutral-Left-R1, linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%));
    width: 25%;
  }
}
</style>
