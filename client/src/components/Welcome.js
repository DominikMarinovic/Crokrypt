import classes from "./Welcome.module.css";
import React, { useContext } from "react";
import EthCard from "./EthCard";
import { AiFillPlayCircle } from "react-icons/ai/";
import { TransactionContext } from "../context/TransactionContext";
import Loader from "./Loader.js";

const Input = ({ fieldname, name, type, value, handleChange }) => {
  return (
    <input
      placeholder={fieldname}
      type={type}
      value={value}
      step="0.0001"
      onChange={(e) => handleChange(e, name)}
      className={classes.inputrow}
    />
  );
};

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    handleChange,
    formData,
    sendTransaction,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className={classes.div1}>
      <div className={classes.div2}>
        <div className={classes.div3}>
          <h1 className={classes.text_gradient}>Send Ether with CroKrypt</h1>
          <p className={classes.text_gradient2}>
            Explore crypto world, buy and sell Ether with CroKrypt
          </p>

          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className={classes.wallet}
            >
              {<AiFillPlayCircle className={classes.connect1} />}
              <p className={classes.connect2}>Connect Wallet</p>
            </button>
          )}
        </div>
      </div>

      <div className={classes.divRightside}>
        <div className={classes.divEth}>
          <EthCard />
        </div>
        <div className={classes.input}>
          <Input
            fieldname="Address To"
            name="addressTo"
            type="text"
            handleChange={handleChange}
          />
          <Input
            fieldname="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          />
          <Input
            fieldname="Keyword"
            name="keyword"
            type="text"
            handleChange={handleChange}
          />
          <Input
            fieldname="Enter Message"
            name="message"
            type="text"
            handleChange={handleChange}
          />
          <div className={classes.loading} />
          {false ? (
            <Loader />
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className={classes.sendbtn}
            >
              Send now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
