// import {useEffect} from 'react';
// import {useSelector} from 'react-redux';

// export const useCart = () => {
//   const data = useSelector((state) => state.data.data);
//   const loading = useSelector((state) => state.data.loading);
//   console.log(loading);
//   const dataCard = [];

//   useEffect(() => {
//     if (!loading) {
//       <h2>Загрузка</h2>;
//     } else {
//       for (let i = 0; i < data.length; i += 1) {
//         const card = {
//           id: data.id,
//           name: data.user.first_name,
//           userUrl: data.user.links.html,
//           date: data.created_at,
//           likes: data.likes,
//           myLike: data.liked_by_user,
//           thumbImg: data.urls.thumb,
//           fullImg: data.urls.full,
//         };
//         dataCard.push(card);
//         console.log(dataCard);
//       }
//     }
//   }, [!loading]);

//   return [dataCard];
// };
