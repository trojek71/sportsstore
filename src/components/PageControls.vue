<template>
    <div v-if="pageCount > 1" class="text-right">
        <div class="btngroup mx-2">
            <button v-for="i in pageNumbers" v-bind:key="1" class="btn" v-bind:class="{'btn-primary': i == currentPage, 'btn-secondary':i != CurrentPage}">
                {{i}}
            </button>
        </div>
    </div>        
</template>
<script>
import {mapState, mapGetters} from "vuex";
export default {
    computed:{
        ...mapState(["currentPage"]),
        ...mapGetters(["pageCount"]),
        pageNumbers() {
            return [...Array(this.pageCount + 1).keys()].slice(1);
        }
    }
}
</script>