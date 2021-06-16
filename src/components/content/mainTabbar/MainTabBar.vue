<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/ic_home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/ic_home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/ic_sort.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/ic_sort_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/ic_cart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/ic_cart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/ic_me.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/ic_me_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from 'components/common/tabbar/TabBarItem.vue';

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>