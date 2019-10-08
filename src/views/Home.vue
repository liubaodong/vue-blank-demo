<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
    </div>
</template>

<script>
import request from 'network/request'

export default {
    name: "home",
    components: {},
    methods: {},
    created() {
        request({
            url: "/home/multidata"
        })
    }
};
</script>
