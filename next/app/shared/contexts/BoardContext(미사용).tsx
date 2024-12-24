// 'use client';
// import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
// import { createContext, PropsWithChildren, useContext, useState } from 'react';
// import { boardGetData } from '../api/board';
// type Board = PropsWithChildren<{
//   item?: {
//     data: any[];
//     status: number;
//   };
// }> | null;
// const BoardContext = createContext<Board>(null);

// export function BoardProvider({ children }: PropsWithChildren) {
//   const [state, setState] = useState({});

//   return (
//     <BoardContext.Provider
//       value={{
//         item,
//       }}
//     >
//       {children}
//     </BoardContext.Provider>
//   );
// }

// export function useBoard() {
//   const context = useContext(BoardContext);
//   if (!context) throw new Error('BoardProvider 안에서 사용하세요');
//   return context;
// }
