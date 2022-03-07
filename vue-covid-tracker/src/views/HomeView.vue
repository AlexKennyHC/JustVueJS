<template>
  <main v-if="!loading">
    <DataTitleComponent :text="title" :dataDate="dataDate" />
    <DataBoxesComponent :stats="stats" />
  </main>

  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src="loadingImage" class="w-24 m-auto" alt="" />
  </main>
</template>

<script>
import DataTitleComponent from "@/components/DataTitleComponent";
import DataBoxesComponent from "@/components/DataBoxesComponent";

export default {
  name: 'HomeView',
  components: {
    DataTitleComponent,
    DataBoxesComponent
  },
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('@/assets/hourglass.gif')
    }
  },
  methods: {
    fetchCovidData: async function () {
      // making request to get data from api
      const res = await fetch('https://api.covid19api.com/summary')

      return res.json();
    },
  },
  async created() {
    const data = this.fetchCovidData()
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
    console.log(data)
  }
}
</script>
