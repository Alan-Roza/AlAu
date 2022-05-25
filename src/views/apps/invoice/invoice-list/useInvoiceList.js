import { ref } from '@vue/composition-api'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from 'axios'

export default function useInvoicesList() {
  // Use toast
  const toast = useToast()

  const userData = JSON.parse(localStorage.getItem('userData'))

  const refInvoiceListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'id', label: '#id', sortable: false },
    { key: 'operation', label: 'Operação', sortable: false },
    { key: 'title', label: 'Título', sortable: false },
    { key: 'desc', label: 'Descrição', sortable: false },
    { key: 'mealSize', label: 'Quantidade de Alimento', sortable: false },
    { key: 'creationDate', label: 'Criado em', sortable: false },
    { key: 'frequency.time', label: 'Frequência', sortable: false },
    { key: 'actions', label: 'Ações' },
  ]
  const sortBy = ref('id')

  const fetchInvoices = (ctx, callback) => {
    axios
      .get(`https://upx-backend-whntohr7oq-rj.a.run.app/feeding/list?user=${userData.username}`).then(response => {
        console.log(response, 'response list feeding')
        callback(response.data)
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Erro ao carregar a lista',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  return {
    fetchInvoices,
    tableColumns,
    sortBy,
    refInvoiceListTable,
  }
}
