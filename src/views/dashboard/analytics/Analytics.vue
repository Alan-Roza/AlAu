<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">
      <b-col lg="6" md="12">
        <analytics-congratulation :data="String(data.feedingSuccess)" />
      </b-col>
      <b-col lg="3" sm="6">
        <statistic-card-with-area-chart
          v-if="data.subscribersGained"
          icon="UsersIcon"
          :statistic="
            kFormatter(data.subscribersGained.analyticsData.subscribers)
          "
          statistic-title="Grafico 1"
          :chart-data="data.subscribersGained.series"
        />
      </b-col>
      <b-col lg="3" sm="6">
        <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          icon="PackageIcon"
          color="warning"
          :statistic="kFormatter(data.ordersRecevied.analyticsData.orders)"
          statistic-title="Grafico 2"
          :chart-data="data.ordersRecevied.series"
        />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="6">
        <analytics-timeline :data="data.timeline" />
      </b-col>
      <b-col lg="6" md="6">
        <ecommerce-transactions :data="data.transactionData" />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import { kFormatter } from '@core/utils/filter'
import axios from 'axios'
// import { useToast } from 'vue-toastification/composition'
// import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
// import useAnalytics from './useAnalytics'
import AnalyticsCongratulation from './AnalyticsCongratulation.vue'
import AnalyticsTimeline from './AnalyticsTimeline.vue'
import EcommerceTransactions from './EcommerceTransactions.vue'

export default {
  components: {
    BRow,
    BCol,
    AnalyticsCongratulation,
    StatisticCardWithAreaChart,
    AnalyticsTimeline,
    EcommerceTransactions,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    this.$http.get('/analytics/data').then(response => {
      // this.data = response.data
      console.log(response.data)
    })
    axios.get(`/dashboard?user=${this.userData.username}`).then(response => {
      this.data = response.data
    })
    this.fetchDashboardData()
  },
  mounted() {
    this.fetchDashboardData()
  },
  setup() {
    const userData = JSON.parse(localStorage.getItem('userData'))

    // const toast = useToast()

    // const fetchDashboardData = () => {
    //   axios
    //     .get(`/dashboard?user=${userData.username}`)
    //     .then(response => {
    //       this.data = response.data
    //     })
    //     // // const {
    //     // //   feedingSuccess, hist, next, weightHist,
    //     // // } = response.data
    //     // return response.data
    //     // })
    //     .catch(() => {
    //       toast({
    //         component: ToastificationContent,
    //         props: {
    //           title: 'Erro ao carregar a Dashboard',
    //           icon: 'AlertTriangleIcon',
    //           variant: 'danger',
    //         },
    //       })
    //     })
    // }

    return {
      // fetchDashboardData,
      userData,
    }
  },
  methods: {
    kFormatter,
  },
}
</script>
