"use client";

import React, { useState } from "react";
import Button from "../Button";

// datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SignUpForm() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <div className="flex flex-col items-center">
            <form className="flex flex-col m-4">
                <input type="text" name="email" placeholder="Email" required />

                <div style={{ height: "10px" }}></div>

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />

                <input
                    type="text"
                    name="Nickname"
                    placeholder="Nickname"
                    required
                />

                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    required
                />

                <DatePicker
                    dateFormat="yyyy.MM.dd" // 날짜 형태
                    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                    minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
                    maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                />

                <Button text={"Sign Up"} />
            </form>
        </div>
    );
}
