<template>
  <header>
    <div class="md:mr-8">
      <img
        src="/images/FOT_logo_color.png"
        alt="FOT Logo"
        class="w-auto h-28 mx-auto md:mx-0"
      >
    </div>

    <div class="flex flex-col grow justify-between">
      <ul class="link-bar">
        <li>
          <a href="https://discord.com">
            Join the
            <strong>Discord</strong>
          </a>
        </li>
        <li>
          <a href="https://reddit.com">
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

      <div class="-mb-2 text-center md:text-left">
        <router-link class="nav-link" to="/formatter">Formatter</router-link>
        <router-link class="nav-link" to="/calculator">Calculator</router-link>
      </div>
    </div>
  </header>
</template>
