import s from "./App.module.css";
import React from "react";

type OrderType = {
    id: number
    is_ready: boolean
    key: string
}

type OrdersPropsType = {
    orders: OrderType[]
    isCompleted?:boolean
}

const completedHeader = {
    backgroundColor: '#298000'
}
const inProgressHeader = {
    backgroundColor: '#EF5630'
}
const completedButton = {
    border: '2px solid #298000'
}
const inProgressButton = {
    border: '2px solid #EF5630'
}

export const Orders = (props: OrdersPropsType) => {
    return (
        <div>
            <div
                style={props.isCompleted ? completedHeader : inProgressHeader}
                 className={s.header}>{props.isCompleted ? 'Готовы' : 'Готовятся'}</div>
            <div className={s.wrapper}>
                {props.orders.map((order, index) => {
                    return <button style={props.isCompleted ? completedButton:inProgressButton} className={s.item}  key={index}>
                        {order.key}
                    </button>
                })}
            </div>
        </div>
    )

}