import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import s from './RestaurantPage.module.css'

export type RestaurantType = {
    id: number
    url: string
    title: string
    img: string
}

export const ReastaurantsPage=()=>{
    const navigate = useNavigate()
    const [restaurant, setRestaurant] = useState<RestaurantType[]>([])
    useEffect(() => {
        fetch('https://online-kezek-test-production-5624.up.railway.app/api/restaurants/')
            .then(res => res.json())
            .then((data: any) => {
                setRestaurant(data)
            })
    }, [])
    return (
        <div>
            {
                restaurant.map(rest => {
                    return <div className={s.wrapper}>
                        <div>
                            <p className={s.title}>{rest.title}</p>
                            {/*<p>{r.url}</p>*/}
                            <button onClick={()=>{
                                navigate(`/restaurants/${rest.id}`)}}>go to restaurant</button>
                        </div>
                        <img src={rest.img} alt="image"/>
                    </div>
                })}
        </div>
    )
}