import axios, { AxiosError } from "axios";
import { Order, StoreOrder, StoreOrders } from "../types";

const BASE_URL = "http://localhost:3000/orders/1";

export class ApiError extends Error {
  constructor(message: string, public status?: number, public code?: string) {
    super(message);
    this.name = "ApiError";
  }
}

export const orderApi = {
  getStoreOrders: async (): Promise<Order[]> => {
    // try {
    //   // const response = await axios.get<StoreOrders>(BASE_URL);
    //   // // response.data.orders[0]는 첫 번째 StoreOrder
    //   // console.log(response.data);
    //   // return response.data;
    // } catch (error) {
    //   if (error instanceof AxiosError) {
    //     throw new ApiError(
    //       error.response?.data?.message || "주문 목록 조회 실패",
    //       error.response?.status
    //     );
    //   }
    //   throw error;
    // }
    const dummyStoreOrders: Order[] = [
      {
        order_id: 101,
        created_at: "2024-12-21T12:00:00Z",
        menus: [
          {
            menu_id: 1,
            menu_name: "아메리카노",
            menu_option: [],
            quantity: 2,
          },
          {
            menu_id: 2,
            menu_name: "카페라떼",
            menu_option: ["우유 추가"],
            quantity: 1,
          },
        ],
        status: "Pending",
      },
      {
        order_id: 102,
        created_at: "2024-12-21T12:05:00Z",
        menus: [
          {
            menu_id: 3,
            menu_name: "핫초코",
            menu_option: ["휘핑크림 추가"],
            quantity: 1,
          },
        ],
        status: "Cooking",
      },
    ];

    return dummyStoreOrders;
  },

  acceptOrder: async (orderId: number): Promise<Order[]> => {
    try {
      const response = await axios.patch<StoreOrders>(
        `${BASE_URL}/${orderId}/accept`,
        { status: "Cooking" }
      );
      return response.data.orders[0]?.orders || [];
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new ApiError(
          error.response?.data?.message || "주문 접수 처리 실패",
          error.response?.status
        );
      }
      throw error;
    }
  },

  completeOrder: async (orderId: number): Promise<Order[]> => {
    try {
      const response = await axios.patch<StoreOrders>(
        `${BASE_URL}/${orderId}/complete`,
        { status: "Completed" }
      );
      return response.data.orders[0]?.orders || [];
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new ApiError(
          error.response?.data?.message || "주문 완료 처리 실패",
          error.response?.status
        );
      }
      throw error;
    }
  },
};
