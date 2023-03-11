import React, {useEffect, useState} from "react";
import s from './App.module.css'
import {Orders} from "./Orders";

type OrderType = {
    id: number
    key: string
    is_ready: boolean
}


function App() {
    const [orders, setOrders] = useState<OrderType[]>([])
    useEffect(() => {
        fetch('https://queue.up.railway.app/api/restaurants/45/orders')
            .then(res => res.json())
            .then((data: any) => {
                setOrders(data.orders)
            })
    }, [])

    const completeOrders = orders.filter(order => order.is_ready)
    const inProgressOrders = orders.filter(order => !order.is_ready)
    return (
        <div className={s.App}>
            <h1>Заказы</h1>

            <Orders orders={completeOrders} isCompleted/>
            <Orders orders={inProgressOrders}/>

            <div className={s.advertising}>
                <img src="https://images2.megamaster.kz/4b980f36-5740-41b0-b34b-c6eeab856a58_150x150.jpg" alt=""/>
            </div>
        </div>
    )
}

export default App
