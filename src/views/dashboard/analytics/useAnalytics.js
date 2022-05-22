// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { ref } from '@vue/composition-api'
import axios from 'axios'

export default function useAnalytics() {
  // Use toast
  const toast = useToast()

  const userData = JSON.parse(localStorage.getItem('userData'))

  let feedingSuccess = 0
  let hist = ref([])
  let next = ref([])
  let weightHist = ref([])

  const fetchDashboard = () => {
    axios
      .get(`/dashboard?user=${userData.username}`)
      .then(response => {
        const {
          feedingSuccessInfos, histInfos, nextInfos, weightHistInfos,
        } = response.data
        feedingSuccess = feedingSuccessInfos
        hist = histInfos
        next = nextInfos
        weightHist = weightHistInfos
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Erro ao carregar a Dashboard',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  console.log(feedingSuccess)

  // const fetchDashboard = (ctx, callback) => {
  //   axios
  //     .get(`/dashboard?user=${userData.username}`)
  //     .then(response => {
  //       const {
  //         feedingSuccessInfos, histInfos, nextInfos, weightHistInfos,
  //       } = response.data

  //       callback(response.data)
  //       console.log(response.data, 'respo')
  //       feedingSuccess = feedingSuccessInfos
  //       hist = histInfos
  //       next = nextInfos
  //       weightHist = weightHistInfos
  //     })
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
    fetchDashboard,
    feedingSuccess,
    hist,
    next,
    weightHist,
  }
}
