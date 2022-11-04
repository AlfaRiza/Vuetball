<template>
  <div class="hero-banner">
    <HeroBanner
      :title="detailCompetition?.competition?.name"
      :isLoading="isLoading"
      :subtitle="`${detailCompetition?.competition.type || ''} - ${detailCompetition?.filters?.season || ''} - ${detailCompetition?.teams?.length || ''} Team`"
    >
        <template #right>
            <div class="flex justify-center mt-10">
                <div v-if="isLoading" class="bg-gray-300 animate-pulse p-48"></div>
                <img v-else :src="detailCompetition?.competition?.emblem" class="w-1/2" alt="">
            </div>
        </template>
    </HeroBanner>
    <div
      class="wrapper-competition -mt-30"
      id="search"
    >
      <div class="bg-gray-300 w-3/4 border border-red p-5 rounded-lg">
        <h2 class="text-center mb-5 font-semibold text-sky-500">List Team</h2>
        <div class="grid grid-cols-10 gap-4">
          <div
            class="wrapper-team"
          >
          <div v-for="index in 5" :key="index" class="card text-center shadow-lg flex">
              <div v-if="isLoading"
                class="w-full bg-gray-400 animate-pulse h-[300px] p-5 rounded cursor-pointer"
              >
              </div>

          </div>
            <div
              v-for="item, index in detailCompetition?.teams"
              :key="index"
              class="card text-center shadow-lg"
            >
              <div
                class="group box-club"
                @click="handleDetail(item.id)"
              >
                <img
                  :src="item.crest"
                  class="group-hover:scale-75 duration-300 max-h-[200px]"
                  alt=""
                  width="200"
                  height="200"
                />
                <p
                  class="text-md text-gray-500 font-semibold group-hover:text-xl ease-in duration-300 group-hover:text-white group-hover:-m-[6px]"
                  >{{ item.name}}</p
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroBanner from "@components/HeroBanner/index.vue";
import axios from "axios";
import router from '@router/index.ts'
import { useCompetition } from '../../composable/useCompetition'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const {
    detailCompetition,
    fetchDetailCompetition,
    isLoading
} = useCompetition()

onMounted(() => {
    console.log(route.params?.code)
    fetchDetailCompetition(route.params?.code)
})

const handleDetail = (id) => {
    router.push({ path: `/club/${id}` })
}

const coba = async () => {
  const resp = await axios.get(
            `https://cors-hijacker.vercel.app/api?url=${encodeURIComponent(
                `http://api.football-data.org/v4/competitions/ELC/teams`
            )}`,
            {
                headers: {
                "X-Auth-Token": import.meta.env.VITE_APP_TOKEN,
                },
            }
        );
  console.log('======', resp)
    
}

coba()
</script>

<style scoped lang="scss" src="./style.scss"></style>
