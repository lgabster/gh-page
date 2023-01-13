<template>
  <section id="hero" class="relative red bg-fixed h-screen w-full flex items-center justify-center">
    <div class="hero-content relative z-30 h-full w-full flex items-center justify-center">
      <h1 class="title z-0 text-4xl font-bold md:text-5xl lg:text-8xl text-white m-auto">
        N A V A R I U M
      </h1>
      <div class="scroll absolute bottom-5 animate-bounce">
        <img src="@/assets/images/scroll.svg?url" alt="" class="h-12">
      </div>
    </div>
    <video autoplay loop muted class="fixed top-0 z-10 w-auto min-w-full min-h-full max-w-none">
      <source src="@/assets/images/waves.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<style lang="scss" scoped>
.hero-content {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGUlEQVQYV2NkwAIYCQn+Z2BgACsiqBJuEgA0oAEGG0cSmgAAAABJRU5ErkJggg==)
    repeat;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAANklEQVQoU2NkIAIwElbj+Z+AIs//DAzbGYkwiYEBhyKICTCnYFGEqgCkkFTrME1Asw63ApBCAAoxC1JaZFdnAAAAAElFTkSuQmCC)
    repeat;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJElEQVQoU2NkYPD8z8CwnZGBACCoAKYfSSF+k8kxEb8jh5WJAKr0BAu0TlpDAAAAAElFTkSuQmCC)
    repeat;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAKUlEQVQoU2NkYGBgkJKS8gXR+AAjSNGzZ882E1IMVkjINJD8qEK8oQQA81wKGam9xm4AAAAASUVORK5CYII=)
    repeat;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQoU2OUkpLyZSACMI4qxBdK1A8eAE3pBhmdUCz2AAAAAElFTkSuQmCC)
    repeat;
}

.title {
  text-shadow: -4px 4px 0 #000;
}
</style>
