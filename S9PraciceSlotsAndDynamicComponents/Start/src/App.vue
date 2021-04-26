<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="changeComponent('blue', 3);" class="btn btn-primary">Load Blue Template</button>
                <button @click="changeComponent('green', 2);" class="btn btn-success">Load Green Template</button>
                <button @click="changeComponent('red', 1);" class="btn btn-danger">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>{{ colorName }}</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                colorName: "Red",
                selectedComponent: "appRed"
            }
        },
        methods: {
            changeComponent(color, number) {
                this.colorName = color;
                switch(number){
                    case 1:
                        this.selectedComponent = "appRed";
                        break;
                    case 2:
                        this.selectedComponent = "appGreen";
                        break;
                    case 3: 
                        this.selectedComponent = "appBlue";
                        break;
                }
                console.log("selectedComponent: " + this.selectedComponent);
                console.log("colorName: " +  this.colorName);
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
