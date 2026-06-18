export const SITE = {
  url: 'https://measuretape.app',
  name: 'Ruler AR — AI Tape Measure',
  twitter: '@measuretapeapp'
};

export const APPS = {
  free: {
    id: '1279285953',
    name: 'Ruler AR — AI Tape Measure Cam',
    bundleId: 'com.tapetool.ruler',
    appStoreUrl: 'https://apps.apple.com/app/id1279285953',
    rating: 4.34,
    reviewCount: 3486,
    price: 'Free',
    edition: 'Home Utility'
  },
  pro: {
    id: '1672750252',
    name: 'Ruler Pro — LiDAR Room Scanner',
    bundleId: 'com.tapetool.ruler.pro',
    appStoreUrl: 'https://apps.apple.com/app/id1672750252',
    rating: 4.4,
    reviewCount: 220,
    price: 'Free with IAP',
    edition: 'Pro Edition'
  }
} as const;

export const SCREENSHOTS = {
  preciseRuler:
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ee/99/65/ee9965a1-386a-7a17-7680-18914626408e/Precise_ruler.png/828x1472bb.png',
  height:
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f6/04/cc/f604ccc2-cd81-03ee-4801-7e76c15a739a/Measure_height.png/828x1472bb.png',
  room:
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/62/f3/1b/62f31bf7-981c-587c-2e8a-5292f0e01cb6/Measure_room.png/828x1472bb.png',
  multiToolFP:
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f9/58/e8/f958e8bf-a608-ec4f-d0ac-0adf298995de/measuring_multi-toolfp.png/828x1472bb.png',
  multiTool:
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ec/34/fa/ec34fa3c-65cf-e6b5-e23a-a6c0a4cc874d/measuring_multi-tool.png/828x1472bb.png',
  area:
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/12/8a/b7/128ab79c-7553-3714-e29a-b4c4e8ef9cf4/Measure_area.png/828x1472bb.png'
} as const;
