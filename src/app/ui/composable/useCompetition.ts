import { ref } from "vue";
import { ApiServices } from "@/app/infrastructure/api/ApiServices";
import type { Ref } from 'vue'
import { EndPoints } from "@/app/infrastructure/api/Endpoints";

export function useCompetition() {
    const detailCompetition: any = ref(null)
    const {
        getFetch
      } = ApiServices()
    const isLoading: Ref<boolean> = ref(false)
    const {
        competitionsUrl
      } = EndPoints()

    const fetchDetailCompetition = async (code) => {
        isLoading.value = true

        try {
            const resp = await getFetch(`${competitionsUrl()}/${code}/teams/`, null)
            detailCompetition.value = resp.data
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    return {
        detailCompetition,
        fetchDetailCompetition,
        isLoading
    }
}