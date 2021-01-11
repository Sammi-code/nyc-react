import {
  EDIT_RECORD,
  GET_CONTACTS,
  STATE_MODAL,
  UPLOAD_RECORD,
  SIGNUP_USER,
  LOGIN_USER,
  FETCH_FAQ,
  UPLOADS,
  DELETE_CONTACT,
  ADVERT
} from 
"./type";

const initialState = {
  contacts: [
    {
      businessName: "REMLAD VENTURES",
      website: "https:// www.remlad.com",
      email: "isiakaabd@gmail.com",
      phone: "07033637349",
      textarea: " i love you",
      location: "osun",
      fax: "737-25-23456",
      category: "technology",
      state: "osun",
    },
    {
      businessName: "REMLAD VENTURES",
      website: "https:// www.remlad.com",
      email: "isiakaabd@gmail.com",
      phone: "070336373495",
      textarea: " i love you",
      location: "osun",
      fax: "737-25-23456",
      state: "osun",
    },
  ],
  modal: true,
  users: [],
  isLoggedIn: false,
  faq: [],
  Uploads:[],
  adverts:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    case EDIT_RECORD:
      return {
        ...state,
        contacts: state.contacts,
        modal: !state.modal,
      };

    case UPLOAD_RECORD:
      return {
        ...state,
        contacts: action.payload,
        modal: !state.modal,
      };

    case STATE_MODAL:
      return {
        ...state,
        modal: state.modal,
      };

    case FETCH_FAQ:
      return {
        ...state,
        faq: action.payload,
      };

    case SIGNUP_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

      case LOGIN_USER:
        return {
          ...state,
        users: [...state.users, action.payload],
        isLoggedIn: true
        }

        
    case UPLOADS:
      return {
        ...state,
        Uploads:[...state.Uploads, action.payload]
  
      };
    case ADVERT :
      return {
        ...state,
        adverts:[...state.adverts, action.payload]
  
      };
      case DELETE_CONTACT:
            return {
                ...state,
                Uploads: state.Uploads.filter(contact => contact.id !== action.payload)
            }
    default:
      return state;
      

        } 
      
}   ;
export default reducer;
