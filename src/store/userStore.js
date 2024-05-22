import { create } from "zustand";
import { produce } from "immer";

const userStore = (set) => ({
  user: {
    name: "John Doe",
    age: 36,
    profile: {
      email: "john@doe.com",
      username: "johndoe",
      address: {
        city: "Seattle",
        street: "Central Seattle",
        home: 23,
      },
    },
  },
  //   updateAddressStreet: (newStreet) => {
  //     set((state) => ({
  //       ...state,
  //       user: {
  //         ...state.user,
  //         profile: {
  //           ...state.user.profile,
  //           address: {
  //             ...state.user.profile.address,
  //             street: newStreet,
  //           },
  //         },
  //       },
  //     }));
  //   },
  updateAddressStreet: (newStreet) => {
    set(
      produce((state) => {
        state.user.profile.address.street = newStreet;
      })
    );
  },
});

export const useUserStore = create(userStore);
