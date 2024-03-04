"use client"
import React, { useId, useState } from "react";
import styles from "./input.module.scss";
import cn from "classnames";

function Input(props: any) {
  const [value, setValue] = useState<string>();

  const { placeholder, id, className, wrapperClassName } = props;
  const _id = id ?? useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _value = e.target.value;
    setValue(_value);
  };

  return (
    <div className={cn(styles.inputWrapper, wrapperClassName)}>
      {placeholder ? (
        <label className={styles.label} htmlFor={_id}>
          {placeholder}
        </label>
      ) : null}
      <input
        {...props}
        value={value}
        onChange={handleChange}
        className={cn(styles.input, className)}
        // placeholder="Email"
        // autocapitalize="off"
        // spellcheck="false"
        // autocomplete="shipping email"
        // data-shopify-pay-handle="true"
        // data-autofocus="true"
        // data-backup="customer_email"
        // aria-describedby="checkout-context-step-one"
        // aria-required="true"
        // className="field__input"
        // size={30}
        // type="email"
        // name="checkout[email]"
        id={_id}
      />
    </div>
  );
}

export default Input;
