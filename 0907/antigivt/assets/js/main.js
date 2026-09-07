/**
 * 韓国旅行ナビ (K-Travel Guide)
 * 10年目ウェブパブリッシャー設計 JavaScript / jQuery インタラクション & 二重言語(i18n)
 */

(function ($) {
  'use strict';

  // 為替レート基準値 (100 KRW = 約 11.2 JPY)
  var EXCHANGE_RATE = {
    krwToJpy: 0.112,
    jpyToKrw: 8.92
  };

  // 多言語リソース辞書 (日本語 / 한국어)
  var I18N_DATA = {
    ja: {
      brand_sub: "韓国旅行完全ナビ",
      nav_transit: "交通・決済",
      nav_spots: "人気エリア",
      nav_phrases: "必須韓国語",
      nav_converter: "為替計算",
      nav_emergency: "緊急・サポート",
      cta_1330: "観光案内 1330",
      hero_badge: "最新情報アップデート対応",
      hero_title: "初めてでも迷わない。<br>スマートな韓国旅行完全ガイド",
      hero_desc: "T-moneyとWOWPASSの使い分け、地下鉄ナビ、トレンドの聖水・弘大スポット、ワンタップで使える韓国語フレーズまで、日本人旅行者の安心をサポートします。",
      hero_btn_transit: "交通カードの選び方",
      hero_btn_phrases: "旅行韓国語フレーズ",
      hero_btn_calc: "為替計算機",
      hero_feat1_title: "発音ガイド付き",
      hero_feat1_desc: "カタカナ表記とワンタップコピー",
      hero_feat2_title: "地図アプリ攻略",
      hero_feat2_desc: "NAVERマップの日本語活用法",
      hero_feat3_title: "緊急時も安心",
      hero_feat3_desc: "24時間日本語対応 1330案内",
      transit_tag: "Transit & Payment Guide",
      transit_title: "交通手段とカードの完全比較",
      transit_desc: "韓国の移動はキャッシュレスが主流です。旅のスタイルに合った交通カードを選びましょう。",
      card1_badge: "定番・全国対応",
      card1_sub: "韓国全土の地下鉄・バス・タクシー・コンビニ",
      card1_li1: "空港やコンビニ、駅の券売機で手軽に購入可能",
      card1_li2: "地下鉄とバスの乗り継ぎ割引が自動適用",
      card1_li3: "チャージは基本的に現金（ウォン紙幣）のみ対応",
      card1_rec: "おすすめ: 初めての韓国旅行、地方都市も巡る方",
      card2_top: "旅行者に大人気",
      card2_badge: "プリペイドカード一体型",
      card2_sub: "日本円チャージ対応 + T-money機能搭載",
      card2_li1: "日本円のまま専用無人両替機でチャージ可能",
      card2_li2: "韓国国内の一般店舗でクレジットカード感覚で決済",
      card2_li3: "※交通(T-money)機能へのチャージは別途地下鉄券売機(現金)で必要",
      card2_rec: "おすすめ: 両替の手間を省き、カード決済を中心にしたい方",
      card3_badge: "ソウル乗り放題",
      card3_sub: "ソウル市内公共交通 短期観光パス(1/2/3/5/7日券)",
      card3_li1: "指定期間中、ソウル市内の地下鉄とバスが乗り放題",
      card3_li2: "1日券: 5,000ウォン、3日券: 10,000ウォン等と経済的",
      card3_li3: "ソウル市外（仁川空港・京畿道等）や新盆唐線は利用制限あり",
      card3_rec: "おすすめ: ソウル市内を地下鉄・バスで精力的に巡るアクティブ派",
      map_tip_title: "重要: 韓国での地図アプリは「NAVERマップ」が必須です",
      map_tip_desc: "韓国では国家セキュリティ規制により、Googleマップでの徒歩ルート案内が正常に機能しません。日本語対応の「NAVERマップ(네이버지도)」を事前にダウンロードしておくと、出口番号や徒歩経路を正確に案内してくれます。",
      spots_tag: "Popular Areas",
      spots_title: "人気エリアガイド",
      spots_desc: "トレンドの発信地から伝統的な街並みまで、目的別で探せます。",
      tab_all: "全て",
      tab_cafe: "カフェ・流行",
      tab_gourmet: "グルメ",
      tab_shopping: "ショッピング",
      spot1_tag: "カフェ・ポップアップ",
      spot1_name: "聖水洞 (ソンス)",
      spot1_station: "地下鉄2号線 聖水駅",
      spot1_desc: "かつての靴工場や倉庫をリノベーションしたカフェ、韓国コスメ・アパレルの最先端ポップアップストアが密集する今ソウルで最も熱いトレンド発信地。",
      spot1_rec: "おすすめ: カフェ巡り・限定グッズ",
      spot2_tag: "若者文化・ファッション",
      spot2_name: "弘大・延南洞 (ホンデ)",
      spot2_station: "地下鉄2号線・空港鉄道 弘大入口駅",
      spot2_desc: "ストリートファッション、個性的な雑貨店、路上ライブが楽しめる活気あふれる街。空港鉄道1本でアクセスでき、深夜まで飲食店が営業しています。",
      spot2_rec: "おすすめ: 服・アクセサリー・夜遊び",
      spot3_tag: "屋台グルメ・両替",
      spot3_name: "明洞 (ミョンドン)",
      spot3_station: "地下鉄4号線 明洞駅 / 2号線 乙支路入口駅",
      spot3_desc: "日本語が通じる店舗が多く、両替レートが良い中国大使館前両替所やコスメ専門店、夕方から出現する多彩な屋台グルメが楽しめる定番エリア。",
      spot3_rec: "おすすめ: 屋台フード・コスメ・両替",
      spot4_tag: "伝統韓屋・レトロ",
      spot4_name: "益善洞・北村 (イクソン)",
      spot4_station: "地下鉄1・3・5号線 鐘路3街駅 / 3号線 安国駅",
      spot4_desc: "韓国の伝統家屋（韓屋）を美しくリノベーションしたベーカリーカフェや雑貨店が細い路地に並びます。韓服体験スポットとしても有名。",
      spot4_rec: "おすすめ: 映え写真・韓屋カフェ・韓服",
      spot5_tag: "次世代デパート",
      spot5_name: "ザ・現代ソウル (汝矣島)",
      spot5_station: "地下鉄5・9号線 汝矣島駅地下直結",
      spot5_desc: "広大な室内庭園と自然光が注ぐソウル最大級のランドマーク百貨店。地下2階にはK-POPや最旬韓国ブランドのブティックが集結しています。",
      spot5_rec: "おすすめ: 最新K-ファッション・スイーツ",
      spot6_tag: "ローカル市場",
      spot6_name: "広蔵市場 (クァンジャン)",
      spot6_station: "地下鉄1号線 鐘路5街駅",
      spot6_desc: "100年以上の歴史を誇る伝統市場。ピンデトッ(緑豆チヂミ)、ユッケ、麻薬キンパなど、活気あふれる屋台で本場の味をリーズナブルに味わえます。",
      spot6_rec: "おすすめ: ユッケ・チヂミ・市場体験",
      phrases_tag: "Survival Korean",
      phrases_title: "旅の必須韓国語フレーズ",
      phrases_desc: "スマホ画面を見せるだけで通じる！コピーボタンをタップして翻訳アプリやメモにも貼り付けられます。",
      phrase_tab_all: "全カテゴリ",
      phrase_tab_order: "注文・飲食店",
      phrase_tab_shop: "買い物・会計",
      phrase_tab_transit: "交通・移動",
      phrase_tab_emer: "緊急・お願い",
      btn_copy_text: "コピー",
      toast_msg: "韓国語フレーズをコピーしました",
      conv_tag: "Currency Calculator",
      conv_title: "リアルタイム簡易為替換算",
      conv_sub: "基準レート目安: 100 KRW ≒ 約 11.2 円 (参考値)",
      conv_krw_label: "韓国ウォン (KRW)",
      conv_jpy_label: "日本円 (JPY 概算)",
      conv_tip_title: "お会計時の簡単計算のコツ:",
      conv_tip_desc: "韓国ウォンの表示金額から「0」を1つ取ると、おおよその日本円感覚になります。（例: 10,000ウォン → 約 1,000〜1,120円）",
      emer_tag: "Emergency & Useful Info",
      emer_title: "緊急時・お役立ちサポート",
      emer_desc: "困ったときは一人で悩まず、公的な無料日本語通訳サービスを利用しましょう。",
      emer1_title: "観光通訳案内 1330",
      emer1_sub: "24時間 年中無休・日本語対応",
      emer1_desc: "韓国観光公社が運営する公式コールセンター。道案内、観光情報だけでなく、店舗やタクシーでのトラブル時の3者通話通訳も無料対応。",
      emer1_call: "電話をかける",
      emer2_title: "警察・救急・消防",
      emer2_sub: "緊急通報窓口",
      emer2_desc: "盗難や紛失などの警察通報は「112」。急な発熱、怪我などの救急車要請は「119」。外国人通報時は自動通訳サービスへ接続されます。",
      emer3_title: "事後免税 (Tax Refund)",
      emer3_sub: "お買い物還付制度",
      emer3_desc: "1店舗あたり15,000ウォン以上のお買い物で免税対象。店頭即時免税（パスポート提示でその場で減額）または空港キオスクで手続き可能。",
      footer_desc: "日本人のための韓国旅行完全ナビゲーションシステム",
      footer_copy: "掲載情報は現地の状況により変更される場合があります。"
    },
    ko: {
      brand_sub: "한국 여행 완전 가이드",
      nav_transit: "교통·결제",
      nav_spots: "인기 지역",
      nav_phrases: "필수 회화",
      nav_converter: "환율 계산",
      nav_emergency: "긴급·지원",
      cta_1330: "관광안내 1330",
      hero_badge: "최신 정보 업데이트 완료",
      hero_title: "처음이어도 안심할 수 있는<br>스마트한 한국 여행 완전 가이드",
      hero_desc: "T-money와 WOWPASS 선택법, 지하철 내비게이션, 성수·홍대 핫플레이스, 원탭 여행 회화까지 일본인 여행객과 안내자를 완벽 지원합니다.",
      hero_btn_transit: "교통카드 선택 가이드",
      hero_btn_phrases: "여행 필수 회화",
      hero_btn_calc: "실시간 환율 계산기",
      hero_feat1_title: "발음 가이드 수록",
      hero_feat1_desc: "카타카나 발음 및 원탭 복사 기능",
      hero_feat2_title: "지도 앱 활용법",
      hero_feat2_desc: "네이버 지도 다국어 길찾기 필수 팁",
      hero_feat3_title: "긴급 상황도 안심",
      hero_feat3_desc: "24시간 무료 다국어 1330 관광 안내",
      transit_tag: "Transit & Payment Guide",
      transit_title: "교통수단 및 교통카드 완전 비교",
      transit_desc: "한국 대중교통은 캐시리스가 기본입니다. 여행 일정과 동선에 딱 맞는 교통카드를 선택하세요.",
      card1_badge: "전국 표준·기본 카드",
      card1_sub: "전국 지하철·시내버스·택시·편의점 결제",
      card1_li1: "공항, 편의점, 지하철 무인 발매기에서 손쉽게 구매 가능",
      card1_li2: "지하철과 버스 간 환승 할인 혜택 자동 적용",
      card1_li3: "충전은 기본적으로 현금(원화 지폐)으로만 가능",
      card1_rec: "추천: 첫 한국 여행 및 지방 도시까지 이동하는 여행자",
      card2_top: "여행객 선호도 1위",
      card2_badge: "선불카드 일체형",
      card2_sub: "엔화 직접 충전 지원 + T-money 교통 기능 탑재",
      card2_li1: "엔화 현찰 그대로 전용 무인 키오스크에서 충전 가능",
      card2_li2: "한국 내 신용카드 가맹점에서 카드 결제처럼 간편 사용",
      card2_li3: "※교통카드(T-money) 기능 충전은 지하철 발매기(원화 현금)에서 별도 진행",
      card2_rec: "추천: 환전 번거로움을 줄이고 카드 결제 위주로 여행하려는 분",
      card3_badge: "서울 시내 무제한",
      card3_sub: "서울 시내 대중교통 단기 관광권(1/2/3/5/7일권)",
      card3_li1: "지정된 기간 동안 서울 시내 지하철과 버스를 무제한 탑승",
      card3_li2: "1일권: 5,000원, 3일권: 10,000원 등 경제적인 요금 체계",
      card3_li3: "서울 시외 구간(인천공항, 경기도 등) 및 신분당선은 탑승 제한",
      card3_rec: "추천: 서울 시내 주요 명소를 대중교통으로 알차게 둘러볼 여행자",
      map_tip_title: "중요: 한국 여행 시 지도 앱은 「네이버 지도」가 필수입니다",
      map_tip_desc: "한국은 안보 규정상 구글 지도의 도보 길안내 서비스가 제한됩니다. 다국어(일본어/영어)를 지원하는 「네이버 지도」를 미리 설치하면 출구 번호와 최적 도보 경로를 정확히 안내받을 수 있습니다.",
      spots_tag: "Popular Areas",
      spots_title: "서울 인기 지역 가이드",
      spots_desc: "최신 트렌드 발신지부터 감성적인 전통 한옥 골목까지 한눈에 확인하세요.",
      tab_all: "전체",
      tab_cafe: "카페·트렌드",
      tab_gourmet: "맛집·미식",
      tab_shopping: "쇼핑",
      spot1_tag: "카페·팝업스토어",
      spot1_name: "성수동",
      spot1_station: "지하철 2호선 성수역",
      spot1_desc: "과거 제화 공장과 붉은 벽돌 창고를 감각적으로 개조한 카페와 브랜드 팝업스토어가 밀집한 서울 최고의 트렌드 핫플레이스.",
      spot1_rec: "추천: 감성 카페 투어, 브랜드 팝업 체험",
      spot2_tag: "젊음의 거리·패션",
      spot2_name: "홍대·연남동",
      spot2_station: "지하철 2호선·공항철도 홍대입구역",
      spot2_desc: "스트리트 패션, 개성 넘치는 소품숍, 길거리 버스킹 공연이 가득한 젊음의 중심지. 공항철도 직통 연결로 접근성이 뛰어납니다.",
      spot2_rec: "추천: 패션 쇼핑, 나이트라이프, 맛집",
      spot3_tag: "길거리 음식·환전",
      spot3_name: "명동",
      spot3_station: "지하철 4호선 명동역 / 2호선 을지로입구역",
      spot3_desc: "외국어 소통이 원활하고 환전 우대율이 좋은 명동 사설 환전소, K-뷰티 로드숍, 해 질 녘 열리는 다채로운 야시장 먹거리가 있는 명소.",
      spot3_rec: "추천: 길거리 야시장 먹거리, 화장품 쇼핑, 환전",
      spot4_tag: "전통 한옥·레트로",
      spot4_name: "익선동·북촌",
      spot4_station: "지하철 1·3·5호선 종로3가역 / 3호선 안국역",
      spot4_desc: "한국 전통 한옥을 아름답게 보존하여 탄생한 디저트 카페와 골목 맛집들이 즐비한 곳. 한복 대여 체험 코스로도 인기가 높습니다.",
      spot4_rec: "추천: 인생 사진 촬영, 한옥 베이커리 카페, 한복 체험",
      spot5_tag: "차세대 복합 백화점",
      spot5_name: "더현대 서울 (여의도)",
      spot5_station: "지하철 5·9호선 여의도역 지하 직결",
      spot5_desc: "탁 트인 실내 정원과 자연 채광이 어우러진 서울 최대 규모의 랜드마크 쇼핑몰. K-패션과 트렌디한 F&B 브랜드가 집결해 있습니다.",
      spot5_rec: "추천: 최신 K-패션 쇼핑, 핫플레이스 디저트",
      spot6_tag: "전통 로컬 시장",
      spot6_name: "광장시장",
      spot6_station: "지하철 1호선 종로5가역",
      spot6_desc: "100년이 넘는 전통을 간직한 서울 대표 상설시장. 바삭한 빈대떡, 신선한 육회, 마약김밥 등 활기찬 장터의 매력을 느낄 수 있습니다.",
      spot6_rec: "추천: 빈대떡, 육회, 전통 장터 음식 체험",
      phrases_tag: "Survival Korean",
      phrases_title: "여행 필수 실전 회화",
      phrases_desc: "스마트폰 화면을 보여주기만 해도 소통 가능! 복사 버튼을 눌러 번역 앱이나 메모장에 즉시 붙여넣을 수 있습니다.",
      phrase_tab_all: "전체 카테고리",
      phrase_tab_order: "주문·식당",
      phrase_tab_shop: "쇼핑·결제",
      phrase_tab_transit: "교통·이동",
      phrase_tab_emer: "긴급·요청",
      btn_copy_text: "복사",
      toast_msg: "한국어 문장이 복사되었습니다",
      conv_tag: "Currency Calculator",
      conv_title: "실시간 간이 환율 계산기",
      conv_sub: "기준 환율 참고치: 100 KRW ≒ 약 11.2 JPY",
      conv_krw_label: "대한민국 원 (KRW)",
      conv_jpy_label: "일본 엔 (JPY 대략)",
      conv_tip_title: "현장 결제 시 빠른 계산 팁:",
      conv_tip_desc: "원화 금액에서 숫자 '0'을 하나 빼면 대략적인 엔화 금액 감을 잡을 수 있습니다. (예: 10,000원 → 약 1,000~1,120엔)",
      emer_tag: "Emergency & Useful Info",
      emer_title: "긴급 상황 지원 & 필수 정보",
      emer_desc: "어려운 상황이 발생했을 때 당황하지 말고 공공 다국어 통역 서비스를 적극 활용하세요.",
      emer1_title: "관광통역안내 1330",
      emer1_sub: "24시간 연중무휴 무료 통역·관광 안내",
      emer1_desc: "한국관광공사가 운영하는 공식 안내 콜센터. 길안내, 관광지 정보뿐 아니라 택시나 매장에서의 의사소통 문제 시 3자 통화 통역도 무료 지원.",
      emer1_call: "전화 걸기",
      emer2_title: "경찰·소방·응급",
      emer2_sub: "긴급 신고 대표 번호",
      emer2_desc: "도난·분실 등 경찰 신고는 '112', 급성 질환 및 사고 응급차 요청은 '119'. 외국인 통보 시 자동 통역 서비스로 연결됩니다.",
      emer3_title: "사후면세 (Tax Refund)",
      emer3_sub: "외국인 관광객 부가세 환급",
      emer3_desc: "매장당 15,000원 이상 구매 시 부가세 환급 대상. 매장 현장 즉시 환급(여권 제시) 또는 공항 무인 키오스크에서 환급받을 수 있습니다.",
      footer_desc: "일본인 관광객을 위한 스마트 한국 여행 내비게이션 시스템",
      footer_copy: "게재된 정보는 현지 사정에 따라 일부 변경될 수 있습니다."
    }
  };

  $(document).ready(function () {
    initLanguageSwitcher();
    initMobileMenu();
    initSpotFilter();
    initPhraseFilter();
    initCopyAction();
    initCurrencyConverter();
    initScrollToTop();
    initSmoothScroll();
  });

  /**
   * 이중언어(i18n) 전환 시스템
   */
  function initLanguageSwitcher() {
    var savedLang = localStorage.getItem('k_tabi_lang') || 'ja';
    applyLanguage(savedLang);

    $('.btn-lang').on('click', function () {
      var selectedLang = $(this).data('lang');
      applyLanguage(selectedLang);
      localStorage.setItem('k_tabi_lang', selectedLang);
    });
  }

  function applyLanguage(lang) {
    var dict = I18N_DATA[lang] || I18N_DATA.ja;

    // 언어 버튼 활성화 상태 갱신 (데스크톱 및 모바일 동기화)
    $('.btn-lang').removeClass('active bg-blue-600 text-white').addClass('text-slate-600 hover:text-slate-900');
    $('.btn-lang[data-lang="' + lang + '"]').addClass('active bg-blue-600 text-white').removeClass('text-slate-600 hover:text-slate-900');

    // html 태그 lang 속성 갱신
    document.documentElement.lang = lang;

    // data-i18n 속성을 가진 모든 DOM 텍스트/HTML 치환
    $('[data-i18n]').each(function () {
      var key = $(this).data('i18n');
      if (dict[key]) {
        $(this).html(dict[key]);
      }
    });

    // 토스트 기본 메시지 갱신
    $('#toastMessage').text(dict.toast_msg || 'コピーしました');
  }

  /**
   * 모바일 내비게이션 토글 제어
   */
  function initMobileMenu() {
    var $menuBtn = $('#mobileMenuBtn');
    var $mobileMenu = $('#mobileMenu');

    $menuBtn.on('click', function () {
      var isExpanded = $(this).attr('aria-expanded') === 'true';
      $(this).attr('aria-expanded', !isExpanded);
      $mobileMenu.slideToggle(200);
    });

    $('#mobileMenu a').on('click', function () {
      $mobileMenu.slideUp(200);
      $menuBtn.attr('aria-expanded', 'false');
    });
  }

  /**
   * 명소 카테고리 필터링 (jQuery)
   */
  function initSpotFilter() {
    var $tabs = $('.spot-tab-btn');
    var $items = $('.spot-card');

    $tabs.on('click', function () {
      var category = $(this).data('filter');

      $tabs.removeClass('active bg-blue-600 text-white').addClass('bg-slate-200 text-slate-700 hover:bg-slate-300');
      $(this).addClass('active bg-blue-600 text-white').removeClass('bg-slate-200 text-slate-700 hover:bg-slate-300');

      if (category === 'all') {
        $items.stop(true, true).fadeIn(250);
      } else {
        $items.each(function () {
          var itemCat = $(this).data('category');
          if (itemCat === category) {
            $(this).stop(true, true).fadeIn(250);
          } else {
            $(this).stop(true, true).hide();
          }
        });
      }
    });
  }

  /**
   * 여행 회화 카테고리 필터링
   */
  function initPhraseFilter() {
    var $phraseTabs = $('.phrase-tab-btn');
    var $phraseItems = $('.phrase-item');

    $phraseTabs.on('click', function () {
      var cat = $(this).data('category');

      $phraseTabs.removeClass('active bg-slate-900 text-white').addClass('bg-slate-100 text-slate-600 hover:bg-slate-200');
      $(this).addClass('active bg-slate-900 text-white').removeClass('bg-slate-100 text-slate-600 hover:bg-slate-200');

      if (cat === 'all') {
        $phraseItems.stop(true, true).fadeIn(200);
      } else {
        $phraseItems.each(function () {
          if ($(this).data('category') === cat) {
            $(this).stop(true, true).fadeIn(200);
          } else {
            $(this).stop(true, true).hide();
          }
        });
      }
    });
  }

  /**
   * 클립보드 복사 및 토스트 노출
   */
  function initCopyAction() {
    var toastTimer = null;
    var $toast = $('#toastNotice');

    $(document).on('click', '.btn-copy', function () {
      var textToCopy = $(this).data('copy');
      if (!textToCopy) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(showToast).catch(fallbackCopy);
      } else {
        fallbackCopy(textToCopy);
      }
    });

    function fallbackCopy(text) {
      var $temp = $('<textarea>');
      $('body').append($temp);
      $temp.val(text).select();
      try {
        document.execCommand('copy');
        showToast();
      } catch (err) {
        console.error('Copy failed', err);
      }
      $temp.remove();
    }

    function showToast() {
      $toast.addClass('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        $toast.removeClass('show');
      }, 2200);
    }
  }

  /**
   * 실시간 원-엔 환율 계산기
   */
  function initCurrencyConverter() {
    var $krwInput = $('#krwInput');
    var $jpyInput = $('#jpyInput');

    $krwInput.on('input', function () {
      var krwVal = parseFloat($(this).val());
      if (isNaN(krwVal) || krwVal < 0) {
        $jpyInput.val('');
        return;
      }
      var jpyResult = Math.round(krwVal * EXCHANGE_RATE.krwToJpy);
      $jpyInput.val(jpyResult.toLocaleString());
    });

    $jpyInput.on('input', function () {
      var jpyVal = parseFloat($(this).val().replace(/,/g, ''));
      if (isNaN(jpyVal) || jpyVal < 0) {
        $krwInput.val('');
        return;
      }
      var krwResult = Math.round(jpyVal * EXCHANGE_RATE.jpyToKrw);
      $krwInput.val(krwResult.toLocaleString());
    });
  }

  /**
   * 최상단 이동 버튼
   */
  function initScrollToTop() {
    var $btnBackTop = $('#btnBackTop');

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $btnBackTop.addClass('show');
      } else {
        $btnBackTop.removeClass('show');
      }
    });

    $btnBackTop.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 300);
    });
  }

  /**
   * 고정 헤더 고려한 스무스 스크롤
   */
  function initSmoothScroll() {
    $('a[href^="#"]').not('[href="#"]').on('click', function (e) {
      var targetId = $(this).attr('href');
      var $target = $(targetId);

      if ($target.length) {
        e.preventDefault();
        var headerOffset = $('#mainHeader').outerHeight() || 70;
        var targetPosition = $target.offset().top - headerOffset;

        $('html, body').animate({
          scrollTop: targetPosition
        }, 350);
      }
    });
  }

})(jQuery);
