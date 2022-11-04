<template>
  <div class="flex flex-col mt-8">
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="
          inline-block
          min-w-full
          overflow-hidden
          align-middle
          border-b border-gray-200
          shadow
          sm:rounded-lg
        "
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th v-for="item, idx in header" :key="idx"
                class="
                  px-6
                  py-3
                  text-xs
                  font-medium
                  leading-4
                  tracking-wider
                  text-left text-gray-500
                  uppercase
                  border-b border-gray-200
                  bg-gray-50
                "
              >
                {{ item }}
              </th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr v-for="(item, index) in dataItems" :key="index">
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ index + 1 }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ item.name }}
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-500">
                  {{ item.position }}
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ item.nationality }}
                  </div>
                </div>
              </td>

              <td
                class="
                  px-6
                  py-4
                  text-sm
                  leading-5
                  text-gray-500
                  whitespace-no-wrap
                  border-b border-gray-200
                "
              >
                {{ item.dateOfBirth }}
              </td>
              <td
                class="
                  px-6
                  py-4
                  text-sm
                  leading-5
                  text-gray-500
                  whitespace-no-wrap
                  border-b border-gray-200
                "
              >
                <button class="text-sky-500" @click="emit('redirect', item.id)">
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['redirect'])
const props = defineProps({
header: {
    type: Array,
    required: true,
    default: []
},
  dataItems: {
    type: Array,
    required: false,
    default: [],
  },
});

</script>
