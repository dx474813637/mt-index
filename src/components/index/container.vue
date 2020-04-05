<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title clearfix" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <!-- <span class="old-price">门市价￥{{item.price_info.old_price}}</span>
              <div class="sold bottom-right-info">{{item.address}}</div> -->
            </div>
<!-- 
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>

            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                <span class="units">/{{item.price_info.units}}均</span>
              </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  props: ["nav"],
  created() {
    api.resultsByKeywords().then( res => {
      this.resultsData = res.data.data
    })
  },
  data() {
    return {
      kind: "all",
      resultsData: {},
      list: [
        {
          image:
            "https://p1.meituan.net/tdchotel/8d2d8549f205d79fbc2319f65ac1ff821861291.png@368w_208h_1e_1c",
          title: "北京三里屯通盈中心洲际酒店",
          sub_title: "二级标题",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 18,
            units: '人'
          },
          address: "地点",
          rentNum: null,
        },
        {
          image:
            "https://p1.meituan.net/dnaimgdark/5846dae97d8365749ce31f274cc304585949436.jpg@368w_208h_1e_1c",
          title: "北京三里屯通盈中心洲际酒店",
          sub_title: "二级标题",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 20,
            units: '人'
          },
          address: "地点",
          rentNum: 1,
        },
        {
          image:
            "https://p0.meituan.net/dnaimgdark/661df287f7952c476462f294ade4ba687380763.jpg@368w_208h_1e_1c",
          title: "北京三里屯通盈中心洲际酒店",
          sub_title: "二级标题",
          price_info: {
            current_price: 599,
            old_price: 899,
            avg_price: null,
            units: null
          },
          address: "地点",
          rentNum: 2,
        },
        {
          image:
            "https://p0.meituan.net/tdchotel/b90641df1318d69a5592a46afc5908ff710821.png@368w_208h_1e_1c",
          title: "北京三里屯通盈中心洲际酒店",
          sub_title: "二级标题",
          price_info: {
            current_price: 599,
            old_price: 899,
            avg_price: null,
            units: null
          },
          address: "地点",
          rentNum: 2,
        },
        {
          image:
            "https://p0.meituan.net/dnaimgdark/07c40e67bc073d082f9d1c9d562432292881497.jpg@368w_208h_1e_1c",
          title: "北京三里屯通盈中心洲际酒店",
          sub_title: "二级标题",
          price_info: {
            current_price: 599,
            old_price: 899,
            avg_price: null,
            units: null
          },
          address: "地点",
          rentNum: 2,
        },
        {
          image:
            "https://p1.meituan.net/dnaimgdark/2b66548e54c58bf7c7e74d7488bd8ed61634727.jpg@368w_208h_1e_1c",
          title: "北京三里屯通盈中心洲际酒店",
          sub_title: "二级标题",
          price_info: {
            current_price: 599,
            old_price: 899,
            avg_price: null,
            units: null
          },
          address: "地点",
          rentNum: 2,
        }
      ]
    };
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //ajax请求
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>