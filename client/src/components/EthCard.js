import classes from "./EthCard.module.css";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const EthCard = () => {
  return (
    <div className={classes.cardShape}>
      <div className={classes.cardiv3}>
        <div className={classes.cardiv5}>
          <div className={classes.cardiv4}>
            {<SiEthereum fontSize={21} color="#6e6e6e" />}
          </div>
          {<BsInfoCircle fontSize={17} color="#6e6e6e" />}
        </div>
      </div>
      <p></p>
      <p className={classes.eth}>Ethereum</p>
    </div>
  );
};

export default EthCard;
