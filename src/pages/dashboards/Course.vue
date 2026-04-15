<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Intro from "@/sections/course/Intro.vue";
import Stats from "@/sections/course/Stats.vue";
import UpcomingTask from "@/sections/course/upcoming-task";
import TrafficSources from "@/sections/course/traffic-sources";
import TopCategories from "@/sections/course/TopCategories.vue";
import ContinueCourses from "@/sections/course/continue-courses";
import FeaturedCourse from "@/sections/course/FeaturedCourse.vue";
</script>

<template>
  <div class="grid grid-cols-12 mb-6 gap-7">
    <!-- INTRO CARD -->
    <Intro />

    <!-- STATS CARDS -->
    <Stats />

    <!-- FEATURED COURSES TABLE CARD -->
    <FeaturedCourse />

    <!-- TOP CATEGORIES CARD -->
    <TopCategories />

    <!-- TRAFFIC SOURCES CHART CARDS -->
    <TrafficSources />

    <!-- CONTINUE COURSES CARD -->
    <ContinueCourses />

    <!-- UPCOMING TASK LIST CARD -->
    <UpcomingTask />

    <!-- FOOTER CARD -->
    <Footer />
  </div>
</template>
