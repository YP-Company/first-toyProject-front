"use client";

import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "@/redux/modal/modalSlice";

export default function Modal() {
    const { isOpen, title, content, move } = useSelector(
        (state: any) => state.modal
    );

    const dispatch = useDispatch();
    const modalRef = useRef<HTMLDivElement>(null);

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    useEffect(() => {
        // 문서 객체에 이벤트 리스너를 추가하고 클릭 이벤트를 처리
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                dispatch(closeModal());
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch, isOpen]);

    // 브라우저 히스토리 파악해서 모달 닫히도록
    useEffect(() => {
        const handlePopstate = () => {
            handleCloseModal();
        };

        window.addEventListener("popstate", handlePopstate);

        return () => {
            window.removeEventListener("popstate", handlePopstate);
        };
    }, [dispatch]);

    return (
        <div
            id="modal"
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
                isOpen ? "visible" : "invisible"
            }`}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 999 }}
        >
            {isOpen && (
                <div ref={modalRef} className="bg-gray-300 p-4 rounded w-64 ">
                    <p className="text-center">{title}</p>
                    <div className="flex items-center justify-center">
                        <button
                            className="block mx-auto mt-4 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>
                        <button
                            className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={move}
                        >
                            {content}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
