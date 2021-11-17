<template>
  <div class="container pt-10 pb-16">
    <section class="mb-20">
      <BaseTitle title="Neue Projekte hinzugefügt" class="mb-4" />

      <slider :slides-per-view="5" :space-between="0">
        <Card
          v-for="item in projects"
          :key="item.id"
          :item="item"
          class="swiper-slide"
        />
      </slider>
    </section>

    <section class="mb-20">
      <BaseTitle title="Aktuelle Neubauprojekte nach Themen" class="mb-4" />
      <slider :slides-per-view="5" :space-between="0">
        <Card v-for="item in projects2" :key="item.id" :item="item" />
      </slider>
    </section>

    <section class="mb-20">
      <BaseTitle title="Aktuelle Neubauprojekte nach Regionen" class="mb-4" />

      <slider :slides-per-view="5" :space-between="0">
        <Card v-for="item in projects3" :key="item.id" :item="item" />
      </slider>
    </section>

    <section class="mb-20">
      <BaseTitle
        title="Aktuelle Neubauprojekte geplant und in Arbeit"
        class="mb-4"
      />
      <slider :slides-per-view="5" :space-between="0">
        <Card v-for="item in projects4" :key="item.id" :item="item" />
      </slider>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '~/types'

import BaseTitle from '@/components/base/BaseTitle.vue'
import Slider from '@/components/common/Slider.vue'
import Card from '@/components/common/Card.vue'

const projects: Array<Project> = [
  {
    image: 'images/estate_1.png',
    id: 1,
    title: 'Luxuriöse 5 Zimmer Gartenwohnung',
    address: 'Dielsdorf, Zurich',
    status: true,
    new: true,
  },
  {
    image: 'images/estate_2.png',
    id: 2,
    title: 'Neubau Mehrfamilienhaus mit 18 Eigentumswohnungen',
    address: 'Nussbaumen, Aarau',
    status: true,
    new: false,
  },
  {
    image: 'images/estate_3.png',
    id: 3,
    title: 'Neubau 3.5-Zimmer-Wohnung 4.OG west',
    address: 'Buchs, St. Gallen',
    status: false,
    new: false,
  },
  {
    image: 'images/estate_1.png',
    id: 4,
    title: 'Neubau Mehrfamilienhaus mit 18 Eigentumswohnungen',
    address: 'Nussbaumen, Aarau',
    status: false,
    new: true,
  },
  {
    image: 'images/estate_1.png',
    id: 5,
    title: 'Luxuriöse 5 Zimmer Gartenwohnung',
    address: 'Dielsdorf, Zurich',
    status: true,
    new: true,
  },
  {
    image: 'images/estate_2.png',
    id: 6,
    title: 'Neubau Mehrfamilienhaus mit 18 Eigentumswohnungen',
    address: 'Nussbaumen, Aarau',
    status: true,
    new: false,
  },
  {
    image: 'images/estate_3.png',
    id: 7,
    title: 'Neubau 3.5-Zimmer-Wohnung 4.OG west',
    address: 'Buchs, St. Gallen',
    status: false,
    new: false,
  },
  {
    image: 'images/estate_1.png',
    id: 8,
    title: 'Neubau Mehrfamilienhaus mit 18 Eigentumswohnungen',
    address: 'Nussbaumen, Aarau',
    status: false,
    new: true,
  },
]

const projects2: Array<Project> = [
  {
    image: 'images/estate2_1.jpg',
    id: 1,
    title: 'In der Nähe des Sees',
    address: '189 Projekte',
    published: '29  Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
  {
    image: 'images/estate2_2.jpg',
    id: 1,
    title: 'Naturverbundene Orte',
    address: '119 Projekte',
    published: '9 Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
  {
    image: 'images/estate2_3.jpg',
    id: 1,
    title: 'Wohnen an der Spitze',
    address: '189 Projekte',
    published: '29  Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
  {
    image: 'images/estate2_4.jpg',
    id: 1,
    title: 'Urban chic',
    address: '189 Projekte',
    published: '29  Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
]

const projects3: Array<Project> = [
  {
    image: 'images/estate3_1.jpg',
    id: 1,
    title: 'Zurich See Region',
    address: '189 Projekte',
    published: '29  Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
  {
    image: 'images/estate3_2.jpg',
    id: 2,
    title: 'Winterthur Altstadt',
    address: '119 Projekte',
    published: '9 Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
  {
    image: 'images/estate3_3.jpg',
    id: 3,
    title: 'Limmattal',
    address: '189 Projekte',
    published: '29  Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
  {
    image: 'images/estate3_4.jpg',
    id: 4,
    title: 'Zürich West',
    address: '189 Projekte',
    published: '29  Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
]

const projects4: Array<Project> = [
  {
    image: 'images/estate4_1.jpg',
    id: 1,
    title: 'Fertigstellung 2021',
    address: '189 Projekte',
    published: '29  Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
  {
    image: 'images/estate4_2.jpg',
    id: 2,
    title: 'Fertigstellung 2022',
    address: '119 Projekte',
    published: '9 Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
  {
    image: 'images/estate4_3.jpg',
    id: 3,
    title: 'Wohnung',
    address: '189 Projekte',
    published: '29  Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
  {
    image: 'images/estate4_4.jpg',
    id: 4,
    title: 'Villas',
    address: '189 Projekte',
    published: '29  Unveröffentlichte Projekte',
    status: false,
    new: false,
  },
]

export default Vue.extend({
  components: {
    BaseTitle,
    Slider,
    Card,
  },
  data() {
    return {
      projects,
      projects2,
      projects3,
      projects4,
    }
  },
})
</script>
