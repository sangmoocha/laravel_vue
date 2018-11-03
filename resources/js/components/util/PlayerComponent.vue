<template>
    	<div class="row justify-content-center">
		<div class="col-md-12">
			<aplayer :audio="audio" :lrc-type="3" />
		</div>
	</div>

</template>

<script>
import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer);

export default {
  data() {
    return {
      audio: [
        {
          name: '호랑풍류가',
          artist: '시드노벨',
          url: 'http://roche.run.goorm.io/mp3/TigerMerryMelody.mp3',
          cover: 'https://s-sg.tc.smule.com/sf/s30/arr/52/18/c893c7ff-5a3a-4e0a-b740-c5cb35409241_256.jpg?param=300y300', // prettier-ignore
          lrc: 'http://roche.run.goorm.io/lrc/TigerMerryMelody.lrc',
        },
        {
          name: 'Mermaid girl (Extended RRver.)',
          artist: '森永真由美',
          url: 'http://pdacsgxq7.bkt.clouddn.com/mp3/mermaidgirl.mp3',
          cover: 'http://p1.music.126.net/xXxBuZksld5HtovQxI1D0A==/3227066630258578.jpg?param=300y300', // prettier-ignore
          lrc: 'http://pdacsgxq7.bkt.clouddn.com/lrc/mermaidgirl.lrc',
        },
        {
          name: 'ヒビカセ',
          artist: 'れをる',
          url: 'http://pdacsgxq7.bkt.clouddn.com/mp3/hibikase.mp3',
          cover: 'http://p1.music.126.net/cZPx3peGTuWEI_GaZB5CDg==/8892850045794893.jpg?param=300y300', // prettier-ignore
          lrc: 'http://pdacsgxq7.bkt.clouddn.com/lrc/hibikase.lrc',
        },
      ],
    };
  },
};
</script>
