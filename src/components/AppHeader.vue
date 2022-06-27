<template>
  <header>
    <div class="md:mr-8">
      <img
        src="/assets/images/OPTN_logo.png"
        alt="OPTN Logo"
        class="w-auto h-28 mx-auto md:mx-0"
      >
    </div>

    <div class="flex flex-col grow justify-between">
      <div class="flex justify-center mt-8 sm:mt-0 sm:justify-end">
        <ul class="link-bar">
          <li>
            <a href="https://discord.gg/K2Kk5Kj6PP">
              Join the
              <strong>Discord</strong>
            </a>
          </li>
          <li>
            <a href="https://reddit.com/r/ForzaOpenTunes">
              Join the
              <strong>Subreddit</strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/Ldalvik/ForzaOpenTuneFormatter">
              View On
              <strong>GitHub</strong>
            </a>
          </li>
        </ul>
      </div>

      <div class="-mb-2 text-center md:text-left">
        <router-link class="nav-link" :to="{ name: 'formatter' }">Formatter</router-link>
        <router-link class="nav-link" :to="{ name: 'calculator' }">Calculator</router-link>
        <router-link class="nav-link" to="/chart">Tuning Chart</router-link>
      </div>
    </div>
  </header>
</template>
