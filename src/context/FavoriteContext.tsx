import React, { createContext, useContext, useState } from "react";

interface FavoriteItem {
  id: number;
  backdrop_path: string;
}

interface FavoriteContextProps {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
}

const FavoriteContext = createContext<FavoriteContextProps | undefined>(
  undefined
);

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("FavoriteProvider로 감싸지 않은거 아닐까?");
  }
  return context;
};

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // 아이템 추가
  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === item.id)) {
        return prev;
      }
			const updatedFavorites = [...prev, item];

      console.log("찜에 들어갔나?: ", updatedFavorites); // 업데이트된 favorites 로그
    	return updatedFavorites;
    });
  };

	// 아이템 삭제 추가 부분

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
