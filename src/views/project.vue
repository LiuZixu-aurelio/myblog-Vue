<template>
  <div class="whoheigt color2">
    <div class="whocont">
      <h2 class="project-title">作品</h2>

      <div class="project-toolbar">
        <label class="project-filter">
          <span class="sr-only">选择业务场景</span>
          <select v-model="selectedCategory" aria-label="选择业务场景">
            <option value="" disabled>选择业务场景</option>
            <option value="all">全部</option>
            <option value="b2b">B2B企业产品</option>
            <option value="b2c">B2C消费产品</option>
          </select>
        </label>
      </div>

      <CardCom
        v-for="item in filteredProjectCards"
        :key="item.id"
        :na="item.title"
        :ur="item.cover"
        :lnk="item.path"
      />
    </div>
  </div>
</template>

<script>
import CardCom from '../components/cardCom.vue'
import { projectCards } from '../pages/works.js'

const VALID_CATEGORIES = new Set(['all', 'b2b', 'b2c'])

export default {
  name: 'ProjectView',
  components: {
    CardCom,
  },
  data() {
    return {
      selectedCategory: '',
      projectCards,
    }
  },
  computed: {
    filteredProjectCards() {
      if (!this.selectedCategory || this.selectedCategory === 'all') {
        return this.projectCards
      }
      return this.projectCards.filter((item) => item.category === this.selectedCategory)
    },
  },
  watch: {
    selectedCategory(value) {
      this.syncCategoryToRoute(value)
    },
    '$route.query.category'(value) {
      this.applyCategoryFromQuery(value)
    },
  },
  created() {
    this.applyCategoryFromQuery(this.$route.query.category)
  },
  methods: {
    normalizeCategory(value) {
      if (Array.isArray(value)) value = value[0]
      if (typeof value !== 'string') return ''
      const category = value.trim().toLowerCase()
      return VALID_CATEGORIES.has(category) ? category : ''
    },
    applyCategoryFromQuery(value) {
      const category = this.normalizeCategory(value)
      if (this.selectedCategory !== category) {
        this.selectedCategory = category
      }
    },
    syncCategoryToRoute(value) {
      const category = this.normalizeCategory(value)
      const current = this.normalizeCategory(this.$route.query.category)
      if (category === current) return

      const query = { ...this.$route.query }
      if (!category || category === 'all') {
        delete query.category
      } else {
        query.category = category
      }

      this.$router.replace({ query }).catch(() => {})
    },
  },
}
</script>

<style lang="scss">
.whocont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* 标题单独一行、居中（对齐设计稿） */
.project-title {
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 20px;
}

/* 筛选单独一行，靠左并与左侧卡片列对齐 */
.project-toolbar {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: calc(496px * 2 + 24px * 4);
  margin: 8px auto 0;
  padding: 0 24px;
  text-align: left;
}

.project-filter {
  display: block;
  width: fit-content;
  margin: 0;
  margin-right: auto;
}

.project-filter select {
  box-sizing: border-box;
  min-width: 238px;
  height: 42px;
  padding: 0 32px 0 14px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background-color: #fafcfd;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23999' d='M1.4 0.6L6 5.2 10.6 0.6 12 2 6 8 0 2z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 10px 7px;
  color: #666;
  font-size: 16px;
  line-height: 36px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}

.project-filter select:focus {
  border-color: #ccc;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.whocont::after {
  content: '';
  flex: 1 1 496px;
  max-width: 496px;
  margin: 24px;
}

@media (max-width: 768px) {
  .project-toolbar {
    max-width: none;
    margin-top: 12px;
    padding: 0;
  }

  .project-filter {
    width: 100%;
  }

  .project-filter select {
    width: 100%;
  }
}
</style>
