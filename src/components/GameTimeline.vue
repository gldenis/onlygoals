<script setup>

import IconBallEvent from '@/components/icons/IconBallEvent.vue'
import { computed } from 'vue'

const props = defineProps({
  time: {
    type: Number,
    default: 40
  }
})
const oneTimeDuration = 45
const secondTime = computed(() => {
  return props.time > oneTimeDuration + 1
})

</script>

<template>
  <div class="game-timeline">
    <div class="game-timeline__item">
      <div class="game-timeline__value" :class="{ 'game-timeline__value--current': !secondTime }" :style="{ width: secondTime ? '100%' : props.time + '%' }" ></div>
      <div v-if="!secondTime" class="game-timeline__current-time" :style="{ left: props.time + '%' }"></div>
    </div>
    <div class="game-timeline__item">
      <div v-if="secondTime" class="game-timeline__value" :class="{ 'game-timeline__value--current': secondTime }" style="width: 50%;"></div>
      <div v-if="secondTime" class="game-timeline__current-time"></div>
    </div>
    <div class="game-timeline__game-time">99:99</div>
    <div class="game-timeline__events">
      <div class="game-timeline__goal game-timeline__goal--team-1" style="left: 10%;">
        <div class="game-timeline-event">
          <div class="game-timeline-event__icon game-timeline-event__icon--team-1">
            <IconBallEvent />
          </div>
          <div class="game-timeline-event__time">13:26</div>
          <div class="game-timeline-event__author">
            <img src="../assets/img/event1.png"
                 class="game-timeline-event__author-pic"
                 alt=""
                 loading="lazy"
                 width="16"
                 height="16">
            <div class="game-timeline-event__author-name">Jude Bellingham</div>
          </div>
        </div>
      </div>
      <div class="game-timeline__goal game-timeline__goal--team-2" style="left: 30%;">
        <div class="game-timeline-event">
          <div class="game-timeline-event__icon game-timeline-event__icon--team-2">
            <IconBallEvent />
          </div>
          <div class="game-timeline-event__time">13:26</div>
          <div class="game-timeline-event__author">
            <img src="../assets/img/event1.png"
                 class="game-timeline-event__author-pic"
                 alt=""
                 loading="lazy"
                 width="16"
                 height="16">
            <div class="game-timeline-event__author-name">Jude Bellingham</div>
          </div>
        </div>
      </div>
      <div class="game-timeline__goal game-timeline__goal--team-1" style="left: 50%;">
        <div class="game-timeline-event">
          <div class="game-timeline-event__icon game-timeline-event__icon--team-1">
            <IconBallEvent />
          </div>
          <div class="game-timeline-event__time">13:26</div>
          <div class="game-timeline-event__author">
            <img src="../assets/img/event1.png"
                 class="game-timeline-event__author-pic"
                 alt=""
                 loading="lazy"
                 width="16"
                 height="16">
            <div class="game-timeline-event__author-name">Jude Bellingham</div>
          </div>
        </div>
      </div>


      <div class="game-timeline__fall game-timeline__fall--team-2" style="left: 20%;">
        <div class="game-timeline-event">
          <div class="game-timeline-event__icon game-timeline-event__icon--team-2">
            <IconBallEvent />
          </div>
          <div class="game-timeline-event__time">13:26</div>
          <div class="game-timeline-event__author">
            <img src="../assets/img/event1.png"
                 class="game-timeline-event__author-pic"
                 alt=""
                 loading="lazy"
                 width="16"
                 height="16">
            <div class="game-timeline-event__author-name">Jude Bellingham</div>
          </div>
        </div>
      </div>
      <div class="game-timeline__fall game-timeline__fall--team-1" style="left: 80%;">
        <div class="game-timeline-event">
          <div class="game-timeline-event__icon game-timeline-event__icon--team-2">
            <IconBallEvent />
          </div>
          <div class="game-timeline-event__time">13:26</div>
          <div class="game-timeline-event__author">
            <img src="../assets/img/event1.png"
                 class="game-timeline-event__author-pic"
                 alt=""
                 loading="lazy"
                 width="16"
                 height="16">
            <div class="game-timeline-event__author-name">Jude Bellingham</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
