<template>
  <div id="app">
    <Layout>
    <Typography text-type="title-1" class-name="text-white py-5 pt-20 text-primary-200 text-center">Vue-Components
    </Typography>

<!--      Table V2-->
      <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
        Table V2
      </Typography>


      <div class="overflow-hidden sm:overflow-x-auto">


        <TableV2 :table-data="demoData"/>
      </div>

    <!--    Table Row-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
      Table Row
    </Typography>
    <TableRow :table-data="tableData"/>
    <TableRow :table-data="tableData2"/>
    <TableRow :table-data="tableData3"/>


    <!--    Table Header-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
      Table Header
    </Typography>
    <TableHeader :cols="tableHeaderCols"/>
    <div class="overflow-x-auto">
    <TableHeader :cols="tableHeaderCols2"/>
    </div>


    <!--    Notice-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
      Notice
    </Typography>
    <Notice
        illustration="group-77"
        title="Tienes fondos disponibles"
        text="¡Inviértelos para seguir generando ingresos!"
        bottom-text="comprar crypto"
    />


    <!--    Mob Menu-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">Mob
      Menu
    </Typography>
<!--    <MobMenu :menu-items="navbarLinks" :account-menu-links="accountMenuLinks" @click="onMobMenuItemClick"/>-->

    <!--    Misc-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">Misc
      Component
    </Typography>
    <Misc
        title="Misc"
        :cards="miscCardData"
        :pills="miscPillData"
    />


    <!--    Pill-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">Pill
      Component
    </Typography>
    <Pill text="Registro: D669" subtext="BANCO DE ESPANA" :displaySubtextUnder="true"/>
    <span class="mr-5"></span>
    <Pill text="Registro: D669" subtext="BANCO DE ESPANA" :displaySubtextUnder="false"/>


    <!--    Card-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">Card
      Component
    </Typography>
    <div class="flex gap-16 flex-wrap">
    <Card
        :card-type=1
        top-text="RECOMPENSA"
        percentage-text="00.00%"
        title="Top X"
        action-text="INVERTIR"
        illustration="gradient=false-7"
    />
    <Card
        :card-type=2
        top-text="RECOMPENSA"
        percentage-text="00.00%"
        title="Top X"
        action-text="INVERTIR"
        illustration="gradient=false-8"
    />
    </div>


    <!--    Modal-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
      Modal Component
    </Typography>
    <!-- Button to open the modal -->
    <Button
        type="text"
        text="Open Modal"
        bg-type="color"
        bg="bg-gray-400"
        hover-bg="hover:bg-gray-300"
        text-type="label-2"
        font-color="text-gray-900"
        font-size="text-12"
        border-radius="rounded-sm"
        @click="openModal"/>

    <!-- Modal component -->
    <Modal
        v-if="isModalOpen"
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        actionText="Action"
        illustration="gradient=true"
        @close="closeModal"
        @action="handleModalAction"
    />

    <!--    Checkbox-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
      Checkbox Component
    </Typography>
    <CheckBox
        label="Checkbox text example 1"
        :value="option1Value"
        :checked="option1Checked"
        @change="handleCheckboxChange"
    />
    <CheckBox
        label="Checkbox text example 2"
        :value="option2Value"
        :checked="option2Checked"
        @change="handleCheckboxChange"
    />

    <!--    Radio Button-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
      Radio button Component
    </Typography>
    <RadioButton
        v-for="(option, index) in options"
        :key="index"
        :label="option.label"
        :value="option.value"
        :checked="selectedOption === option.value"
        :disabled="option.value === 'option2'"
        @change="handleRadioChange(option.value)"
    />

    <RadioButton
        label="Radio text example"
        value="radio-text-example"
        :checked="true"
        :disabled="true"
    />


    <!--TAG-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">Tag
      Component
    </Typography>

    <Tag
        text="INVERTIDO"
        bg-color="bg-accent-500"
        text-color="text-gray-900"
        border-radius="rounded-4xl"
        text-type="label-4"
    />
    <br>
    <Tag
        text="PENDIENTE"
        bg-color="bg-highlight2-300"
        text-color="text-gray-900"
        border-radius="rounded-4xl"
        text-type="label-4"
    />

    <!--Input-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
      Input Component
    </Typography>

    <!-- Example with left and right icons and assistive text -->
    <Input
        leftIcon="alert"
        rightIcon="chevron-right"
        assistiveIcon="alert"
        assistiveText="ASSISTIVE TEXT HERE"
        placeholder="Enter text"
        :showAssistiveText="true"
        fontSize="text-12"
        lineHeight="leading-18"
        assistiveTextType="label-3"
        v-model="inputValue"
    />
    <Input
        leftIcon="alert"
        rightIcon="chevron-right"
        assistiveIcon="alert"
        assistiveText="ASSISTIVE TEXT HERE"
        placeholder="Enter text"
        :isDisabled="true"
        :showAssistiveText="true"
        fontSize="text-12"
        lineHeight="leading-18"
        assistiveTextType="label-3"
        v-model="inputValue"
    />

    <!--Buttons-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
      Button Component
    </Typography>
    <Button
        type="icon-text"
        text="ACTION"
        bg="from-accent via-primary to-primary"
        text-class-name="text-gray-100 md:text-16 md:leading-20 font-bold"
    />
    <br>
    <br>
    <Button
        type="icon-text"
        text="ACTION"
        border-color="from-accent via-primary to-primary"
        text-class-name="text-gray-100 md:text-16 md:leading-20 font-bold"
    />
    <br>
    <br>
    <Button
        type="icon"
        bgType="gradient"
        bg="from-accent via-primary to-primary"
        text-class-name="text-gray-100"
    />
    <br>
    <br>
    <Button
        type="icon"
        bgType="gradient"
        border-color="from-accent via-primary to-primary"
        text-class-name="text-gray-100"
    />

    <!--    Tooltip-->
    <Typography text-type="title-2" class-name="text-white py-5 text-primary-200 border-b border-primary-200 mb-10">
      Tooltip Component
    </Typography>
    <Tooltip
        text="Tooltip text example"
        tooltip-text="Tooltip text"
        bg-color="bg-gray-400"
        font-color="text-gray-800"
        text-type="label-2"
    />
    </Layout>
  </div>
</template>

<script>

import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue"
import Tag from "@/components/Tag.vue"
import RadioButton from "@/components/RadioButton.vue";
import CheckBox from "@/components/CheckBox.vue";
import Typography from "@/components/Typography.vue";
import Tooltip from "@/components/Tooltip.vue";
import Modal from "@/components/Modal.vue";
import Card from "@/components/Card.vue";
import Pill from "@/components/Pill.vue";
import Misc from "@/components/Misc.vue";
// import MobMenu from "@/components/MobMenu.vue";
import Notice from "@/components/Notice.vue";
import TableHeader from "@/components/TableHeader.vue";
import TableRow from "@/components/TableRow.vue";
import Layout from "@/components/Layout.vue";
import TableV2 from "@/components/TableV2.vue";

export default {
  name: 'App',
  components: {
    TableV2,
    TableRow,
    TableHeader,
    Notice,
    // MobMenu,
    Misc,
    Pill,
    Card,
    Modal,
    Tooltip,
    Typography,
    Button,
    Input,
    Tag,
    RadioButton,
    CheckBox,
    Layout
  },
  data() {
    return {
      inputValue: '',

      selectedOption: 'option1',
      options: [
        {label: 'Option 1', value: 'option1'},
        {label: 'Option 2', value: 'option2'},
        {label: 'Option 3', value: 'option3'},
      ],

      option1Value: 'option1',
      option1Checked: false,
      option2Value: 'option2',
      option2Checked: true,

      modalTitle: "Modal Title",
      modalIllustrationSrc: "illustration.png",
      modalText: "Modal text goes here.",
      modalActionText: "Action",
      isModalOpen: false,

      //   Misc
      miscCardData: [
        {
          type: 1,
          topText: "RECOMPENSA",
          percentageText: "00.00%",
          title: "Top X",
          actionText: "INVERTIR",
          illustration: "gradient=false-7",
        },
        {
          type: 1,
          topText: "RECOMPENSA",
          percentageText: "00.00%",
          title: "Top Bitcoin",
          actionText: "INVERTIR",
          illustration: "gradient=false-7",
        },
        {
          type: 1,
          topText: "RECOMPENSA",
          percentageText: "00.00%",
          title: "Top 10 Mix",
          actionText: "INVERTIR",
          illustration: "gradient=false-7",
        },
        {
          type: 1,
          topText: "RECOMPENSA",
          percentageText: "00.00%",
          title: "Top Dollar",
          actionText: "INVERTIR",
          illustration: "gradient=false-7",
        },
        {
          type: 1,
          topText: "RECOMPENSA",
          percentageText: "00.00%",
          title: "Top Ether",
          actionText: "INVERTIR",
          illustration: "gradient=false-7",
        }
      ],
      miscPillData: [
        {
          text: "Registro: D669",
          subtext: "BANCO DE ESPANA",
          displaySubtextUnder: true
        },
        {
          text: "Registro: D669",
          subtext: "BANCO DE ESPANA",
          displaySubtextUnder: false
        }
      ],

      tableHeaderCols: [
        {
          name: 'Producto'
        },
        {
          name: 'Plataforma',
          label: 'Blockchain',
          icon: 'up'
        },
        {
          name: 'APY',
          icon: 'up'
        },
        {
          name: 'APY',
          label: 'Últimos 7 días'
        },
        {
          name: 'TVL',
          icon: 'up'
        },
        {
          name: 'TVL',
          label: 'Últimos 7 días'
        }
      ],
      tableHeaderCols2: [
        {
          name: 'Producto'
        },
        {
          name: 'Plataforma',
          label: 'Blockchain',
          icon: 'up'
        },
        {
          name: 'Inversión (USDC)',
          icon: 'up'
        },
        {
          name: 'Beneficio (USDC)',
          icon: 'up'
        },
        {
          name: 'APY',
          icon: 'up'
        },
        {
          name: 'APY',
          label: 'Últimos 7 días'
        },
        {
          name: 'TVL',
          icon: 'up'
        },
        {
          name: 'TVL',
          label: 'Últimos 7 días'
        }
      ],
      tableHeaderCols3: [
        {
          key: 'producto',
          name: 'Producto',
          isMobile: false,
          showOnMobile: true
        },
        {
          key: 'fecha',
          name: 'Fecha inversión',
          icon: 'up',
          isMobile: true,
          showOnMobile: false
        },
        {
          key: 'capital',
          name: 'Capital invertido',
          icon: 'up',
          isMobile: true,
          isDecimal: true,
          postText: 'USDC',
          showOnMobile: false
        },
        {
          key: 'rendimientos',
          name: 'Rendimientos',
          icon: 'up',
          isMobile: true,
          isFormat: true,
          postText: 'USDC',
          showOnMobile: false
        },
        {
          key: 'apy',
          name: 'APY',
          icon: 'up',
          showOnMobile: false
        },
        {
          key: 'valor',
          name: 'Valor posición',
          icon: 'up',
          isMobile: true,
          isDecimal: true,
          postText: 'USDC',
          showOnMobile: false
        },
        {
          key: 'variación',
          name: 'Variación posición',
          icon: 'up',
          isMobile: true,
          isDecimal: true,
          postText: 'USDC%',
          preText: '+',
          showOnMobile: false
        },
        {
          key: 'variaciónPerc',
          name: '% Variación posición',
          icon: 'up',
          showOnMobile: false
        },
        {
          key: 'totalGanancias',
          name: 'Total ganancias',
          icon: 'up',
          isMobile: true,
          isFormat: true,
          postText: 'USDC',
          showOnMobile: true
        },
        {
          name: 'VENDER TODO',
          type: 'action',
          showOnMobile: true
        },
      ],

      tableData: [
        {
          value: 'OP – USDC',
          type: 'text-pill'
        },
        {
          value: 'Lorem platform',
          label: 'Lorem Chain',
          type: 'text'
        },
        {
          value: '00.00%',
          type: 'percentage'
        },
        {
          value: 'table-graph-purple',
          type: 'graph'
        },
        {
          value: '€000,000,000',
          type: 'amount'
        },
        {
          value: 'table-graph-yellow',
          type: 'graph'
        },
        {
          value: 'comprar',
          type: 'btn-outline'
        }
      ],
      tableData2: [
        {
          value: 'OP – USDC',
          type: 'text-pill',
          label: 'biswap',
          icon: 'chevron-down'
        },
        {
          value: 'Lorem platform',
          label: 'Lorem Chain',
          type: 'text'
        },
        {
          value: 'Inversión',
          type: 'text',
        },
        {
          value: 'USDC 000,000,000',
          type: 'benefit',
        },
        {
          value: '00.00%',
          type: 'percentage'
        },
        {
          value: 'table-graph-purple',
          type: 'graph'
        },
        {
          value: '€000,000,000',
          type: 'amount'
        },
        {
          value: 'table-graph-yellow',
          type: 'graph'
        },
        {
          value: 'operar',
          type: 'btn-outline'
        }
      ],
      tableData3: [
        {
          value: 'OP – USDC',
          type: 'text-pill',
          label: 'biswap',
          icon: 'chevron-down'
        },
        {
          value: 'Lorem platform',
          label: 'Lorem Chain',
          type: 'text'
        },
        {
          value: 'Inversión',
          type: 'text',
        },
        {
          value: 'USDC 000,000,000',
          type: 'benefit',
        },
        {
          value: '00.00%',
          type: 'percentage'
        },
        {
          value: 'table-graph-purple',
          type: 'graph'
        },
        {
          value: '€000,000,000',
          type: 'amount'
        },
        {
          value: 'table-graph-yellow',
          type: 'graph'
        },
        {
          value: 'operar',
          type: 'btn-outline'
        }
      ],

      demoData: [
        {
          productId: 7,
          producto: 'OP-WETH',
          status: 'Completed',
          label: 'BISWAP',
          fecha: '31/03/2024',
          capital: 10000.00,
          rendimientos: 74612,
          apy: '45%',
          valor: 15000.00,
          variación: 5000,
          variaciónPerc: '50%',
          totalGanancias: 574612,
          totalGananciasPerc: '57%',
        },
        {
          productId: 17,
          producto: 'OP-USDC',
          status: 'Completed',
          label: 'BISWAP',
          fecha: '31/03/2024',
          capital: 10000.00,
          rendimientos: 74612,
          apy: '35%',
          valor: 15000.00,
          variación: 5000,
          variaciónPerc: '50%',
          totalGanancias: 574612,
          totalGananciasPerc: '57%',
        },
        {
          productId: 17,
          producto: 'OP-USDC',
          status: 'Completed',
          label: 'BISWAP',
          fecha: '28/02/2024',
          capital: 10000.00,
          rendimientos: 74612,
          apy: '35%',
          valor: 15000.00,
          variación: 5000,
          variaciónPerc: '50%',
          totalGanancias: 574612,
          totalGananciasPerc: '57%',
        },
        {
          productId: 60,
          producto: 'OP-USDT',
          status: 'Completed',
          label: 'BISWAP',
          fecha: '28/02/2024',
          capital: 10000.00,
          rendimientos: 74612,
          apy: '35%',
          valor: 15000.00,
          variación: 50000,
          variaciónPerc: '50%',
          totalGanancias: 574612,
          totalGananciasPerc: '57%',
        },
        {
          productId: 60,
          producto: 'OP-USDT',
          status: 'Completed',
          label: 'BISWAP',
          fecha: '28/02/2024',
          capital: 10000.00,
          rendimientos: 74612,
          apy: '35%',
          valor: 15000.00,
          variación: 50000,
          variaciónPerc: '50%',
          totalGanancias: 574612,
          totalGananciasPerc: '57%',
        },
      ]

    }
  },
  methods: {
    handleRadioChange(value) {
      this.selectedOption = value;
    },
    handleCheckboxChange(value) {
      this[value + 'Checked'] = !this[value + 'Checked']
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    handleModalAction() {
      // Logic to handle action inside the modal
      console.log("Action clicked");
      // Close the modal
      this.closeModal();
    },
  },
}
</script>
