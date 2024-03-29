import s from '../pages/WomenPage/WomenPage.module.css';

const ShirtMarkup = ({ sortedItems }) => {
  return (
    <>
      <div className={s.portfolio__examples}>
        {sortedItems.map(({ id, price, size, image, link }, index) =>
          price ? (
            <li key={index} className={s.portfolio__item}>
              <div className={s.portfolio__box}>
                <div className={s.portfolio__wrapper}>
                  <img
                    className={s.portfolio__pic}
                    src={image[0]}
                    alt="t-shirt"
                  />
                  <p className={s.portfolio__title_code}>#{id}</p>
                  <p className={s.portfolio__overlay}>
                    Перейдіть за посиланням <br />
                    для детальніх замірів та <br />
                    додаткових фото <br />
                  </p>
                </div>
                <div className={s.portfolio__subtitle}>
                  <a
                    className={s.portfolio__title_link}
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Детальніше
                  </a>
                  <h2 className={s.portfolio__title}>{size.join(', ')}</h2>
                  <p className={s.portfolio__text}>{price} грн</p>
                </div>
              </div>
            </li>
          ) : (
            <li key={index} className={s.portfolio__item}>
              <div className={s.portfolio__box}>
                <div className={s.portfolio__wrapper}>
                  <img className={s.portfolio__pic} src={image} alt="t-shirt" />
                  <p className={s.portfolio__title_code}>#{id}</p>
                  <p className={s.portfolio__overlay}>
                    Розміри закінчилися. <br />
                    Оберіть іншу модель <br />
                  </p>
                </div>
                <div className={s.portfolio__subtitle}>
                  <p className={s.portfolio__title_link}>Детальніше</p>
                  <h2 className={s.portfolio__title}>{size}</h2>
                  <p className={s.portfolio__text}>&nbsp;</p>
                </div>
              </div>
            </li>
          )
        )}
      </div>
    </>
  );
};

export default ShirtMarkup;
