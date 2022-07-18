import { FC, memo } from 'react';
import { useTheme } from 'styled-components';
// icons
import { ReactComponent as Approved } from 'assets/icons/approved.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow-up.svg';
import { ReactComponent as Bitcoin } from 'assets/icons/bitcoin.svg';
import { ReactComponent as BitcoinCircleOrange } from 'assets/icons/bitcoin-circle-orange.svg';
import { ReactComponent as BitcoinCircle } from 'assets/icons/bitcoin-circle.svg';
import { ReactComponent as Burger } from 'assets/icons/burger.svg';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import { ReactComponent as Clock } from 'assets/icons/clock.svg';
import { ReactComponent as Copy } from 'assets/icons/copy.svg';
import { ReactComponent as Dollar } from 'assets/icons/dollar.svg';
import { ReactComponent as DollarCircle } from 'assets/icons/dollar-circle.svg';
import { ReactComponent as ArrowDownBold } from 'assets/icons/arrow-down-bold.svg';
import { ReactComponent as RubleCircle } from 'assets/icons/ruble-circle.svg';
import { ReactComponent as Ethereum } from 'assets/icons/ethereum.svg';
import { ReactComponent as Euro } from 'assets/icons/euro.svg';
import { ReactComponent as FlagEn } from 'assets/icons/flag-en.svg';
import { ReactComponent as FlagRu } from 'assets/icons/flag-ru.svg';
import { ReactComponent as Fruitin } from 'assets/icons/fruitin.svg';
import { ReactComponent as FruitinLogo } from 'assets/icons/fruitin-logo.svg';
import { ReactComponent as PaypeopleLogo } from 'assets/icons/paypeople-logo.svg';
import { ReactComponent as Plane } from 'assets/icons/plane.svg';
import { ReactComponent as PlusOutline } from 'assets/icons/plus-outline.svg';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as PlusGradient } from 'assets/icons/plus-gradient.svg';
import { ReactComponent as QrCode } from 'assets/icons/qr-code.svg';
import { ReactComponent as QrCodeSmall } from 'assets/icons/qr-small.svg';
import { ReactComponent as Refresh } from 'assets/icons/refresh.svg';
import { ReactComponent as Speedometer } from 'assets/icons/speedometer.svg';
import { ReactComponent as Statistic } from 'assets/icons/statistic.svg';
import { ReactComponent as StyleCards } from 'assets/icons/style-cards.svg';
import { ReactComponent as StyleList } from 'assets/icons/style-list.svg';
import { ReactComponent as StylePreferences } from 'assets/icons/style-preferences.svg';
import { ReactComponent as Token } from 'assets/icons/token.svg';
import { ReactComponent as Frtn } from 'assets/icons/frtn.svg';
import { ReactComponent as FrtnCircle } from 'assets/icons/frtn-circle.svg';
import { ReactComponent as FrtnDark } from 'assets/icons/frtn-dark.svg';
import { ReactComponent as Transfer } from 'assets/icons/transfer.svg';
import { ReactComponent as Ton } from 'assets/icons/ton.svg';
import { ReactComponent as TonCircle } from 'assets/icons/ton-circle.svg';
import { ReactComponent as ArrowUpBold } from 'assets/icons/arrow-up-bold.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { ReactComponent as VisaLogo } from 'assets/icons/visa-logo.svg';
import { ReactComponent as VisaMaster } from 'assets/icons/visa-master.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Mail } from 'assets/icons/mail.svg';
import { ReactComponent as Messenger } from 'assets/icons/messenger.svg';
import { ReactComponent as More } from 'assets/icons/more.svg';
import { ReactComponent as Telegram } from 'assets/icons/telegram.svg';
import { ReactComponent as Viber } from 'assets/icons/viber.svg';
import { ReactComponent as Eth } from 'assets/icons/eth.svg';
import { ReactComponent as Eur } from 'assets/icons/eur.svg';
import { ReactComponent as Rub } from 'assets/icons/ruble.svg';
import { ReactComponent as Xrp } from 'assets/icons/xrp.svg';
import { ReactComponent as XrpCircle } from 'assets/icons/xrp-circle.svg';
import { ReactComponent as Xmr } from 'assets/icons/xmr.svg';
import { ReactComponent as XmrCircle } from 'assets/icons/xmr-circle.svg';
import { ReactComponent as Xlm } from 'assets/icons/xlm.svg';
import { ReactComponent as XlmCircle } from 'assets/icons/xlm-circle.svg';
import { ReactComponent as Bch } from 'assets/icons/bch.svg';
import { ReactComponent as BchCircle } from 'assets/icons/bch-circle.svg';
import { ReactComponent as Wbtc } from 'assets/icons/wbtc.svg';
import { ReactComponent as WbtcCircle } from 'assets/icons/wbtc-circle.svg';
import { ReactComponent as Usdc } from 'assets/icons/usdc.svg';
import { ReactComponent as UsdcCircle } from 'assets/icons/usdc-circle.svg';
import { ReactComponent as Dash } from 'assets/icons/dash.svg';
import { ReactComponent as DashCircle } from 'assets/icons/dash-circle.svg';
import { ReactComponent as Eos } from 'assets/icons/eos.svg';
import { ReactComponent as EosCircle } from 'assets/icons/eos-circle.svg';
import { ReactComponent as Ada } from 'assets/icons/ada.svg';
import { ReactComponent as AdaCircle } from 'assets/icons/ada-circle.svg';
import { ReactComponent as Ltc } from 'assets/icons/ltc.svg';
// import { ReactComponent as Usdt } from 'assets/icons/usdt.svg';
import { ReactComponent as LtcCircle } from 'assets/icons/ltc-circle.svg';
import { ReactComponent as Sort } from 'assets/icons/sort.svg';
import { ReactComponent as DoneAll } from 'assets/icons/done-all.svg';
import { ReactComponent as ReportProblem } from 'assets/icons/report-problem.svg';
import { ReactComponent as AdanaWhiteCircle } from 'assets/icons/icons-white-crypto/adana-circle-white.svg';
import { ReactComponent as BitcoinWhiteCircle } from 'assets/icons/icons-white-crypto/bitcoin-circle-white.svg';
import { ReactComponent as DashWhiteCircle } from 'assets/icons/icons-white-crypto/dash-circle-white.svg';
import { ReactComponent as DollarWhiteCircle } from 'assets/icons/icons-white-crypto/dollar-circle-white.svg';
import { ReactComponent as EosWhiteCircle } from 'assets/icons/icons-white-crypto/eos-circle-white.svg';
import { ReactComponent as EthereumWhiteCircle } from 'assets/icons/icons-white-crypto/ethereum-circle-white.svg';
import { ReactComponent as EuroWhiteCircle } from 'assets/icons/icons-white-crypto/euro-circle-white.svg';
import { ReactComponent as FrtnWhiteCircle } from 'assets/icons/icons-white-crypto/frtn-circle-white.svg';
import { ReactComponent as LtcWhiteCircle } from 'assets/icons/icons-white-crypto/ltc-circle-white.svg';
import { ReactComponent as RubleWhiteCircle } from 'assets/icons/icons-white-crypto/ruble-circle-white.svg';
import { ReactComponent as TokenWhiteCircle } from 'assets/icons/icons-white-crypto/token-circle-white.svg';
import { ReactComponent as TonWhiteCircle } from 'assets/icons/icons-white-crypto/ton-circle-white.svg';
import { ReactComponent as XrpWhiteCircle } from 'assets/icons/icons-white-crypto/xrp-circle-white.svg';
import { ReactComponent as XlmWhiteCircle } from 'assets/icons/icons-white-crypto/xlm-circle-white.svg';
import { ReactComponent as CameraCircle } from 'assets/icons/camera-circle.svg';
import { ReactComponent as PseudoBalance } from 'assets/icons/pseudo-balance.svg';
import { ReactComponent as XmrWhiteCircle } from 'assets/icons/icons-white-crypto/xmr-circle-white.svg';
import { ReactComponent as BchWhiteCircle } from 'assets/icons/icons-white-crypto/bch-circle-white.svg';
import { ReactComponent as UsdcWhiteCircle } from 'assets/icons/icons-white-crypto/usdc-circle-white.svg';
import { ReactComponent as WethWhiteCircle } from 'assets/icons/icons-white-crypto/weth-circle-white.svg';
import { ReactComponent as WethCircle } from 'assets/icons/weth-circle.svg';
import { ReactComponent as Weth } from 'assets/icons/weth.svg';
import { ReactComponent as AncWhiteCircle } from 'assets/icons/icons-white-crypto/anc-circle-white.svg';
import { ReactComponent as AncCircle } from 'assets/icons/anc-circle.svg';
import { ReactComponent as Anc } from 'assets/icons/anc.svg';
import { ReactComponent as GasWhiteCircle } from 'assets/icons/icons-white-crypto/gas-circle-white.svg';
import { ReactComponent as GasCircle } from 'assets/icons/gas-circle.svg';
import { ReactComponent as Gas } from 'assets/icons/gas.svg';
import { ReactComponent as NeoWhiteCircle } from 'assets/icons/icons-white-crypto/neo-circle-white.svg';
import { ReactComponent as NeoCircle } from 'assets/icons/neo-circle.svg';
import { ReactComponent as Neo } from 'assets/icons/neo.svg';
import { ReactComponent as DaiWhiteCircle } from 'assets/icons/icons-white-crypto/dai-circle-white.svg';
import { ReactComponent as DaiCircle } from 'assets/icons/dai-circle.svg';
import { ReactComponent as Dai } from 'assets/icons/dai.svg';
import { ReactComponent as UsdtWhiteCircle } from 'assets/icons/icons-white-crypto/usdt-circle-white.svg';
import { ReactComponent as UsdtCircle } from 'assets/icons/usdt-circle.svg';
import { ReactComponent as Usdt } from 'assets/icons/usdt.svg';

import type { IconProps, IconsMap } from './icon.interface';

export const icons: IconsMap = {
  approved: Approved,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  bitcoin: Bitcoin,
  bitcoinCircleOrange: BitcoinCircleOrange,
  bitcoinCircle: BitcoinCircle,
  burger: Burger,
  camera: Camera,
  clock: Clock,
  copy: Copy,
  dollar: Dollar,
  dollarCircle: DollarCircle,
  arrowDownBold: ArrowDownBold,
  rubleCircle: RubleCircle,
  ethereum: Ethereum,
  euro: Euro,
  flagEn: FlagEn,
  flagRu: FlagRu,
  fruitinLogo: FruitinLogo,
  paypeopleLogo: PaypeopleLogo,
  plane: Plane,
  plusOutline: PlusOutline,
  plusGradient: PlusGradient,
  plus: Plus,
  qrCode: QrCode,
  qrSmall: QrCodeSmall,
  refresh: Refresh,
  speedometer: Speedometer,
  statistic: Statistic,
  styleCards: StyleCards,
  styleList: StyleList,
  stylePreferences: StylePreferences,
  token: Token,
  transfer: Transfer,
  arrowUpBold: ArrowUpBold,
  user: User,
  visaLogo: VisaLogo,
  visaMaster: VisaMaster,
  close: Close,
  mail: Mail,
  messenger: Messenger,
  more: More,
  telegram: Telegram,
  viber: Viber,
  eth: Eth,
  eur: Eur,
  rub: Rub,
  frtnCircle: FrtnCircle,
  frtnDark: FrtnDark,
  frtn: Frtn,
  ton: Ton,
  tonCircle: TonCircle,
  xrp: Xrp,
  xrpCircle: XrpCircle,
  dash: Dash,
  dashCircle: DashCircle,
  eos: Eos,
  eosCircle: EosCircle,
  ada: Ada,
  adaCircle: AdaCircle,
  ltc: Ltc,
  ltcCircle: LtcCircle,
  xlm: Xlm,
  xlmCircle: XlmCircle,
  xmr: Xmr,
  xmrCircle: XmrCircle,
  bch: Bch,
  bchCircle: BchCircle,
  usdc: Usdc,
  usdcCircle: UsdcCircle,
  wbtc: Wbtc,
  wbtcCircle: WbtcCircle,
  fruitin: Fruitin,
  sort: Sort,
  doneAll: DoneAll,
  reportProblem: ReportProblem,
  adanaWhiteCircle: AdanaWhiteCircle,
  bitcoinWhiteCircle: BitcoinWhiteCircle,
  dashWhiteCircle: DashWhiteCircle,
  dollarWhiteCircle: DollarWhiteCircle,
  eosWhiteCircle: EosWhiteCircle,
  ethereumWhiteCircle: EthereumWhiteCircle,
  euroWhiteCircle: EuroWhiteCircle,
  frtnWhiteCircle: FrtnWhiteCircle,
  ltcWhiteCircle: LtcWhiteCircle,
  rubleWhiteCircle: RubleWhiteCircle,
  tokenWhiteCircle: TokenWhiteCircle,
  tonWhiteCircle: TonWhiteCircle,
  xrpWhiteCircle: XrpWhiteCircle,
  xlmWhiteCircle: XlmWhiteCircle,
  xmrWhiteCircle: XmrWhiteCircle,
  bchWhiteCircle: BchWhiteCircle,
  usdcWhiteCircle: UsdcWhiteCircle,
  cameraCircle: CameraCircle,
  pseudoBalance: PseudoBalance,
  weth: Weth,
  wethWhiteCircle: WethWhiteCircle,
  wethCircle: WethCircle,
  anc: Anc,
  ancWhiteCircle: AncWhiteCircle,
  ancCircle: AncCircle,
  gas: Gas,
  gasWhiteCircle: GasWhiteCircle,
  gasCircle: GasCircle,
  neo: Neo,
  neoWhiteCircle: NeoWhiteCircle,
  neoCircle: NeoCircle,
  dai: Dai,
  daiWhiteCircle: DaiWhiteCircle,
  daiCircle: DaiCircle,
  usdt: Usdt,
  usdtWhiteCircle: UsdtWhiteCircle,
  usdtCircle: UsdtCircle,
};

const Icon: FC<IconProps> = ({ name, color, ...props }) => {
  const theme = useTheme();
  const SVGIcon = icons[name];

  if (!SVGIcon) {
    console.warn(`Icon "${name}" does not exist`);

    return null;
  }

  return <SVGIcon {...props} color={color && theme.palette.common[color]} />;
};

export default memo(Icon);
