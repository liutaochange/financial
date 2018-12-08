<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "components/header.vue"
import Footor from "components/footer.vue"
import Navbar from "components/navbar.vue"
import Slider from "./hslider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
import Money from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"
export default {
    components: {
        Heador,
        Slider,
        Novice,
        Borrow,
        Money,
        Product,
        Life,
        Footor,
        Navbar,
    },
}
</script>
