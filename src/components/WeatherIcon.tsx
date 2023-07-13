import { FC, lazy } from 'react';

const WsunnyIcon = lazy(() => import('./Icons/WsunnyIcon'));
const WmoonIcon = lazy(() => import('./Icons/WmoonIcon'));
const WPartiallyCloudyIcon = lazy(() => import('./Icons/WPartiallyCloudyIcon'));
const WcloudIcon = lazy(() => import('./Icons/WcloudIcon'));
const WlowBlackCloudIcon = lazy(() => import('./Icons/WlowBlackCloudIcon'));
const WmistIcon = lazy(() => import('./Icons/WmistIcon'));
const WmoonRainIcon = lazy(() => import('./Icons/WmoonRainIcon'));
const WlightRainIcon = lazy(() => import('./Icons/WlightRainIcon'));

type Props = {
  weatherCode: number;
  isDay: boolean | string;
};

const WeatherIcon: FC<Props> = ({ weatherCode, isDay }) => {
  let selectedIcon = null;
  switch (weatherCode) {
    case 113:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 116:
      selectedIcon = isDay === 'yes' ? <WPartiallyCloudyIcon /> : <WmoonIcon />;
      break;
    case 119:
      selectedIcon = isDay === 'yes' ? <WcloudIcon /> : <WlowBlackCloudIcon />;
      break;
    case 122:
      selectedIcon =
        isDay === 'yes' ? <WlowBlackCloudIcon /> : <WlowBlackCloudIcon />;
      break;
    case 143:
      selectedIcon = isDay === 'yes' ? <WmistIcon /> : <WmistIcon />;
      break;
    case 176:
      selectedIcon = isDay === 'yes' ? <WlightRainIcon /> : <WmoonRainIcon />;
      break;
    case 179:
      selectedIcon = isDay === 'yes' ? <WlightRainIcon /> : <WmoonRainIcon />;
      break;
    case 182:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 185:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 200:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 227:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 230:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 248:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 260:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 263:
      selectedIcon = isDay === 'yes' ? <WlightRainIcon /> : <WmoonRainIcon />;
      break;
    case 266:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 281:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 284:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 293:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 296:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonRainIcon />;
      break;
    case 299:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 302:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 305:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 308:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 311:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 314:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 317:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 320:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 323:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 326:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 329:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 332:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 335:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 338:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 350:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 353:
      selectedIcon = isDay === 'yes' ? <WlightRainIcon /> : <WmoonRainIcon />;
      break;
    case 356:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 359:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 362:
      selectedIcon = isDay === 'yes' ? <WlightRainIcon /> : <WmoonRainIcon />;
      break;
    case 365:
      selectedIcon = isDay === 'yes' ? <WlightRainIcon /> : <WmoonRainIcon />;
      break;
    case 368:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 371:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 374:
      selectedIcon = isDay === 'yes' ? <WlightRainIcon /> : <WmoonRainIcon />;
      break;
    case 377:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 386:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 389:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 392:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    case 395:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
    default:
      selectedIcon = isDay === 'yes' ? <WsunnyIcon /> : <WmoonIcon />;
      break;
  }
  return <>{selectedIcon}</>;
};

export default WeatherIcon;
