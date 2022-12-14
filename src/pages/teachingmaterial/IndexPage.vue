<template>
  <q-page class="q-pa-sm" padding>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <ToolCard title="亲子材料包教具" headColor="rgb(178 135 198)">
          <topAppVue></topAppVue>
        </ToolCard>
      </div>
      <div class="col-md-12 col-sm-12 col-xs-12">
        <ToolCard
          title="Summary of IU 1 (Bilingual)"
          headColor="rgb(135 198 158)"
        >
          <q-tabs
            v-model="tab"
            inline-label
            class="bg-indigo-1 shadow-2"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="mails" label="主题" icon="dark_mode" />
            <q-tab name="alarms" label="中心思想" icon="hub" />
            <q-tab name="movies" label="探究问题" icon="psychology_alt" />
          </q-tabs>
          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mails"
              ><q-table
                grid
                title="主题选择"
                :rows="themerows"
                :columns="themecolumns"
                row-key="name"
                :filter="filter"
                hide-header
              >
                <!-- <template v-slot:top-right>
                  <q-input
                    borderless
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template> -->
              </q-table>
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <q-table
                grid
                :card-container-class="cardContainerClass"
                title="关于归属感"
                :rows="rows"
                :columns="columns"
                row-key="name"
                :filter="filter"
                hide-header
                v-model:pagination="pagination"
                :rows-per-page-options="rowsPerPageOptions"
              >
                <!-- <template v-slot:top-right>
                  <q-input
                    borderless
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template> -->

                <template v-slot:item="props">
                  <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
                    <ToolCard
                      :title="props.row.title"
                      headColor="rgb(176 216 222)"
                    >
                      <q-card>
                        <q-card-section class="text-center">
                          <!-- 主要概念 -->
                          <br />
                          <strong>{{ props.row.name }}</strong>
                        </q-card-section>
                        <q-separator />
                        <q-card-section
                          class="flex flex-center"
                          :style="{ fontSize: 20 + 'px' }"
                        >
                          <div>{{ props.row.calories }}</div>
                        </q-card-section>
                        <q-separator />
                        <q-card-section
                          class="flex flex-center"
                          :style="{ fontSize: 16 + 'px' }"
                        >
                          <div>{{ props.row.en }}</div>
                        </q-card-section>
                        <q-separator />
                        <q-card-section class="flex flex-center">
                          <q-btn @click="openpdf(props.row.pdf1)">
                            <q-icon left name="format_align_center" />
                            <div>中心思想</div>
                          </q-btn>
                          <q-btn @click="openpdf(props.row.pdf2)">
                            <q-icon left name="menu_book" />
                            <div>知识点</div>
                          </q-btn>
                          <q-btn @click="openpdf(props.row.pdf3)">
                            <q-icon left name="school" />
                            <div>{{ props.row.bt3 }}</div>
                          </q-btn>
                        </q-card-section>
                      </q-card>
                    </ToolCard>
                  </div>
                </template>
              </q-table>
            </q-tab-panel>

            <q-tab-panel name="movies">
              <q-table
                :rows="[]"
                row-key="index"
                separator="cell"
                class="full-width"
                title="关于归属感"
                table-colspan="5"
                no-data-label="I didn't find anything for you"
              >
                <template v-slot:no-data="{}">
                  <div
                    class="full-width row flex-center text-accent q-gutter-sm"
                  >
                    <q-icon size="2em" name="tag_faces" />
                    <span> welcome my lady... </span>
                  </div>
                </template>
                <template v-slot:header>
                  <q-tr>
                    <q-th align="center" rowspan="1">年龄段</q-th>
                    <q-th align="center" rowspan="1">中心思想</q-th>
                    <q-th align="center" rowspan="1">阶段</q-th>
                    <q-th align="center" rowspan="1">探究问题（中文）</q-th>
                    <q-th align="center" rowspan="1">探究问题（英文）</q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="10"
                      style="border-left: 1px solid #e0e0e0"
                      >小班</q-th
                    >
                    <q-th align="center" rowspan="10"
                      >随着成长，我们更了解自己</q-th
                    >
                    <q-th align="center" rowspan="2">L1</q-th>

                    <q-th align="center" rowspan="1"
                      >我的身体是由哪些部分组成的？</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >What are the parts of my body?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      style="border-left: 1px solid #e0e0e0"
                      align="center"
                      rowspan="1"
                      >我有哪些身体特征？</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >What physical characteristics do we have?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="2"
                      style="border-left: 1px solid #e0e0e0"
                      >L2</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >在日常生活中，我们可以用自己的身体做些什么？</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >WHow do parts of my body help me do daily self-care
                      tasks?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >我们如何描述他人的身体特征?</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >How do we describe ourselves using these
                      characteristics?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="2"
                      style="border-left: 1px solid #e0e0e0"
                      >L3</q-th
                    >

                    <q-th align="center" rowspan="1"
                      >随着成长，我们的身体会有怎样的变化 ？</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >As we grow, how does our body change?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >随着成长，我们能做的事情是不是有变化？</q-th
                    ><q-th align="center" rowspan="1"
                      >How do these characteristics change as you grow?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="2"
                      style="border-left: 1px solid #e0e0e0"
                      >L4</q-th
                    >

                    <q-th align="center" rowspan="1"
                      >为什么我会发生这些变化？</q-th
                    ><q-th align="center" rowspan="1"
                      >Why do my body change?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >为什么我们需要良好的生活习惯？</q-th
                    ><q-th align="center" rowspan="1" style="color: red"
                      >?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >L5</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >这些身体变化对我们的日常生活有什么影响? </q-th
                    ><q-th align="center" rowspan="1"
                      >Why do these changes affect my daily life?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >L6</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >我还想让身体发生什么变化？如何做才能让身体发生这种新变化？</q-th
                    ><q-th align="center" rowspan="1"
                      >What other changes to my body do I hope to see? How can I
                      achieve it?</q-th
                    >
                  </q-tr>
                  <!-- 中班 -->
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="13"
                      style="border-left: 1px solid #e0e0e0"
                      >中班</q-th
                    >
                    <q-th align="center" rowspan="13"
                      >人与人之间有不同的关系</q-th
                    >
                    <q-th align="center" rowspan="3">L1</q-th>

                    <q-th align="center" rowspan="1">我们周围有哪些人？</q-th>
                    <q-th align="center" rowspan="1"
                      >Who are the people around us?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      style="border-left: 1px solid #e0e0e0"
                      align="center"
                      rowspan="1"
                      >我的家里有谁？我怎么称呼他们？</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >Who are the people in our family? How do we identify
                      them?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      style="border-left: 1px solid #e0e0e0"
                      align="center"
                      rowspan="1"
                      >谁是我的好朋友?</q-th
                    >
                    <q-th align="center" rowspan="1">Who are our friends?</q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="4"
                      style="border-left: 1px solid #e0e0e0"
                      >L2</q-th
                    >
                    <q-th align="center" rowspan="1">周围的人在做什么？</q-th>
                    <q-th align="center" rowspan="1">What do they do?</q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >我通常会和家人一起做什么?</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >What do we do with our family members?
                    </q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >在家庭中，每位成员的角色和责任是什么?</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >What are the roles and responsibility of each family
                      member?
                    </q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >我会和朋友做什么?</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >What do we do with our friends?
                    </q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >L3</q-th
                    >

                    <q-th align="center" rowspan="1"
                      >我们如何与周围的人互动 ？</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >How do we interact with them?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="3"
                      style="border-left: 1px solid #e0e0e0"
                      >L4</q-th
                    >

                    <q-th align="center" rowspan="1"
                      >为什么我们周围的人很重要？</q-th
                    ><q-th align="center" rowspan="1"
                      >Why are they important?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >我和每位家庭成员的关系如何？为什么？为什么我周围的人对我有不同的态度？</q-th
                    ><q-th align="center" rowspan="1"
                      >How is our relationship with other family members? Why?
                    </q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >谁是我最好的朋友？为什么？谁是我的好朋友？为什么？</q-th
                    ><q-th align="center" rowspan="1"
                      >Who is my best friend? Why?
                    </q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >L5</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >周围的人如何影响我们的日常生活？我和周围人的关系如何? </q-th
                    ><q-th align="center" rowspan="1"
                      >How do they affect our day?What affect our relationship
                      with others?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >L6</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >我们如何和周围的人保持良好的关系？</q-th
                    ><q-th align="center" rowspan="1"
                      >How do we maintain our relationship with others?</q-th
                    >
                  </q-tr>
                  <!-- 大班 -->

                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="9"
                      style="border-left: 1px solid #e0e0e0"
                      >大班</q-th
                    >
                    <q-th align="center" rowspan="10"
                      >我们的思想、行为举止影响着自己和他人</q-th
                    >
                    <q-th align="center" rowspan="2">L1</q-th>

                    <q-th align="center" rowspan="1"
                      >什么情境下，我们和他人会有不同的意见？当时我们采取了什么行为？我们周围有什么公益组织？</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >When will we have different opinions? How did we behave
                      during these situation?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      style="border-left: 1px solid #e0e0e0"
                      align="center"
                      rowspan="1"
                      >什么是关爱？</q-th
                    >
                    <q-th align="center" rowspan="1">What is caring?</q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="2"
                      style="border-left: 1px solid #e0e0e0"
                      >L2</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >我们当时的行为对自己和他人有什么影响？这些组织的功能是什么？</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >How did our behavior affect others?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >当关爱他人和被他人关爱时，我的感觉如何？?</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >How do we feel when caring for each other?
                    </q-th>
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="2"
                      style="border-left: 1px solid #e0e0e0"
                      >L3</q-th
                    >

                    <q-th align="center" rowspan="1"
                      >如果我们再碰到这样的情况，我们会怎么做？这样做会给自己和别人带来什么影响？我们如何参与这些组织
                      ？</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >If we meet these situations again, how will we behave?
                      How will our behaviour affect us and others?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >我们可以如何关爱他人？</q-th
                    ><q-th align="center" rowspan="1"
                      >What differences and commonalities are there between our
                      culture and others?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan=""
                      style="border-left: 1px solid #e0e0e0"
                      >L4</q-th
                    >

                    <q-th align="center" rowspan="1"
                      >为什么我们要关爱和帮助他人？</q-th
                    ><q-th align="center" rowspan="1"
                      >Why should we care for others?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >L5</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >哪些行为可以带来积极的影响，我们如何判断？关爱他人需要哪些品质？? </q-th
                    ><q-th align="center" rowspan="1"
                      >How do we decide which behaviours bring about positive
                      engagement?</q-th
                    >
                  </q-tr>
                  <q-tr>
                    <q-th
                      align="center"
                      rowspan="1"
                      style="border-left: 1px solid #e0e0e0"
                      >L6</q-th
                    >
                    <q-th align="center" rowspan="1"
                      >我们以后应该怎样对待他人？</q-th
                    ><q-th align="center" rowspan="1"
                      >How do we treat others in future?
                    </q-th>
                  </q-tr>
                </template>
              </q-table>
            </q-tab-panel>
          </q-tab-panels>
        </ToolCard>
      </div>
    </div>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="indigo" />
    </q-page-scroller>
    <q-dialog v-model="dialogVisible" full-height>
      <q-card style="width: 800px; max-width: 90vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">预览</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section style="height: 90vh"
          ><q-pdfviewer type="html5" :src="pdf"
        /></q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, watch, computed } from "vue";
import topAppVue from "./top-app.vue";
import ToolCard from "../../components/toolcard";
import Carousel from "./components/Carousel.vue";
import CarouselVideo from "./components/CarouselVideo.vue";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "IndexPage",
  components: { ToolCard, topAppVue },
  setup() {
    function openpdf(v) {
      pdf.value = v;
      dialogVisible.value = true;
    }
    const $q = useQuasar();
    const dialogVisible = ref(false);
    const pdf = ref("");
    const rows = [
      {
        name: "特征、功能、变化、对比、影响、计划",
        calories: "随着成长，我们更了解自己",
        en: "As we grow, we seek to understand more about ourselves.",
        title: "小班",
        bt3: "教案 L1-Q1-A",
        pdf1: "http://store.giser.org.cn/jasminefiles/pdf/s/pdf1.pdf",
        pdf2: "http://store.giser.org.cn/jasminefiles/pdf/s/pdf2.pdf",
        pdf3: "http://store.giser.org.cn/jasminefiles/pdf/s/pdf3.pdf"
      },
      {
        name: "联系、责任、互动、原因、影响、行动",
        calories: "人与人之间有不同的关系",
        en: "We have different relationships with different people.",
        title: "中班",
        bt3: "教案 L1-Q2-A",
        pdf1: "http://store.giser.org.cn/jasminefiles/pdf/m/pdf1.pdf",
        pdf2: "http://store.giser.org.cn/jasminefiles/pdf/m/pdf2.pdf",
        pdf3: "http://store.giser.org.cn/jasminefiles/pdf/m/pdf3.pdf"
      },
      {
        name: "关爱、文化、影响、对比、欣赏、包容、行为",
        calories: "我们的思想、行为举止影响着自己和他人",
        en: "Our thoughts, behaviours and actions affect ourselves and others.",
        title: "大班",
        bt3: "教案 L4-Q2-A",
        pdf1: "http://store.giser.org.cn/jasminefiles/pdf/l/pdf1.pdf",
        pdf2: "http://store.giser.org.cn/jasminefiles/pdf/l/pdf2.pdf",
        pdf3: "http://store.giser.org.cn/jasminefiles/pdf/l/pdf3.pdf"
      }
    ];

    function getItemsPerPage() {
      if ($q.screen.lt.sm) {
        return 3;
      }
      if ($q.screen.lt.md) {
        return 6;
      }
      return 3;
    }

    const filter = ref("");
    const pagination = ref({
      page: 1,
      rowsPerPage: getItemsPerPage()
    });

    watch(
      () => $q.screen.name,
      () => {
        pagination.value.rowsPerPage = getItemsPerPage();
      }
    );
    const themecolumns = [
      { name: "theme", label: "主题（中文）", field: "theme" },
      { name: "themeen", label: "主题（英文）", field: "themeen" },
      { name: "think", label: "中心思想 (中文)", field: "think" },
      { name: "thinen", label: "中心思想 (英文)", field: "thinen" }
    ];
    const themerows = [
      {
        theme: "归属感",
        themeen: "Identity & Wellbeing",
        think:
          "探究个人、身体、心智和精神健康，建立自我价值观，了解作为人的意义。通过个人与外部环境的互动，探究个人与周围群体之间的各种人际关系，并从中了解权力与责任的概念。",
        thinen:
          "To explore personal, physical, mental and spiritual health and to develop self-values and an understanding of what it means to be human. To explore the various interpersonal relationships between individuals and the groups around them through their interactions with the external environment, and to understand the concepts of power and responsibility in between."
      },
      {
        theme: "交流",
        themeen: "Communication",
        think:
          "探究表达的广度与深度，培养表达方式的多样性；通过多元化表达方式的运用来探索环境，从而激发创造力、提高审美鉴赏力；探究倾听与表达的联系与变化，包容文化、情感和观点的差异性，尊重他人表达的权利。",
        thinen:
          "To explore the breadth and depth of expression and to cultivate the diversity and appropriateness of expression. To explore the environment through the use of diverse expressions in order to stimulate creativity and enhance aesthetic appreciation.To explore the connection and change between listening and expression, to embrace the differences of cultures,feelings and opinions,and to respect the right of others to express.  "
      },
      {
        theme: "世界",
        themeen: "The World",
        think:
          "通过与自然环境的互动，探索其客观规律；探究资源的可持续发展与环境保护之间的交互关系；探究人类与自然环境、其他生物相互依存、互相影响的关系，明白人与自然和谐共处的重要性；探寻科学原理对人类社会产生的作用与联系；探索科技发展对社会和环境的影响。",
        thinen:
          "To explore the objective laws of the natural environment through interaction with it; To explore the interactive relationship between sustainable development of resources and environmental protection; To explore the interdependence and mutual influence between human beings and the natural environment and other living things, and to understand the importance of harmonious coexistence between human beings and nature; To explore the function and connection of scientific principles to human society; To explore the social and environmental impacts of scientific and technological development."
      },
      {
        theme: "社会",
        themeen: "Our Society",
        think:
          "初步了解社会，掌握基础的社会行为规范和行为技能；探究社会各组织的结构和功能；探寻社会各项制度机制与人类的相互作用以及两者之间的本质联系。探索文化的独特性和文化间的差异，培养全球化视角。",
        thinen:
          "To gain an initial understanding of society and acquire basic social norms and behavioral skills; to explore the structure and functions of social organizations; to explore the interactions between the institutional mechanisms of society and human beings and the essential connections between them. To explore the uniqueness of cultures and the differences between them, and to develop a global perspective. "
      }
    ];

    onMounted(() => {});
    return {
      tab: ref("mails"),
      rows,
      themerows,
      themecolumns,
      openpdf,
      pdf,
      dialogVisible,
      filter,
      pagination,

      columns: [
        { name: "name", label: "Name", field: "name" },
        { name: "calories", label: "Calories (g)", field: "calories" },
        { name: "en", label: "en (g)", field: "en" }
      ],

      cardContainerClass: computed(() => {
        return $q.screen.gt.xs
          ? "grid-masonry grid-masonry--" + ($q.screen.gt.sm ? "3" : "2")
          : null;
      }),

      rowsPerPageOptions: computed(() => {
        return $q.screen.gt.xs ? ($q.screen.gt.sm ? [3, 6, 9] : [3, 6]) : [3];
      })
    };
  }
});
</script>
