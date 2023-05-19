"use client";

import React, { useState, useEffect } from "react";
import Button from "../Button";

// datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SignUpForm() {
	// 달력 상태 값
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

	const [form, setForm] = useState({
		email: "",
		password: "",
		nickname: "",
		phone: "",
		date: selectedDate?.toISOString().slice(0, 10).replace(/-/g, ""),
		address: "",
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	// 아래 코드가 없으면 날짜가 변경이 안됨(Form 안에서) 필수
	useEffect(() => {
		setForm((prevForm) => ({
			...prevForm,
			date: selectedDate?.toISOString().slice(0, 10).replace(/-/g, ""),
		}));
	}, [selectedDate]);

	const handleDateChange = (date: Date | null) => {
		console.log(date);
		setSelectedDate(date);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<div className="flex flex-col items-center">
			<form className="flex flex-col m-4" onSubmit={handleSubmit}>
				<input
					type="text"
					name="email"
					placeholder="Email"
					required
					onChange={onChange}
				/>

				<div style={{ height: "10px" }}></div>

				<input
					type="password"
					name="password"
					placeholder="Password"
					required
					onChange={onChange}
				/>

				<input
					type="text"
					name="nickname"
					placeholder="Nickname"
					required
					onChange={onChange}
				/>

				<input
					type="tel"
					name="phone"
					placeholder="Phone Number"
					required
					onChange={onChange}
				/>

				<DatePicker
					dateFormat="yyyy.MM.dd" // 날짜 형태
					shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
					minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
					maxDate={new Date()} // maxDate 이후 날짜 선택 불가
					selected={selectedDate}
					onChange={handleDateChange}
					showYearDropdown
					scrollableYearDropdown
					yearDropdownItemNumber={15}
				/>

				<input
					type="text"
					name="address"
					placeholder="Address"
					required
					onChange={onChange}
				/>

				<Button text={"Sign Up"} />
			</form>
		</div>
	);
}
