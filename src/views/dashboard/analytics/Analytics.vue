<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">
      <b-col lg="9" md="12">
        <analytics-congratulation :data="String(data.feedingSuccess)" />
      </b-col>
      <b-col lg="3" sm="6">
        <statistic-card-with-area-chart
          icon="BatteryChargingIcon"
          :statistic="
            kFormatter(data.weightHist[data.weightHist.length -1])
          "
          statistic-title="Quantidade de Ração"
          :chart-data="[{data: data.weightHist, name: 'gramas'}]"
        />
      </b-col>
    </b-row>

    <div style="display: none">
      {{ refreshing }}
    </div>

    <b-row class="match-height">
      <b-col lg="6">
        <analytics-timeline :data="data.next" />
      </b-col>
      <b-col lg="6" md="6">
        <ecommerce-transactions :data="data.hist" />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import { kFormatter } from '@core/utils/filter'
import axios from 'axios'
import store from '@/store/index'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
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
  computed: {
    refreshing() {
      this.fetchDashboardData()
      return store.state.infos.dashboardRefresh
    },
  },
  created() {
    this.fetchDashboardData()
  },
  setup() {
    const userData = JSON.parse(localStorage.getItem('userData'))

    const toast = useToast()

    return {
      toast,
      userData,
    }
  },
  methods: {
    kFormatter,
    fetchDashboardData() {
      axios
        .get(`https://upx-backend-whntohr7oq-rj.a.run.app/dashboard?user=${this.userData.username}`)
        .then(response => {
          this.data = response.data
        })
        .catch(() => {
          this.toast({
            component: ToastificationContent,
            props: {
              title: 'Erro ao carregar a Dashboard',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        })
    },
  },
}
</script>
