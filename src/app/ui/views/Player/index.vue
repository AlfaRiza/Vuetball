<template>
  <div class="hero-banner bg-black min-h-screen">
    <HeroBanner>
      <template #left>
        <div v-if="!isLoading" class="flex justify-center items-center">
          <h2 class="text-white text-[20rem]">
            {{ detailPlayer?.shirtNumber }}
          </h2>
          <div>
            <p class="text-white text-7xl">{{ detailPlayer?.name }}</p>
            <p class="text-white text-3xl">{{ detailPlayer?.position }}</p>
            <p class="text-white">{{ detailPlayer?.nationality }}</p>
            <p class="text-white">
              {{
                detailPlayer?.currentTeam?.runningCompetitions
                  .map((item) => {
                    return item.name;
                  })
                  .toString()
              }}
            </p>
            <p class="text-white">
              {{ `Until ${detailPlayer?.currentTeam?.contract?.until || ""}` }}
            </p>
          </div>
        </div>
        <div v-else>
          <div class="bg-gray-300 animate-pulse p-28"></div>
        </div>
        <div class="flex justify-center">
          <button
            @click="router?.go(-1)"
            class="btn"
          >
            Back
          </button>
        </div>
      </template>
      <template #right>
        <div class="flex justify-center w-full items-center mt-20">
          <div
            v-if="isLoading"
            class="bg-gray-300 animate-pulse p-48 text-end"
          ></div>
          <img :src="detailPlayer?.currentTeam?.crest" class="w-1/2" alt="" />
        </div>
      </template>
    </HeroBanner>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePlayer } from "../../composable/usePlayer";
import HeroBanner from "@components/HeroBanner/index.vue";
import router from "@router/index.ts";

const { detailPlayer, fetchPlayerDetail, isLoading } = usePlayer();
const route = useRoute();

onMounted(() => {
  fetchPlayerDetail(route.params.id);
});
</script>

<style scoped lang="scss" src="./style.scss"></style>
