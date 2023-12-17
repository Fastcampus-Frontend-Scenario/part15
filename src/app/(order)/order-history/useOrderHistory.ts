import { IOrder } from "@/types"

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
    handleClickToOrder: () => void
}

type UseOrderHistory = (props: UseOrderHistoryProps) => UseOrderHistoryReturn

export const useOrderHistory: UseOrderHistory = (props)  => {
    return {

    }
}