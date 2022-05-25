<template>
  <b-card v-if="data" no-body>
    <b-card-header>
      <b-card-title class="ml-25">
        Futuras Alimentações
      </b-card-title>
    </b-card-header>

    <!-- timeline -->
    <b-card-body>
      <app-timeline>
        <app-timeline-item variant="primary">
          <div
            class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
          >
            <h5>{{ data[0].title }}</h5>
            <small class="timeline-item-time text-nowrap text-muted ml-1">{{
              data[0].time
            }}</small>
          </div>
          <p>{{ data[0].mealSize === 'Large' ? 'Muito' : data[0].mealSize === 'Medium' ? 'Médio' : 'Pouco' }}</p>
        </app-timeline-item>

        <app-timeline-item variant="warning">
          <div
            class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
          >
            <h5>{{ data[1].title }}</h5>
            <small class="timeline-item-time text-nowrap text-muted ml-1">{{
              data[1].time
            }}</small>
          </div>
          <p>{{ data[1].mealSize === 'Large' ? 'Muito' : data[1].mealSize === 'Medium' ? 'Médio' : 'Pouco' }}</p>
        </app-timeline-item>

        <app-timeline-item variant="info">
          <div
            class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
          >
            <h5>{{ data[2].title }}</h5>
            <small class="timeline-item-time text-nowrap text-muted ml-1">{{
              data[2].time
            }}</small>
          </div>
          <p>{{ data[2].mealSize === 'Large' ? 'Muito' : data[2].mealSize === 'Medium' ? 'Médio' : 'Pouco' }}</p>
        </app-timeline-item>

        <app-timeline-item
          :title="data[3].title"
          :subtitle="data[3].mealSize === 'Large' ? 'Muito' : data[3].mealSize === 'Medium' ? 'Médio' : 'Pouco'"
          :time="data[3].time"
          variant="danger"
        />
      </app-timeline>
      <!--/ timeline -->
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCardTitle,
  VBTooltip,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
/* eslint-disable global-require */
export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    AppTimeline,
    AppTimelineItem,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
