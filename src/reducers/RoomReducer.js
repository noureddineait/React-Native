export const RoomReducer = (room = [], action) => {
    switch (action.type) {
      case 'GET_ROOM':
  
        return action.payload;
      default:
  
        return room;
    }
  };
  