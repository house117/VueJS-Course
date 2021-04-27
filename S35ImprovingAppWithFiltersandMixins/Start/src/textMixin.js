export const textMixin = {
    data () {
        return {
            text2: "I'm the textMixiiin",
        }
    },
    computed: {
        filteredText() {
            console.log(this.text2);
            var value =  this.text2.split("").reverse().join("");
            return value += (" (" + value.split("").length + ")");
        }
    }
}