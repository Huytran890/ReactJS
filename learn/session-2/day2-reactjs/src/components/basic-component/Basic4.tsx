import styles from "./Basic4.module.css";
type Basic4 = {
  discount: string;
  picture: string;
  title: string;
  price: string;
  initialPrice: string;
};
export const Basic4 = ({
  discount,
  picture,
  title,
  price,
  initialPrice,
}: Basic4) => {
  return (
    <div className={styles.products_wrapper}>
      <div className={styles.picture_wrapper}>
        <p>{discount}</p>
        <img src={picture} alt="" />
      </div>
      <div className={styles.product_info_wrapper}>
        <h3>{title}</h3>
        <div className={styles.price_wrapper}>
          <p>{price}</p>
          <del>{initialPrice}</del>
        </div>
      </div>
    </div>
  );
};
