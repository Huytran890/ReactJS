import "./WorkShop.css";
type WorkShopType = {
  name: string;
  picture: string;
  profession: string;
  award: string;
  discovered: string;
};
export const WorkShop = ({
  name,
  picture,
  profession,
  award,
  discovered,
}: WorkShopType) => {
  return (
    <div className="profile-wrapper">
      <h2>{name}</h2>
      <div className="wrapper-img">
        <img src={picture} alt="" />
      </div>
      <ul>
        <li>
          <b>Profession: </b>
          <span>{profession}</span>
        </li>
        <li>
          <b>Awards: </b>
          <span>{award}</span>
        </li>
        <li>
          <b>Discovered: </b>
          <span> {discovered}</span>
        </li>
      </ul>
    </div>
  );
};
