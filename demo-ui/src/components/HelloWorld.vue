<template>
  <div v-if="trades" class="hello">
    <input type="text" v-model="DataForm.address" placeholder="enter wallet address"/><br><br>
    <button v-on:click="setup">Search</button><br><br>
    <button @click="reloadPage">view another data</button><br><br>
  <div v-for="trade in trades" :key="trade.id">
    {{ trade }}
  </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { createClient, everything } from 'kala-sdk'
export default {
  name: 'HelloWorld',
  data(){
      return{
        DataForm:{
          address: undefined
        },
        trades : ref([])
      }
  },
  methods:{
      async getLogin()
      {
        console.log("getLogin called", this.DataForm)
      },
  
  async setup() {
    trades: ref([])
    console.log(this.trades.value)
    console.log(this.DataForm.address)
    if(this.DataForm.address !== undefined){
    const client = createClient({
      subscription: {
        url: 'ws://127.0.0.1:8080/v1/graphql'
      }
    });

      client.chain.subscription
      .meta({where: {creator: {_eq: this.DataForm.address}}})
      .get({...everything})
      .subscribe({
        next: res => res.forEach(x => this.trades.value.push(x))
      });
}
    return {
      trades
    }
  },
  reloadPage() {
      window.location.reload();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
