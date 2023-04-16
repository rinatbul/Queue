import React, {useEffect, useReducer, useState} from "react";
import s from './Restaurant.module.css'
import {Orders} from "../Orders/Orders";
import {useNavigate, useParams} from "react-router-dom";

export type OrderType = {
    id: number
    key: string
    is_ready: boolean
}

type SetOrdersType = {
    type: 'SET-ORDERS'
    payload: OrderType[]
}

export const Restaurant = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [loading, setLoading] = useState<boolean>(false)

    const initialState: { orders: OrderType[] } = {orders: []};
    const reducer = (state: { orders: OrderType[] }, action: any): { orders: OrderType[] } => {
        switch (action.type) {
            case 'SET-ORDERS':
                return {...state, orders: action.payload}
            case 'DELETE-ORDERS':
                return {...state, orders: state.orders.filter(o=>o.key!=='B-2')}
            default:
                return state;
        }
    }
    const [ordersReducer, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        setLoading(true)
        const intervalId = setInterval(() => {
            fetch(`https://online-kezek-test-production-5624.up.railway.app/api/restaurants/${params.id}/orders/`)
                .then(res => res.json())
                .then((data: any) => {
                    dispatch({type: 'SET-ORDERS', payload: data.orders})
                    // setOrders(data.orders)
                    setLoading(false)
                })
        }, 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const completeOrders = ordersReducer.orders.filter(order => order.is_ready)
    const inProgressOrders = ordersReducer.orders.filter(order => !order.is_ready)
    const onItemClicked = (id: number, is_ready: boolean) => {
        fetch(`https://online-kezek-test-production-5624.up.railway.app/api/orders/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                is_ready
            }),
        })
            .then(res => res.json())
            .then((data: any) => {
                console.log(data)
            })

    }
    const onItemDelete = (id:number)=>{

    }
    return (
        <div className={s.restaurant}>
            <button className={s.button} onClick={() => {
                navigate(-1)
            }}>Back to restaurants
            </button>
            <h1>Заказы</h1>

            <Orders orders={completeOrders}
                    isCompleted
                    isLoading={loading}
                    onClick={onItemClicked}

            />

            <Orders orders={inProgressOrders}
                    isLoading={loading}
                    onClick={onItemClicked}/>
            <div>
                {/*<Slider/>*/}
            </div>
        </div>
    )
}