import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import oneImg from './assets/one.png';
import threeImg from './assets/three.png';
import twoImg from './assets/two.png';
import { useRobotsData } from './hooks/useData';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const { robots } = useRobotsData();

  console.log(robots);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    setLoading(true);

    // sendDataToGA({
    //   autopayments: Number(checked) as 1 | 0,
    //   limit: Number(checked2) as 1 | 0,
    //   limit_sum: limit ?? 0,
    //   insurance: Number(checked3) as 1 | 0,
    //   email: email ? 1 : 0,
    // }).then(() => {
    //   LS.setItem(LSKeys.ShowThx, true);
    // });
    setThx(true);
    setLoading(false);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div>
          <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="xlarge" font="system" weight="semibold">
            Торговые роботы
          </Typography.TitleResponsive>
          <Typography.Text tag="p" defaultMargins={false} style={{ margin: '6px 0' }} view="primary-medium">
            Подключите готового робота, и он будет торговать за вас
          </Typography.Text>
          <Typography.Text view="primary-small">
            Стоимость: <b>0 ₽</b>
          </Typography.Text>
        </div>

        <div>
          <Swiper style={{ marginLeft: '0' }} spaceBetween={12} slidesPerView="auto">
            <SwiperSlide className={appSt.boxSlide}>
              <img src={oneImg} width={16} height={32} alt="One" style={{ objectFit: 'cover' }} />
              <Typography.Text view="primary-small">Изучите роботов</Typography.Text>
            </SwiperSlide>
            <SwiperSlide className={appSt.boxSlide}>
              <img src={twoImg} width={22} height={32} alt="Two" style={{ objectFit: 'cover' }} />
              <Typography.Text view="primary-small">Выберите понравившегося</Typography.Text>
            </SwiperSlide>
            <SwiperSlide className={appSt.boxSlide}>
              <img src={threeImg} width={24} height={32} alt="Three" style={{ objectFit: 'cover' }} />
              <Typography.Text view="primary-small">Настройте для себя и подключите</Typography.Text>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Создать шаблон оплаты
        </ButtonMobile>
      </div>
    </>
  );
};
