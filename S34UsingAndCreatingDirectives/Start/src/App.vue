<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <button v-myon:click="test">My v-on button</button>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myon': {
                bind(el, binding, vnode) {
                    if(binding.arg == 'click'){
                        el.onclick = function() {
                            binding.value();
                        }
                    }
                }
            }
        },
        methods: {
            test() {
                alert('test alert!');
            }
        }
    }
</script>

<style>
</style>
