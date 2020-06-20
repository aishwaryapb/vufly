<template>
  <div class="flex w-full">
    <div id="img-container">
      <img src="../assets/images/About.svg" />
    </div>
    <div id="text-container">
      <h1>Our Mission</h1>
      <p class="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum nisl metus, a mattis nibh hendrerit dignissim. Nam eu molestie sem.
        Donec lacinia ligula pretium leo ultrices pulvinar. Quisque auctor augue ex, ut lacinia justo vulputate sed.
        Mauris ac velit at nisl tristique pellentesque eu at risus. Maecenas vel quam condimentum,
        sagittis leo nec, auctor tortor.
      </p>
      <br />
      <p class="justify">
        Cras vel ipsum nec odio tempus euismod eu sit amet erat. Quisque gravida erat non lobortis efficitur.
        Pellentesque volutpat consequat neque, et ullamcorper lectus molestie in. Phasellus consequat mattis libero.
        Sed justo dolor, sodales molestie imperdiet vitae, ornare ut erat. Sed varius sodales ipsum, blandit porta neque ornare eget.
        Nullam id sagittis turpis, sit amet eleifend mauris. Phasellus eu leo purus. Morbi at imperdiet tortor.
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
#img-container {
  width: 60%;
  display: flex;
  flex-direction: center;

  img {
    width: 80vw;
    height: auto;
  }
}

#text-container {
  padding: 6vh 6vw;
  width: 40%;
  text-align: center;

  h1 {
    font-size: 42px;
    color: @primary;
    font-weight: 200;
    margin-bottom: 10vh;
  }

  p {
    color: @black;
    font-size: 14px;
  }
}
</style>