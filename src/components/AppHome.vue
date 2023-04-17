<script setup lang="ts">
import iconReddit from '../assets/icon-reddit.png';
import iconDiscord from '../assets/icon-discord.png';

const xboxClubLink = 'https://account.xbox.com/en-ca/clubs/profile?clubid=3379875686571131&csrf=8pknUkepH9Fer0B8L4kkDml3eJUBA0QC3XhOOHgAMwO7ie104Lkr4HI_cYBdFPkKDxqj13LJD7-VzHGV-6mANkBsOGM1&wa=wsignin1.0';
</script>
<template>
  <div>
    <h1>Welcome to OPTN!</h1>
    <p>
      An online Forza community dedicated to helping others.
      Our mission is to simplify tuning, put it in the simplest terms possible
      and help new tuners get their feet wet and discover the potential of a car.
    </p>

    <p>
      This website hosts many tools to help toward this, but the most effective way to interact is through our

      <a
        href="https://discord.gg/K2Kk5Kj6PP"
        target="_blank"
        class="inline-flex items-center align-middle"
      >
        <img
          :src="iconDiscord"
          alt="Discord"
          class="h-8 mr-1"
        >
        <span>Discord</span>
      </a>
      server.
    </p>

    <h2>Weekly Challenges</h2>
    <p>
      We have weekly challenges through Forza Rivals mode.
      Follow this week’s restrictions (specific car, category or even other fun restrictions)
      and try to be the fastest! Our community will do its best to help you improve both your
      driving and how you build and tune your cars.
    </p>
    <p>
      Challenges are posted every Monday on
      <a
        href="https://reddit.com/r/ForzaOpenTunes"
        target="_blank"
        class="inline-flex items-center align-middle"
      >
        <img
          :src="iconReddit"
          alt="Reddit"
          class="h-8 mr-1"
        >
        <span>r/ForzaOpenTunes</span>
      </a>
      which is also where tunes must be posted to be eligible to win.
      Join the discussion on
      <a href="https://discord.gg/UQQd9XdZnN" class="inline-flex items-center align-middle">
        <img
          :src="iconDiscord"
          alt="Discord"
          class="h-8 mr-1"
        >
        <span>Discord</span>
      </a>
    </p>
    <p>
      The challenges are designed to be different,
      and more often than not push tuners outside their comfort zone to grow both their tuning
      and driving skills. Join the
      <a
        :href="xboxClubLink"
        target="_blank"
      >
        OPTN Club on Xbox
      </a>
      to see how you score against other open tuners!
    </p>

    <h2>Tuning Guide</h2>
    <p>
      We have a
      <a
        href="https://docs.google.com/document/d/1r5auWYA46yrxjB6hsg8bYs02qmJt6R2LyAK8TOG1I0M/edit?usp=sharing"
        target="_blank"
      >
        Tuning Guide
      </a>
      (Google Docs)
      available with nearly everything
      you need to know about tuning. Tuning is quite a deep subject, don't try to understand
      everything at once!  Start with the basics,
      use the <RouterLink :to="{ name: 'tuningchart' }">Tuning Chart</RouterLink> for troubleshooting,
      and don't hesitate to ask help from the pros on our Discord server.
    </p>

    <h2>Tune Formatter</h2>
    <p>
      One of the most important tools is our
      <RouterLink :to="{ name: 'formatter' }">Tune Formatter</RouterLink>.
      OPTN in fact means “Open Tuning”, as this community is built on sharing open source tunes.
      Forza games lock the tunes so when you download it from someone else, you can't see exactly
      what the original tuner did to the car or edit it. The Tune Formatter was created as a workaround to this problem.
    </p>
  </div>
</template>

<style scoped>
h2 {
  @apply mt-6
}
p {
  @apply mb-3;
}
</style>
