<template>
    <div>
        <button id="down" @click="exportExcel()">json_to_sheel导出</button>
        <button id="down" @click="exportExcel2()">aoa_to_sheet导出</button>
    </div>
</template>

<script>
import XLSX from "xlsx";
export default {
    name: "",
    components: {},
    data() {
        return {
            data: [
                { 主页: "111", 名称: "6800", 数量: "6800", 昵称: "广告主网" },
                { 主页: "433", 名称: "6800", 数量: "6800", 昵称: "广告主网" },
                { 名称: "22", 商家: "6800", 数量: "6800", 昵称: "广告主网" },
                { 名称: "43", 商家: "6800", 数量: "6800", 昵称: "广告主网" },
                { 店家: "43", 价格: "6800", 数量: "6800", 昵称: "广告主网" }
            ]
        };
    },
    props: {},
    methods: {
        exportExcel(excelname = 'json_to_sheel') {
            var self = this;

            var _data = [
                { 主页: "111", 名称: "6800", 数量: "6800", 昵称: "广告主网" },
                { 主页: "433", 名称: "6800", 数量: "6800", 昵称: "广告主网" },
                { 主页: "22", 名称: "6800", 数量: "6800", 昵称: "广告主网" },
                { 主页: "43", 名称: "6800", 数量: "6800", 昵称: "广告主网" },
                { 主页: "43", 名称: "6800", 数量: "6800", 昵称: "广告主网" }
            ];



            var worksheet = XLSX.utils.json_to_sheet(_data);

            var new_workbook = XLSX.utils.book_new();

            XLSX.utils.book_append_sheet(
                new_workbook,
                worksheet,
                excelname ? excelname : "SheetJS"
            );

            XLSX.writeFile(
                new_workbook,
                excelname ? excelname + ".xlsx" : "sheetjs.xlsx"
            );
        },
        exportExcel2(excelname = 'aoa_to_sheel') {
            var self = this;

            var _data = [
                ["id", "name", "value"],

                [1, "sheetjs", 7262],

                [2, "js-xlsx", 6969]
            ];



            var worksheet = XLSX.utils.aoa_to_sheet(_data);

            var new_workbook = XLSX.utils.book_new();

            XLSX.utils.book_append_sheet(
                new_workbook,
                worksheet,
                excelname ? excelname : "SheetJS"
            );

            XLSX.writeFile(
                new_workbook,
                excelname ? excelname + ".xlsx" : "sheetjs.xlsx"
            );
        }
    },
    created() {}
};
</script>
<style lang='scss' scoped>
</style>