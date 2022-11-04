<template>
  <div class="hero-banner">
    <HeroBanner
      title="Get info about Football"
      subtitle="get know abaout country, league, club, player in here"
    >
      <template #right>
        <img :src="Model1" class="w-1/3 absolute" style="z-index: 0" alt="" />
        <img :src="Model2" class="w-1/3 absolute top-0 right-20" alt="" />
      </template>
    </HeroBanner>
    <div
      class="wrapper-home -mt-30"
      id="search"
    >
      <div class="bg-gray-300 w-3/4 border p-5 rounded-lg">
        <h2 class="text-center mb-5 font-semibold text-sky-500">
          Search Competition
        </h2>
        <div class="grid lg:grid-cols-10 gap-4">
          <div class="lg:col-span-2 rounded-lg">
            <input
              @click="sroll"
              @keypress.enter="sroll"
              type="text"
              placeholder="search"
              autofocus
              v-model="search"
              class="input-search"
            />
            <hr />
            <!-- shimmer -->
            <div v-if="!country" class="flex">
              <div class="w-1/5 bg-gray-500 animate-pulse py-4 mx-1"></div>
              <div class="w-4/5 bg-gray-500 animate-pulse py-4 mx-1"></div>
            </div>

            <div
              v-else
              v-for="(item, index) in search
                ? country.filter((item) => {
                    return item.name.toLowerCase().includes(search);
                  })
                : country"
              :key="item?.id"
              class="mt-2 cursor-pointer"
              @click="fetchCompetition(item?.id)"
            >
              <div v-if="index + 1 < 50 || showAllcountry">
                <div
                  class="wrapper-country"
                >
                  <div class="w-10">
                    <img :src="item?.flag" class="object-cover w-10" alt="" />
                    <div
                      v-if="item?.flag === null"
                      class="bg-gray-500 animate-pulse w-5 px-5 py-3"
                    ></div>
                  </div>
                  <span class="country-name">{{ item.name }}</span>
                </div>
              </div>
            </div>
            <div
              v-if="country"
              class="text-center cursor-pointer"
              @click="toogleShowAllCountry"
            >
              <span>{{ !showAllcountry ? "see more" : "see dikit" }}</span>
            </div>
          </div>
          <div class="lg:col-span-8 border rounded-lg min-w-full">
            <div
              v-if="
                (!competitions && !isLoading) ||
                (competitions?.length === 0 && !isLoading)
              "
              class="text-center"
            >
              data tidak ada
            </div>
            <div v-if="isLoading">
              <div class="card text-center shadow-lg my-5 mx-2">
                <div
                  class="group bg-gray-400 py-14 animate-pulse rounded transition ease-in duration-300 cursor-pointer flex items-center justify-around"
                ></div>
              </div>
            </div>
            <div
              v-for="item in competitions"
              :key="item.id"
              class="card text-center shadow-lg my-5 mx-2"
            >
              <div
                class="group bg-gray-400 p-5 rounded hover:bg-sky-500 transition ease-in duration-300 cursor-pointer flex items-center justify-around"
                @click="handleDetail(item.code)"
              >
                <div>
                  <img
                    :src="item?.emblem"
                    class="group-hover:md:scale-75 duration-300 w-20"
                    alt=""
                  />
                  <div
                    v-if="item?.emblem === null"
                    class="bg-gray-500 animate-pulse w-10 p-10"
                  ></div>
                </div>
                <p
                  class="text-sm text-gray-700 font-semibold group-hover:md:text-2xl group-hover:-m-[6px] ease-in duration-300"
                >
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from "@components/HeroBanner/index.vue";
import router from "@router/index.ts";
import { onMounted } from "vue";
import { useHome } from "@composable/useHome";
import Model1 from "@images/messi.png";
import Model2 from "@images/ronaldo.png";
import { ref } from "vue";
const {
  country,
  showAllcountry,
  toogleShowAllCountry,
  fetchAllCountry,
  competitions,
  fetchCompetition,
  isLoading,
} = useHome();
const search = ref("");
onMounted((): void => {
  fetchAllCountry();
  fetchCompetition(2072);
});

const sroll = () => {
  window.scrollTo({
    top: document.getElementById("search").offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

const handleDetail = (code: string) => {
  router.push(`/competition/${code}`);
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
