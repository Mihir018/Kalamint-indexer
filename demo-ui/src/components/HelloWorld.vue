<template>
  <div v-if="trades" class="hello">
  <img :src="require('../assets/logo.png')" class="logo"></img>
    <input
      type="text"
      v-model="DataForm.address"
      placeholder="enter wallet address"
      class="input"
    /><br /><br />
    <button v-on:click="setup()">Search</button><br /><br />
    <button @click="reloadPage">view another data</button><br /><br />
    <div>
      <h1>Total Minted</h1>
      <vs-table class="table">
        <template #thead>
          <vs-tr class="table_head">
            <vs-th> Index </vs-th>
            <vs-th> Token-Id </vs-th>
            <vs-th> NFT Name </vs-th>
            <vs-th> Price </vs-th>
            <vs-th> On Auction </vs-th>
            <vs-th> On Sale </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in trades" :data="tr">
            <vs-td>
              {{ i + 1 }}
            </vs-td>
            <vs-td>
              <a :href="'https://kalamint.io/token/' + tr.token_id">{{ tr.token_id }}</a>
            </vs-td>
            <vs-td>
              {{ tr.namepng }}
            </vs-td>
            <vs-td>
              {{ tr.price/10**6}}
            </vs-td>
            <vs-td>
              {{ tr.on_auction }}
            </vs-td>
            <vs-td>
              {{ tr.on_sale }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
    <div>
      <h1>Total Sold</h1>
      <vs-table class="table">
        <template #thead>
          <vs-tr class="table_head">
            <vs-th> Index </vs-th>
            <vs-th> Token-Id </vs-th>
            <vs-th> NFT Name </vs-th>
            <vs-th> Price </vs-th>
            <vs-th> On Auction </vs-th>
            <vs-th> On Sale </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in trades"
            :data="tr"
            v-if="tr.creator != tr.owner && tr.on_sale == 'False' && tr.on_auction == 'False'"
          >
            <vs-td>
              {{ i + 1 }}
            </vs-td>
            <vs-td>
              <a :href="'https://kalamint.io/token/' + tr.token_id">{{ tr.token_id }}</a>
            </vs-td>
            <vs-td>
              {{ tr.name }}
            </vs-td>
            <vs-td>
              {{ tr.price/10**6 }}
            </vs-td>
            <vs-td>
              {{ tr.on_auction }}
            </vs-td>
            <vs-td>
              {{ tr.on_sale }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
    <h1>Total Tez Earned :- {{ DataForm.tez_earned}}</h1>
    <input
      type="text"
      v-model="DataForm.owner_address"
      placeholder="enter owner address"
      class="input"
    /><br /><br />
    <button v-on:click="collected">Search</button><br /><br />
    <button @click="reloadPage">view another data</button><br /><br />
    <div>
      <h1>Total Collected</h1>
      <vs-table class="table">
        <template #thead>
          <vs-tr class="table_head">
            <vs-th> Index </vs-th>
            <vs-th> Token-Id </vs-th>
            <vs-th> NFT Name </vs-th>
            <vs-th> Price </vs-th>
            <vs-th> On Auction </vs-th>
            <vs-th> On Sale </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in collect" :data="tr">
            <vs-td>
              {{ i + 1 }}
            </vs-td>
            <vs-td>
              <a :href="'https://kalamint.io/token/' + tr.token_id">{{ tr.token_id }}</a>
            </vs-td>
            <vs-td>
              {{ tr.name }}
            </vs-td>
            <vs-td>
              {{ tr.price/10**6 }}
            </vs-td>
            <vs-td>
              {{ tr.on_auction }}
            </vs-td>
            <vs-td>
              {{ tr.on_sale }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
    <h1>Total Tez Spent :- {{ DataForm.tez_spent}}</h1>
  </div>
</template>
<script>
import {logo} from "../assets/logo.png";
import { ref } from "@vue/composition-api";
import { createClient, everything } from "kala-sdk";
export default {
  name: "HelloWorld",
  data() {
    return {
      DataForm: {
        address: undefined,
        owner_address: undefined,
        tez_earned: 0,
        tez_spent: 0,
      },
      // trades : ref([])
      trades: [],
      collect: [],
      price:[],
    };
  },
  methods: {
    async getLogin() {
      console.log("getLogin called", this.DataForm);
    },
    // async calc_tezearned() {
    //   // this.DataForm.tez_earned = 30;
    //   if (trades.length() != 0) {
    //     await this.trades.forEach((x) => {
    //       console.log(x);
    //       this.DataForm.tez_earned = this.DataForm.tez_earned + x.price;
    //     });
    //   }
    // },

    async setup() {
      // trades: ref([])
      this.trades = [];
      console.log(this.trades.value);
      console.log(this.DataForm.address);
      if (this.DataForm.address !== undefined) {
        const client = createClient({
          subscription: {
            url: "ws://127.0.0.1:8080/v1/graphql",
          },
        });

        client.chain.subscription
          .meta({ where: { creator: { _eq: this.DataForm.address } } })
          .get({ ...everything })
          .subscribe({
            // next: res => res.forEach(x => this.trades.value.push(x))
            next: (res) => res.forEach((x) => 
            {
              this.trades.push(x)
              // console.log(x.price/10**6)
              if(x.creator!=x.owner)
              {
              this.DataForm.tez_earned+=(x.price/10**6)
              }
            }),
            // next: (res) => res.forEach((x) => this.DataForm.tez_earned = this.DataForm.tez_earned+ x.price)
          });
          // console.log(this.trades)
      }
      // console.log(this.DataForm.tez_earned);
    },
    async collected() {
      // trades: ref([])
      this.collect = [];
      if (this.DataForm.owner_address !== undefined) {
        const client = createClient({
          subscription: {
            url: "ws://127.0.0.1:8080/v1/graphql",
          },
        });

        client.chain.subscription
          .meta({
            where: {owner: {_eq: "tz1YoHPWUS5cz8sPiFdJ1yTNnUW3eB2FQQLC"}, _and: {creator: {_neq: "tz1YoHPWUS5cz8sPiFdJ1yTNnUW3eB2FQQLC"}, _and: {on_sale: {_eq: "False"}, _and: {on_auction: {_eq: "False"}}}}},
          })
          .get({ ...everything })
          .subscribe({
            // next: res => res.forEach(x => this.trades.value.push(x))
            next: (res) => res.forEach((x) => {
              this.collect.push(x)
              this.DataForm.tez_spent+=(x.price/10**6)
            }),
          });
      }
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
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

.table {
  text-align: left;
}
.input {
  width:300px;
  padding: 20px;
  text-align:center;
  border-radius: 5px;
}
.logo {
  position:absolute;
  height:128px;
  width:398px;
  left:30px;
  top:10px;
}
</style>
