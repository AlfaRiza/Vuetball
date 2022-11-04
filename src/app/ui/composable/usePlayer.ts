import { ref } from 'vue'
import type { Ref } from 'vue'
import { ApiServices } from '@/app/infrastructure/api/ApiServices'
import { EndPoints } from '@/app/infrastructure/api/Endpoints'

export function usePlayer() {
    const detailPlayer: any = ref(null)
    const {
        getFetch
    } = ApiServices()
    const isLoading: Ref<boolean> = ref(false)
    const {
        personsUrl
    } = EndPoints()

    const fetchPlayerDetail = async (id) => {
        isLoading.value = true

        try {
            const resp = await getFetch(`${personsUrl()}/${id}`, null)
            detailPlayer.value = resp.data
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    return {
        detailPlayer,
        fetchPlayerDetail,
        isLoading
    }
}