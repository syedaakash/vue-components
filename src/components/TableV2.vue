<template>
  <div>
    <table>
      <TableHeader
          :cols="tableCols"
          :sort-asc="sortAsc"
          :sort-key="sortKey"
          text-color="text-primary-200"
          @sort="sortTable"
      />
      <tbody>
      <!-- Main rows and accumulation rows -->
      <template v-for="(product, index) in paginatedData">
        <tr :key="index">
          <td class="min-w-[136px] border-b border-primary-700 py-2">
          <span class="flex" :class="product.isAccumulation ? 'gap-4' : 'pl-7'">
            <template v-if="product.isAccumulation">
              <!-- Toggle button for accordion -->
              <button @click="toggleAccordion(product.productId)">
                <Icon :icon-name="isAccordionOpen(product.productId) ? 'chevron-up' : 'chevron-down'" size="12"/>
              </button>
            </template>
            <span class="flex flex-col items-start gap-1">
              <Tag
                  v-if="product.status === 'Completed'"
                  text="INVERTIDO"
                  bg-color="bg-accent-500"
                  text-class-name="text-gray-900 font-bold leading-[7px]"
                  border-radius="rounded-4xl"
                  text-type="label-4"
              />
              <Typography class-name="text-12 leading-12 font-bold text-gray-300 uppercase">
                {{ product.producto }}
              </Typography>
              <Typography v-if="product.label" class-name="text-8 leading-10 font-bold text-primary-300 uppercase">
                {{ product.label }}
              </Typography>
            </span>
          </span>
          </td>
          <!-- Mobile Columns -->
          <td class="min-w-[136px] border-b border-primary-700 py-2 sm:hidden">
            <Typography class-name="text-12 leading-12 font-normal text-highlight1-500">
              {{ formatNumber(product.totalGanancias) }}
            </Typography>
          </td>
          <td class="min-w-[136px] border-b border-primary-700 py-2 flex gap-6 sm:hidden place-content-end">
            <Button
                type="icon"
                icon-name="less"
                bgType="gradient"
                border-color="from-accent via-primary to-primary"
                text-class-name="text-gray-100"
            />
            <Button
                type="icon"
                icon-name="more"
                bgType="gradient"
                border-color="from-accent via-primary to-primary"
                text-class-name="text-gray-100"
            />
          </td>
          <!-- Desktop Columns -->
          <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
            <Typography v-if="product.fecha" class-name="text-12 leading-12 font-normal text-gray-300">
              {{ product.fecha }}
            </Typography>
          </td>
          <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
            <Typography class-name="text-12 leading-12 font-normal text-gray-300">
              {{ addDecimals(product.capital) }} USDC
            </Typography>
          </td>
          <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
            <Typography class-name="text-12 leading-12 font-normal text-gray-300">
              {{ formatNumber(product.rendimientos) }} USDC
            </Typography>
          </td>
          <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
            <Typography class-name="text-12 leading-12 font-normal text-gray-300">
              {{ product.apy }}
            </Typography>
          </td>
          <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
            <Typography class-name="text-12 leading-12 font-normal text-gray-300">
              {{ addDecimals(product.valor) }} USDC
            </Typography>
          </td>
          <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
            <Typography class-name="text-12 leading-12 font-normal text-gray-300">
              +{{ addDecimals(product.variación) }} USDC%
            </Typography>
          </td>
          <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
            <Typography class-name="text-12 leading-12 font-normal text-gray-300">
              {{ product.variaciónPerc }}
            </Typography>
          </td>
          <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
        <span class="flex flex-col items-start gap-1">
          <Typography class-name="text-16 leading-24 font-bold text-highlight1-500">
          {{ formatNumber(product.totalGanancias) }} USDC
          </Typography>
          <Typography class-name="text-10 leading-16 font-bold text-highlight1-500">
            {{ product.totalGananciasPerc }}
          </Typography>
        </span>
          </td>
          <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
        <span class="flex gap-6">
          <Button
              type="icon-text"
              :text="'Vender'"
              border-color="from-accent via-primary to-primary"
              font-color="text-gray-100"
              font-size="text-12"
              class-name="leading-10 font-normal"
          />
          <Button
              type="icon-text"
              :text="'Comprar'"
              border-color="from-accent via-primary to-primary"
              font-color="text-gray-100"
              font-size="text-12"
              class-name="leading-10 font-normal"
          />
        </span>
          </td>
        </tr>
        <!-- Detail rows inside accordion -->
        <tr v-for="(detail, detailIndex) in product.details" :key="`${product.productId}-${detailIndex}`">
          <template v-if="product.isAccumulation && isAccordionOpen(product.productId)">
            <!-- Desktop Columns -->
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2"></td>
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
              <Typography class-name="text-12 leading-12 font-normal text-gray-400">
                {{ detail.fecha }}
              </Typography>
            </td>
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
              <Typography class-name="text-12 leading-12 font-normal text-gray-400">
                {{ addDecimals(detail.capital) }} USDC
              </Typography>
            </td>
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
              <Typography class-name="text-12 leading-12 font-normal text-gray-400">
                {{ formatNumber(detail.rendimientos) }} USDC
              </Typography>
            </td>
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
              <Typography class-name="text-12 leading-12 font-normal text-gray-400">
                {{ detail.apy }}
              </Typography>
            </td>
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
              <Typography class-name="text-12 leading-12 font-normal text-gray-400">
                {{ addDecimals(detail.valor) }} USDC
              </Typography>
            </td>
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
              <Typography class-name="text-12 leading-12 font-normal text-gray-400">
                +{{ addDecimals(detail.variación) }} USDC%
              </Typography>
            </td>
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
              <Typography class-name="text-12 leading-12 font-normal text-gray-400">
                {{ detail.variaciónPerc }}
              </Typography>
            </td>
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2">
        <span class="flex flex-col items-start gap-1">
          <Typography class-name="text-10 leading-16 font-bold text-highlight1-300">
          {{ formatNumber(detail.totalGanancias) }} USDC
          </Typography>
          <Typography class-name="text-10 leading-16 font-bold text-highlight1-300">
            {{ detail.totalGananciasPerc }}
          </Typography>
        </span>
            </td>
            <td class="hidden sm:table-cell min-w-[136px] border-b border-primary-700 py-2"></td>
            <!-- Mobile Columns -->
            <td colspan="3" class="border-b border-primary-700 py-2 sm:hidden">
              <div v-for="(col, index) in tableCols" class="grid grid-cols-2 gap-4" :key="col.key">
                <template v-if="col.isMobile === true">
                  <div class="text-10 leading-16 pl-7"
                       :class="index === 1 ?
                   'font-bold text-gray-100 pb-2 pt-6' :
                   col.key === 'totalGanancias' ?
                   'text-highlight1-500' :
                   'font-medium text-gray-400'">
                    {{ index === 1 ? col.name.split(" ")[0] : col.name }}
                  </div>
                  <div class="text-10 leading-16 text-right"
                       :class="index === 1 ? 'font-bold text-gray-100 pb-2 pt-6' :
                   col.key === 'totalGanancias' ?
                   'text-highlight1-500' :
                   'font-medium text-gray-400'">
                    <template v-if="col.isFormat === true">
                      <span v-if="col.preText">{{ col.preText }}</span>{{ formatNumber(detail[col.key]) }}
                      <span v-if="col.postText"> {{ col.postText }}</span>
                      <span v-if="col.key === 'rendimientos'">({{ detail['apy'] }} APY)</span>
                    </template>
                    <template v-else-if="col.isDecimal === true">
                      <span v-if="col.preText">{{ col.preText }}</span>{{ addDecimals(detail[col.key]) }}
                      <span v-if="col.postText"> {{ col.postText }}</span>
                    </template>
                    <template v-else>
                      <span v-if="col.preText">{{ col.preText }}</span>{{ detail[col.key] }}
                      <span v-if="col.postText"> {{ col.postText }}</span>
                    </template>
                  </div>
                </template>
              </div>
            </td>
          </template>
        </tr>
      </template>
      </tbody>
    </table>

    <div class="mt-6 flex justify-end items-center text-xs px-4 space-x-2">
      <span class="text-gray-100 font-bold">{{ Math.min(perPage, tableData.length) }} DE {{
          tableData.length
        }}</span>
      <span class="text-gray-100 px-1">|</span>
      <span class="text-white font-bold">
                <button :disabled="!hasNextPage" type="button"
                        class="text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                        @click="loadMorePools">
                    VER MÁS
                </button>
            </span>
    </div>
  </div>
</template>

<script>

import Typography from "@/components/Typography.vue";
import Button from "@/components/Button.vue";
import Icon from "@/components/Icon.vue";
import Tag from "@/components/Tag.vue";
import TableHeader from "@/components/TableHeader.vue";

export default {
  props: {
    tableData: Array,
  },
  components: {
    TableHeader,
    Typography,
    Tag,
    Button,
    Icon
  },
  data() {
    return {
      tableCols: [
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
      openAccordions: [],
      sortKey: null,
      sortAsc: true,
      perPage: 2,
    };
  },
  methods: {
    addDecimals(value) {
      return value.toFixed(2);
    },
    formatNumber(value) {
      return value.toLocaleString();
    },
    toggleAccordion(productId) {
      const index = this.openAccordions.indexOf(productId);
      if (index !== -1) {
        this.openAccordions.splice(index, 1);
      } else {
        this.openAccordions.push(productId);
      }
    },
    isAccordionOpen(productId) {
      return this.openAccordions.includes(productId);
    },
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortKey = key;
        this.sortAsc = true;
      }
    },
    isDate(value) {
      return !isNaN(Date.parse(value));
    },
    groupedProducts() {
      const productMap = {};
      this.tableData.forEach((product) => {
        if (!productMap[product.productId]) {
          productMap[product.productId] = {
            ...product,
            isAccumulation: false,
            details: [{...product}],
          };
        } else {
          productMap[product.productId].isAccumulation = true;
          productMap[product.productId].fecha = null;
          productMap[product.productId].capital += product.capital;
          productMap[product.productId].rendimientos += product.rendimientos;
          productMap[product.productId].valor += product.valor;
          productMap[product.productId].variación += product.variación;
          productMap[product.productId].totalGanancias += product.totalGanancias;
          productMap[product.productId].details.push(product);
        }
      });

      return Object.values(productMap);
    },
    loadMorePools() {
      this.perPage += 10; // Increase the number of pools to display by 10
    },
  },
  computed: {
    processedData() {
      return this.groupedProducts();
    },
    sortedData() {
      if (!this.sortKey) {
        return this.processedData;
      }
      return this.processedData.slice().sort((a, b) => {
        let valueA = a[this.sortKey];
        let valueB = b[this.sortKey];

        // Check if values are dates
        if (this.isDate(valueA) && this.isDate(valueB)) {
          valueA = new Date(valueA);
          valueB = new Date(valueB);
        }

        // Check if values are percentages
        if (typeof valueA === 'string' && valueA.includes('%') &&
            typeof valueB === 'string' && valueB.includes('%')) {
          valueA = parseFloat(valueA.replace('%', ''));
          valueB = parseFloat(valueB.replace('%', ''));
        }

        if (valueA < valueB) {
          return this.sortAsc ? -1 : 1;
        } else if (valueA > valueB) {
          return this.sortAsc ? 1 : -1;
        }
        return 0;
      });
    },
    paginatedData() {
      const endIndex = Math.min(this.perPage, this.sortedData.length);

      return this.sortedData.slice(0, endIndex);
    },
    hasNextPage() {
      return this.perPage < this.tableData.length;
    },
  }
};
</script>
