<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Welfare/>
        <Service/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "components/header.vue";
import Footor from "components/footer.vue";
import Navbar from "components/navbar.vue";
import Slider from "./islider.vue";
import Welfare from "./welfare.vue";
import Service from "./service.vue";
export default {
  components: {
    Heador,
    Slider,
    Welfare,
    Service,
    Footor,
    Navbar
  }
};
</script>
