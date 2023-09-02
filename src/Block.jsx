import React from "react";

const currencyByDefault = ["UAH", "USD", "EUR"];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
    <div>
        <ul>
            {}
            <li>
                <svg>
                    <rect fill="none" height="50" width="50" />
                    <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                </svg>
            </li>
        </ul>
        <input type="number"
            value={value}
            placeholder={0}
            onChange={() => {}} />
    </div>
)