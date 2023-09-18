import { memo } from 'react';
import styled from 'styled-components';

export const SApp = styled.div`
    text-align: center;
`;

export const SHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    @media (max-width: 1050px) {
        & ul {
            padding: 0 10px;
        }
    }
`;

export const SLoader = memo(styled.div`
    border: 8px solid #f3f3f3;
    border-top: 8px solid #bd93f9;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`);

export const SModal = memo(styled.div`
    &.modal {
        transition: 0.5s;
        background-color: rgba(168, 168, 173, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        color: #282c34;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;

        &.active {
            opacity: 1;
            pointer-events: all;
        }
    }
`);

export const SModalWrapper = memo(styled.div`
    &.modal-content {
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        width: 600px;
        transition: 0.4s;
        transform: scale(0.5);

        &.active {
            transform: scale(1);
        }

        & header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;

            & h2 {
                flex: 1 1;
                text-align: center;
            }

            & button {
                display: flex;
                align-items: center;
                padding: 3px;
                border-radius: 5px;
                border: 2px solid transparent;
            }

            & button:hover {
                border-color: #282c34;
            }
        }
    }
`);

export const SInput = memo(styled.input`
    &.input {
        padding: 10px;
        font-size: 16px;
        line-height: 1.4;
        width: 100%;
        border: 1px solid black;
        margin-bottom: 15px;
        color: black;

        &.error {
            border-color: red;
        }
    }
`);

export const STitle = memo(styled.h1`
    padding: 20px 0;
`);

export const SItem = memo(styled.li`
    background-color: white;
    border-radius: 5px;
    color: #282c34;
    margin-bottom: 15px;
    display: flex;
    max-width: 1000px;
    position: relative;

    & .product-img {
        padding: 10px;
        width: 200px;
        height: 200px;
        object-fit: contain;
    }

    & .product-info {
        padding: 10px;
        text-align: left;
        flex: 1 1;

        & .product-info__category {
            margin-bottom: 15px;
            opacity: 0.9;
        }

        & .product-info__title {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;

            & h2 {
                max-width: 80%;
                font-size: 24px;
            }
            & p {
                margin-left: 10px;
                min-width: 150px;
                text-align: right;
                & span {
                    font-size: 20px;
                    font-weight: 500;
                }
            }
        }
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    @media (max-width: 600px) {
        & .wrapper-img {
            flex: 1 1 100%;
            text-align: left;
        }

        & .product-info {
            & .product-info__category {
            }

            & .product-info__title {
                & h2 {
                    max-width: max-content;
                }
                & p {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }
            }
        }
    }
`);

export const SForm = memo(styled.form`
    & .input-error {
        color: red;
        font-weight: 600;
        text-align: left;
        margin-top: -5px;
        margin-bottom: 10px;
    }
`);

export const SButton = memo(styled.button`
    &.btn__open-modal {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background-color: #bd93f9;
        font-size: 35px;
        color: white;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &.btn__show-description,
    &.btn__create-product {
        width: 140px;
        padding: 10px 15px;
        border-radius: 5px;
        background-color: #282c34;
        margin-top: 15px;
        font-size: 16px;
        transition: 0.4s ease;
        border: 3px solid transparent;

        @media (hover: hover) {
            &:hover {
                border-color: #282c34;
                background-color: white;
                color: #282c34;
            }
        }

        @media (hover: none) {
            &:active {
                border-color: #282c34;
                background-color: white;
                color: #282c34;
            }
        }
    }

    @media (max-width: 600px) {
        &.btn__open-modal {
            top: 26px;
            right: 10px;
        }
    }
`);

export const SProductDetails = memo(styled.div`
    background-color: white;
    border-radius: 5px;
    color: #282c34;
    & .wrapper {
        max-width: 1000px;
        display: flex;
        & .product-detail__img {
            padding: 10px;
            width: 300px;
            height: 300px;
            object-fit: contain;
        }

        & .main-information {
            padding: 10px;
            display: flex;
            flex: 1 1;
            flex-direction: column;
            align-items: flex-start;
            text-align: start;
        }
    }
`);
