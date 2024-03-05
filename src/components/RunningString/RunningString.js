import Marquee from 'react-fast-marquee';

import s from './RunningString.module.css';

export default function RunningString() {
  return (
    <div className={s.string}>
      <Marquee speed={45} gradientColor={[169, 223, 191]}>
        &nbsp;Акційна пропозиція - знижка 10% на другу куртку!&nbsp;
      </Marquee>
    </div>
  );
}
