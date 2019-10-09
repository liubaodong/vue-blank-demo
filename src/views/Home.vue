<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
    </div>
</template>

<script>
import request from "network/request";

export default {
    name: "home",
    components: {},
    methods: {},
    created() {
        var url = "http://oss.sheetjs.com/test_files/formula_stress_test.xlsx";

        /* set up async GET request */
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";

        req.onload = function(e) {
            var data = new Uint8Array(req.response);
            var workbook = XLSX.read(data, { type: "array" });

            /* DO SOMETHING WITH workbook HERE */
        };

        req.send();
    }
};
</script>
