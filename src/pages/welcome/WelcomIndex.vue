<template>
  <div class="page-overlay">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="myopt"
    />
    <h3 ref="h3dom" class="animated_text">welcome to Jasmine.space</h3>
    <h2 :class="subtitleclass" :style="{ 'font-size': '' }">
      探究未来教育©Jasmine.Chen
    </h2>
    <ul :class="logoclass">
      <li>
        <a target="_blank" class="logotitle" @click="doSth(routes[0])">
          <img src="img/painting.png" />绘本
        </a>
      </li>
      <li>
        <a target="_blank" class="logotitle" @click="doSth(routes[1])">
          <img src="img/spelling.png" />拼读
        </a>
      </li>
      <li>
        <a target="_blank" class="logotitle" @click="doSth(routes[2])">
          <img src="img/videolesson.png" />音视频
        </a>
      </li>
      <li>
        <a target="_blank" class="logotitle" @click="doSth(routes[3])">
          <img src="img/appresource.png" />App
        </a>
      </li>
      <li>
        <a target="_blank" class="logotitle" @click="doSth(routes[4])">
          <img src="img/teachingmaterial.png" />教材教具
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import Letters from "./widgets/letters";
import { loadFull } from "tsparticles";

import { useRouter } from "vue-router";
import opt from "./widgets/particles.json";

import { useQuasar } from "quasar";
import { computed } from "vue";
import "./widgets/animate.min.css";
import "./widgets/welcome.css";
// import opt from "./widgets/launch-particles.json";
export default {
  components: {},
  setup() {
    const h3dom = ref(null);
    const myopt = ref(opt);
    const showwelcome = ref(false);
    const subtitleclass = ref("subtile text-justify opacity0");
    const logoclass = ref("list-inline logo-list opacity0");
    const dateTime = ref(null);
    const router = useRouter();

    const $q = useQuasar();
    const buttonColor = computed(() => {
      return $q.screen.lt.md ? "primary" : "secondary";
    });
    function doSth(p) {
      router.push({ path: p }).catch((e) => {
        console.log(e);
      });
    }
    function welcome() {
      var x = {
        size: 120,
        weight: 8,
        color: [
          "#E77826",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#E77826",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#E77826",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8",
          "#f8f8f8"
        ],
        duration: 0.35,
        delay: [
          0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4,
          1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4
        ],
        fade: 0.35,
        individualDelays: true,
        easing: function (t) {
          return (1 - Math.cos(Math.PI * t)) / 2;
        }
      };
      console.log("h3dom:", h3dom.value);
      var z = new Letters(h3dom.value, x);
      z.show();
      setTimeout(() => {
        subtitleclass.value = "subtile text-justify opacity0 animated bounceIn";
        logoclass.value = "list-inline logo-list opacity0  animated fadeInUp";
      }, 2800);

      setTimeout(() => {
        //showwelcome.value = false;
      }, 4500);
    }
    function getTime(params) {
      var w = new Date();
      var H = w.getFullYear();
      var G = w.getMonth() + 1;
      var z = w.getDate();
      var I = w.getDay();
      var C = w.getHours();
      var B = w.getMinutes();
      var x = w.getSeconds();
      var L = G < 10 ? "0" + G : G;
      var J = z < 10 ? "0" + z : z;
      var K = C < 10 ? "0" + C : C;
      var D = B < 10 ? "0" + B : B;
      var A = x < 10 ? "0" + x : x;
      var F = [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      var y = K + " : " + D + " : " + A;
      var z = H + " " + L + " " + J + " " + F[I];
      var E = "";
      E = E + '<span style="float:left">' + K + "</span>";
      E =
        E +
        '<span id="online" style="width:16px; display:block; float:left">' +
        ": " +
        "</span>";
      E = E + '<span style="float:left">' + D + "</span>";
      E =
        E +
        '<span id="online2" style="width:16px; display:block; float:left">' +
        ": " +
        "</span>";
      E = E + '<span style="float:left">' + A + "</span>";
      return {
        date: z,
        time: E
      };
    }
    onMounted(() => {
      welcome();
    });
    const particlesInit = async (engine) => {
      await loadFull(engine);
    };

    const particlesLoaded = async (container) => {
      console.log("Particles container loaded", container);
    };
    return {
      h3dom,
      showwelcome,
      subtitleclass,
      logoclass,
      dateTime,
      myopt,
      particlesLoaded,
      doSth,
      particlesInit,
      buttonColor,
      routes: [
        "painting",
        "spelling",
        "videolesson",
        "appresource",
        "teachingmaterial"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
// @import url("./widgets/animate.min.css");
// @import url("./widgets/welcome.css");
.logotitle {
  color: #cfcdcd;
  font-weight: 900;
  font-size: 12px;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
}
.subtile {
  font-family: "Hiragino Sans GB", "Microsoft Yahei", "å¾®è½¯é›…é»‘", "Pinghei",
    sans-serif;
  counter-reset: gridcounter;
  color: #fff;
  // font-size: 3.2rem;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
  margin-top: 20px;
}
body.screen--xs {
  .subtile {
    font-size: 2rem;
  }
}

body.screen--sm {
  .subtile {
    font-size: 2.4rem;
  }
}

body.screen--md {
  .subtile {
    font-size: 3.2rem;
  }
}
</style>
