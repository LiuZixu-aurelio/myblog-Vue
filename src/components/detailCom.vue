<template>
  <div class="whoheigt color2">
    <div class="whocont">
      <h2>{{ na }}</h2>
      <div class="detail-images">
        <div v-for="(item, index) in im" :key="index" class="detail-media-wrap">
          <video
            v-if="isVideo(item)"
            class="detail-media detail-video"
            controls
            playsinline
            preload="metadata"
          >
            <source :src="item" :type="videoMime(item)">
            当前浏览器不支持该视频格式
          </video>
          <img
            v-else
            :src="item"
            :class="['detail-media', { 'detail-media--fullwidth': isAnalyzer09(item) }]"
            alt="detail image"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCom',
  props: {
    na: String,
    im: Array,
  },
  methods: {
    isVideo(src) {
      return typeof src === 'string' && /\.(mp4|webm|mov)(\?|#|$)/i.test(src)
    },
    videoMime(src) {
      if (typeof src !== 'string') return 'video/mp4'
      if (/\.webm(\?|#|$)/i.test(src)) return 'video/webm'
      if (/\.mov(\?|#|$)/i.test(src)) return 'video/quicktime'
      return 'video/mp4'
    },
    isAnalyzer09(src) {
      return typeof src === 'string' && src.includes('SchwarzkopfAnalyzer09')
    },
  },
}
</script>

<style scoped>
.detail-images {
  width: 100%;
}

.detail-media-wrap {
  width: min(1000px, 100%);
  margin: 0 auto;
  line-height: 0;
}

.detail-media-wrap + .detail-media-wrap {
  margin-top: 0;
}

.detail-media {
  width: 100%;
  display: block;
  border-radius: 6px;
  margin: 0;
}

.detail-video {
  height: auto;
  background: #000;
  object-fit: contain;
  vertical-align: top;
}

.detail-video::-webkit-media-controls {
  border-radius: 0 0 6px 6px;
}

.detail-media--fullwidth {
  width: 100%;
  max-width: none;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .detail-media-wrap {
    margin-top: 0;
  }
}
</style>
