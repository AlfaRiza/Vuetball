<template>
  <div class="hero-banner">
    <HeroBanner
      :title="detailClub?.name"
      :subtitle="`${
        detailClub?.venue || ''
      } - ${detailClub?.runningCompetitions.map((item) => {
        return item.name;
      })} - ${detailClub?.squad?.length || ''} Player`"
      :isLoading="isLoading"
    >
      <template #right>
        <div class="flex justify-center mt-10">
          <div v-if="isLoading" class="bg-gray-300 animate-pulse p-48 ml-20"></div>
          <img :src="detailClub?.crest" class="w-1/2" alt="" />
        </div>
      </template>
    </HeroBanner>
    <div
      class="relative flex justify-center -mt-30 min-h-full z-50"
      id="search"
    >
      <div class="bg-white w-3/4 border border-red p-5 rounded-lg">
        <div class="flex justify-around">
            <div class="">
                <div class="flex flex-col items-center">
                    <h2 class="text-sky-500 font-semibold">Head Coach: </h2>
                    <span class="text-2xl text-center">{{ detailClub?.coach?.name }}</span>
                </div>
            </div>
        </div>
        <h2 class="text-center mb-5 text-sky-500 font-semibold mt-5">List Player</h2>
        <div class="w-full">
          <div v-if="!isLoading" class="bg-green-300 rounded-lg gap-x-5 gap-y-5">
            <Table :dataItems="detailClub?.squad" :header="header" @redirect="handlePlayerDetail"/>
          </div>
          <div v-else v-for="index in 5" :key="index">
            <div class="p-5 bg-gray-300 animate-pulse mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroBanner from "@components/HeroBanner/index.vue";
import axios from "axios";
import { useClub } from "../../composable/useClub";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Table from '@components/Table/index.vue'
import router from '@router/index.ts'

const { detailClub, fetchDetailClub, isLoading } = useClub();

const route = useRoute();
const header = [
    "No",
    "Name",
    "Position",
    "Nationality",
    "Birth",
    "Aksi"
]

const handlePlayerDetail = (id) => {
    router.push({ path: `/player/${id}` })
}
onMounted(() => {
  fetchDetailClub(route?.params?.id);
});

</script>

<style scoped lang="scss" src="./style.scss"></style>
