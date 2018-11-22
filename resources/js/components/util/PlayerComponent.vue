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
            name: '도망가지마',
            artist: 'Motte',
            url: 'https://firebasestorage.googleapis.com/v0/b/ivon-b1b54.appspot.com/o/%EB%AA%A8%ED%8A%B8%20(Motte)%20-%20%EB%8F%84%EB%A7%9D%EA%B0%80%EC%A7%80%EB%A7%88%20(%EC%97%90%EC%9D%B4%ED%8B%B4%20OST).mp3?alt=media&token=db8cc75f-e17d-489c-a039-0a842239b4d1',
            cover: 'https://klyrics.net/wp-content/uploads/2018/09/Motte-A-Teen-Part-4.jpg', // prettier-ignore
            lrc: 'http://127.0.0.1:8000/lrc/Don`tRunAway.lrc',
          },
          {
            name: '가을 아침',
            artist: 'IU',
            url: 'https://firebasestorage.googleapis.com/v0/b/vue-firebase-learning-33ce7.appspot.com/o/01.%20%EA%B0%80%EC%9D%84%20%EC%95%84%EC%B9%A8%20(Autumn%20morning).mp3?alt=media&token=aa8c1322-eea8-46f5-8283-319b895d7494',
            cover: 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fed8cfcde1b3a0c6ee5e43653d3175958.600x600x1.jpg?param=300y300', // prettier-ignore
            lrc: 'http://127.0.0.1:8000/lrc/AutumnMorning.lrc',
          },
          {
            name: '비행운',
            artist: '문문',
            url: 'https://firebasestorage.googleapis.com/v0/b/fn-ivon.appspot.com/o/%EB%B9%84%ED%96%89%EC%9A%B4.mp3?alt=media&token=4d242cf6-8b44-402f-9ba0-2b73e828b0bb',
            cover: 'https://t1.daumcdn.net/cfile/tistory/9902EB335A1F8F9E20?param=300y300', // prettier-ignore
            lrc: 'http://127.0.0.1:8000/lrc/Airship.lrc',
          },
          {
            name: '가장 보통의 존재',
            artist: 'IU',
            url: 'https://firebasestorage.googleapis.com/v0/b/fn-ivon.appspot.com/o/%EA%B0%80%EC%9E%A5%20%EB%B3%B4%ED%86%B5%EC%9D%98%20%EC%A1%B4%EC%9E%AC.mp3?alt=media&token=2399ea8e-e4f1-440b-8304-5f1f98e5ea35',
            cover: 'https://img1.daumcdn.net/thumb/R1920x0/?fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F215A8940565875AB252E5E?param=300y300', // prettier-ignore
            lrc: 'http://127.0.0.1:8000/lrc/TheMostOrdinaryBeing.lrc',
          },
          {
            name: '호랑풍류가',
            artist: '설레임 에디션',
            url: 'https://firebasestorage.googleapis.com/v0/b/fn-ivon.appspot.com/o/%ED%98%B8%EB%9E%91%ED%92%8D%EB%A5%98%EA%B0%80.mp3?alt=media&token=f8a55b23-b842-44e1-b560-a00dee17d0f6',
            cover: 'https://s3.namuwikiusercontent.com/s/dd1b5806c71c0a29708aacbed1246fdda56245493e6e2b2a9a607edbd0e608007661cd800abc57c6db9ec7c2446d32fa39799de587fdf3d16be9628c7ff33a212b509bd8af91ed39de6ef6f6dd5dcc3a6dfd620aa05f885fc3d7b00acb9999d5?param=300y300', // prettier-ignore
            lrc: 'http://127.0.0.1:8000/lrc/TigerMerryMelody.lrc',
          },
          {
            name: '호랑수월가',
            artist: 'Narae',
            url: 'https://firebasestorage.googleapis.com/v0/b/fn-ivon.appspot.com/o/%ED%98%B8%EB%9E%91%EC%88%98%EC%9B%94%EA%B0%80.mp3?alt=media&token=7524682a-7c1d-42b6-8986-9e74b7a8fb44',
            cover: 'https://s3.namuwikiusercontent.com/s/dd1b5806c71c0a29708aacbed1246fdda56245493e6e2b2a9a607edbd0e608007661cd800abc57c6db9ec7c2446d32fa39799de587fdf3d16be9628c7ff33a212b509bd8af91ed39de6ef6f6dd5dcc3a6dfd620aa05f885fc3d7b00acb9999d5?param=300y300', // prettier-ignore
            lrc: 'http://127.0.0.1:8000/lrc/HorangPungryuga.lrc',
          },
          {
            name: 'Memory(feat. Bizzy)',
            artist: '이효리',
            url: 'https://firebasestorage.googleapis.com/v0/b/vue-firebase-learning-33ce7.appspot.com/o/%EC%9D%B4%ED%9A%A8%EB%A6%AC%20-%20Memory%20(feat.%20Bizzy).mp3?alt=media&token=6bde524e-fb24-41d3-ab78-1b5eb87b38a7',
            cover: 'https://upload.wikimedia.org/wikipedia/ko/6/6c/%EC%9D%B4%ED%9A%A8%EB%A6%AC_-_H-Logic.jpg?param=300y300', // prettier-ignore
            lrc: 'http://127.0.0.1:8000/lrc/memory.lrc',
          },
          {
            name: '레티아리이',
            artist: 'Kevin M./SungKyu Hong',
            url: 'https://firebasestorage.googleapis.com/v0/b/fn-ivon.appspot.com/o/%5BReveal%5D%20%EB%A0%88%ED%8B%B0%EC%95%84%EB%A6%AC%EC%9D%B4%20MV%20RA%20Reina%20(by.%20Kevin)%20-%20TOS%20%ED%8A%B8%EB%A6%AC%EC%98%A4%EB%B8%8C%EC%84%B8%EC%9D%B4%EB%B9%84%EC%96%B4.mp3?alt=media&token=973edce8-0a7e-48cc-bf2d-8a59046a0702',
            cover: 'https://i.ytimg.com/vi/B_2odAdgmS8/mqdefault.jpg?param=300y300', // prettier-ignore
            lrc: 'http://127.0.0.1:8000/lrc/Reveal.lrc',
          },
        ],
      };
    },
  };
</script>
