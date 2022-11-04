import { ref } from 'vue'
import { ApiServices } from '@/app/infrastructure/api/ApiServices'
import type { Ref } from 'vue'
import { EndPoints } from '@/app/infrastructure/api/Endpoints'

export function useClub() {
    const detailClub = ref(null)
    const {
        getFetch
      } = ApiServices()
    const isLoading: Ref<boolean> = ref()
    const {
        teamsUrl
    } = EndPoints()

    const fetchDetailClub = async(id) => {
        isLoading.value = true
        try {
            const resp = await getFetch(`${teamsUrl()}/${id}`, null)
            detailClub.value = resp.data
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    return {
        detailClub,
        fetchDetailClub,
        isLoading
    }
    
}
