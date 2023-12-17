'use client'
import React from 'react'
import styles from './OrderHistory.module.scss';
import Heading from '@/components/heading/Heading';
import Loader from '@/components/loader/Loader';
import { formatTime } from '@/utils/dayjs';
import priceFormat from '@/utils/priceFormat';
import { useOrderHistory } from './useOrderHistory';

const OrderHistoryClient = () => {
    const { orders, isEmpty, isLoading, handleClickToOrder } = useOrderHistory({})

    return (
        <section className={styles.order}>
            <Heading title="주문 목록" />
            {isLoading && <Loader />}
            <div className={styles.table}>
                {
                    isEmpty ? (
                        <p>주문 목록이 없습니다.</p>
                    ) :
                        (
                            <table>
                                <thead>
                                    <tr>
                                        <th>순서</th>
                                        <th>주문 날짜</th>
                                        <th>주문 아이디</th>
                                        <th>주문 금액</th>
                                        <th>주문 상태</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => {
                                        const {
                                            id,
                                            orderDate,
                                            orderTime,
                                            orderAmount,
                                            orderStatus
                                        } = order;

                                        return (
                                            <tr key={id}
                                                onClick={() => handleClickToOrder(id)}
                                            >
                                                <td>{index + 1}</td>
                                                <td>
                                                    {formatTime(orderDate)}
                                                </td>
                                                <td>
                                                    {id}
                                                </td>
                                                <td>
                                                    {priceFormat(orderAmount)}원
                                                </td>
                                                <td>
                                                    <p
                                                        className={
                                                            orderStatus !== "배송완료"
                                                                ? `${styles.pending}`
                                                                : `${styles.delivered}`
                                                        }
                                                    >
                                                        {orderStatus}
                                                    </p>
                                                </td>
                                            </tr>
                                        )

                                    })}
                                </tbody>
                            </table>
                        )
                }
            </div>
        </section>
    )
}

export default OrderHistoryClient