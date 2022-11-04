import { ref } from "vue";
import { ApiServices } from "@/app/infrastructure/api/ApiServices";
import type { Ref } from 'vue'
import { EndPoints } from "@/app/infrastructure/api/Endpoints";

export interface countryInterface {
  id: number;
  name: string;
  countryCode: string;
  flag: string | any;
  parentAreaId: number;
  parentArea: string;
}

export function useHome() {
  const {
    getFetch
  } = ApiServices()
  const country: Ref<countryInterface> = ref(null);
  const showAllcountry: Ref<boolean> = ref(false);
  const competitions: any = ref(null)
  const isLoading: Ref<boolean> = ref(false)
  const {
    areaUrl,
    competitionsUrl
  } = EndPoints()

  const toogleShowAllCountry = () => {
    showAllcountry.value = !showAllcountry.value;
  };

  const fetchAllCountry = async () => {
    try {
      const resp = await getFetch(areaUrl(), null)
      country.value = resp?.data?.areas;
    } catch (error) {
      console.log(error)
    }
  };

  const fetchCompetition = async (id: number) => {
    competitions.value = null
    isLoading.value = true
    try {
      const resp = await getFetch(`${competitionsUrl()}?areas=${id}`, null)
      competitions.value = resp?.data?.competitions
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    country,
    showAllcountry,
    toogleShowAllCountry,
    fetchAllCountry,
    competitions,
    fetchCompetition,
    isLoading
  };
}
