<script setup>
import IconCheckbox from '@/components/icons/IconCheckbox.vue'
import IconCourse from '@/components/icons/IconCourse.vue'
import IconDownload from '@/components/icons/IconDownload.vue'
import IconCourseBanner from '@/components/icons/IconCourseBanner.vue'

const emit = defineEmits(['close'])
</script>

<template>
  <div class="guide">
    <div class="guide__header">
      <h2 class="guide__title">Заголовок</h2>
      <button class="btn btn--gray btn--small guide__close" @click="emit('close')" >CLOSE</button>
    </div>
    <div class="guide__content">
      <h3>Подзаголовок H2</h3>
      <p>Футбол – это не просто спорт, это настоящая эмоциональная симфония, в которой каждая нота наполнена страстью и соперничеством. Когда игроки выходят на поле, они несут с собой не только навыки и стратегии, но и частичку своего сердца. Зеленое поле превращается в арену сражения, где каждый удар по мячу – это возможность создать нечто великолепное. Взгляды болельщиков, напряженные моменты и волнующие голы создают неповторимую атмосферу, в которой время замирает, а сердце бьется в унисон с каждым происходящим на поле событием.</p>
      <img src="@/assets/img/content/guide.png" alt="">
      <p>На газоне, пропитанном запахом свежей травы, разыгрывается настоящая драма. Мяч летит от ноги к ноге, словно путешественник, оставляющий свой след на карте борьбы и страсти. Взгляды игроков – это яркие молнии на темном небе соревновательности. В каждом движении таится искусство, словно художественная картина, созданная кистью мастера.</p>
      <p>Болельщики, как актеры в театре, взлетают на волнах эмоций, создавая зрелище, которое запоминается надолго. Звуки голосов, оклики и аплодисменты – это симфония, дополняющая каждый момент игры. Футбол – это не просто спорт, это театр, где каждый матч – новый акт, а каждый гол – поворот в захватывающем сюжете, который заставляет сердце биться в унисон с ритмом увлекательного спектакля.</p>
      <img src="@/assets/img/content/guide-video-poster.png" alt="">
    </div>
    <div class="course">
      <div class="course-part">
        <div class="course-part__title">Что входит в курс</div>
        <div class="course-includes__list">
          <div class="course-includes__item">
            <IconCheckbox />
            Экспертное обучение
          </div>
          <div class="course-includes__item">
            <IconCheckbox />
            Стратегии ставок
          </div>
          <div class="course-includes__item">
            <IconCheckbox />
            Практические навыки
          </div>
          <div class="course-includes__item">
            <IconCheckbox />
            Эксклюзивный контент
          </div>
          <div class="course-includes__item">
            <IconCheckbox />
            Анализ данных
          </div>
          <div class="course-includes__item">
            <IconCheckbox />
            Опыт успешных аналитиков
          </div>
        </div>
      </div>
      <div class="course__separator"></div>
      <div class="course-part">
        <div class="course-part__title">Покупка курса</div>
        <div class="course-meta">
          <div class="course-info">
            <div class="course-info__item">
              <IconCourse />
              <div>
                <div>Уроков</div>
                <span>12</span>
              </div>
            </div>
            <div class="course-info__item course-info__item--col">
              Скачать демо
              <div class="course-info__duration">
                <IconDownload />
                <span>10:00</span>
              </div>
            </div>
          </div>
          <div class="course-price">
            <div class="course-price__value">
              47 : 31
            </div>
            <div class="course-price__discount">
              <div>Скидка</div>
              <span>-50%</span>
            </div>
          </div>
        </div>
        <div class="banner page-protection__banner">
          <div class="banner__left">
            <IconCourseBanner />
            <div class="banner__text">
              <div class="banner__title">12 уроков за пол цены</div>
              <div class="banner__description">Описание</div>
            </div>
          </div>
          <div class="banner__right">
            <div class="banner-price">
              <div class="banner-price__old">100 000 ₽</div>
              <div class="banner-price__value">50 000 ₽</div>
            </div>
            <button class="btn btn--primary">Купить весь курс</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.course {
  margin-top: toRem(52);
  display: flex;
  flex-direction: column;
  gap: toRem(52);

  &__separator {
    height: toRem(1);
    background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));
  }
}


.course-includes {

  &__list {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: toRem(4);
    flex-wrap: wrap;
  }

  &__item {
    width: calc((100% - 4px) / 2);
    min-height: toRem(52);
    padding: toRem(10) toRem(12);
    display: flex;
    align-items: center;
    gap: toRem(8);
    border-radius: toRem(8);
    background: linear-gradient(270deg, rgba(31, 168, 78, 0.00) 0%, rgba(31, 168, 78, 0.10) 100%);
  }
}

.course-part {
  display: flex;
  flex-direction: column;
  gap: toRem(32);

  &__title {
    color: var(--White, #FFF);
    font-size: toRem(32);
    font-style: normal;
    font-weight: 800;
    line-height: 132%; /* 42.24px */
  }
}
.guide {
  max-width: 800px;
  padding: toRem(32);
  border-radius: toRem(24);
  background: var(--neutral-left-12, rgba(255, 255, 255, 0.12));

  /* Dropdown */
  box-shadow: - toRem(20) toRem(20) toRem(60) - toRem(16) rgba(24, 24, 41, 0.52);
  backdrop-filter: blur(20px);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__close {

  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: toRem(32);
    color: var(--Neutral-1, #E9EAEC);
    font-size: toRem(18);
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 28.8px */
    margin-top: toRem(52);

    h3 {
      color: var(--Neutral-1, #E9EAEC);
      font-size: toRem(32);
      font-style: normal;
      font-weight: 800;
      line-height: 132%; /* 42.24px */
    }

    img {
      width: 100%;
      height: auto;
      border-radius: toRem(8);
      opacity: 0.9;
    }

    & > * {
      margin: 0;
    }
  }

  &__title {
    color: var(--Neutral-1, #E9EAEC);
    font-size: toRem(44);
    font-style: normal;
    font-weight: 800;
    line-height: 120%; /* 52.8px */
  }
}
</style>
