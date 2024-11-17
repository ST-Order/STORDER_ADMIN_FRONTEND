import React, { createContext, useContext, useState, useEffect } from "react";
import { Order } from "./types";

interface OrderContextType {
  orders: Order[];
  handleAcceptOrder: (id: string) => void;
  handleCompleteOrder: (id: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([
    // 임시 데이터
    {
      id: "1",
      time: "10:00",
      quantity: "2",
      menu: "삼겹덮밥 2",
      price: "10000",
      status: "PAID",
    },
    // ... 더 많은 초기 데이터 추가 가능
  ]);

  const handleAcceptOrder = (id: string) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: "COOKING" as const } : order
      )
    );
  };

  const handleCompleteOrder = (id: string) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: "DONE" as const } : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{ orders, handleAcceptOrder, handleCompleteOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};
