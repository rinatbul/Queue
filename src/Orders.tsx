import s from "./Orders.module.css";
import React from "react";
import Lottie from "lottie-react";
import loading from '../src/loader.json';
import notfound from '../src/notfound.json';
import {OrderType} from "./Components/Restaurant/Restaurant";

type OrdersPropsType = {
    orders: OrderType[]
    status: 'ready' | 'not_ready'
    isCompleted?: boolean
    isLoading: boolean
    onClick:(id:number, is_ready:boolean)=>void
}
const OrdersStyles = {
    ready: {
        border: '2px solid #298000',
        // backgroundColor: '#298000'
    },
    not_ready: {
        border: '2px solid #EF5630',
        // backgroundColor: '#EF5630'
    }
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
    const orders = props.orders.length ? <div>
            {props.orders.map((order, index) => {
                return <button onClick={()=>{props.onClick(order.id,!order.is_ready)}}
                    // style={OrdersStyles[props.status]}
                    style={props.isCompleted ? completedButton : inProgressButton}
                    className={s.item} key={index}>
                    {order.key}
                </button>
            })}
        {/*</div>*/}
    </div> : <div>
        <Lottie animationData={notfound}/>
    </div>
    return (
        <div>
            <div
                style={props.isCompleted ? completedHeader : inProgressHeader}
                className={s.header}>{props.isCompleted ? 'Готовы' : 'Готовятся'}</div>
            <div className={s.wrapper} style={props.isCompleted ? completedButton : inProgressButton}>
                {
                    props.isLoading ? <Lottie animationData={loading}/>: orders
                        // <div style={props.isCompleted ? completedButton : inProgressButton}></div> : orders
                }
            </div>

        </div>
    )
}