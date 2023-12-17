import useFetchCollection from "@/hooks/useFetchCollection"
import { selectUserID } from "@/redux/slice/authSlice"
import { STORE_ORDERS, selectOrderHistory } from "@/redux/slice/orderSlice"
import { IOrder } from "@/types"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

/**
 * UseOrderHistory에 넘어오는 Props 명세
 */
interface UseOrderHistoryProps {

}

/**
 * UseOrderHistory의 반환 값 명세
 */
interface UseOrderHistoryReturn {
    /** 주문 리스트 */
    orders: IOrder[]
    /** 주문이 비었는지 */
    isEmpty: boolean
    /** 주문 클릭 시 이벤트 */
    handleClickToOrder: (id: string) => void
}

type UseOrderHistory = (props: UseOrderHistoryProps) => UseOrderHistoryReturn

export const useOrderHistory: UseOrderHistory = (props)  => {
    const { data, isLoading } = useFetchCollection('orders');
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(STORE_ORDERS(data));
    }, [dispatch, data]);

    const orders = useSelector(selectOrderHistory);
    const userID = useSelector(selectUserID);

    const filteredOrders = orders.filter((order) => order.userID === userID);

    const handleClickToOrder = (id: string) => {
        router.push(`/order-details/${id}`)
    }

    return {
        orders: filteredOrders,
        isEmpty: filteredOrders.length === 0,
        handleClickToOrder
    }
}