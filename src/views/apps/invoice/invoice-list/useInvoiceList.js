import { ref } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useInvoicesList() {
  // Use toast
  const toast = useToast()

  const refInvoiceListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'id', label: '#id', sortable: false },
    { key: 'operation', label: 'Operação', sortable: false },
    { key: 'title', label: 'Título', sortable: false },
    { key: 'description', label: 'Descrição', sortable: false },
    { key: 'foodAmount', label: 'Quantidade de Alimento', sortable: false },
    { key: 'createdAt', label: 'Criado em', sortable: false },
    { key: 'actions', label: 'Ações' },
  ]
  const sortBy = ref('id')

  const fetchInvoices = (ctx, callback) => {
    store
      .dispatch('app-invoice/fetchInvoices', {})
      .then(response => {
        const { invoices } = response.data
        console.log(invoices, response.data)

        callback(invoices)
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
