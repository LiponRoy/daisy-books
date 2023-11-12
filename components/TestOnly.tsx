// import { TourDataProps } from "@/components/tour/constant/interfaces";
// import { ITag } from "@/components/tour/tourFilter/tags-filter.component";
// import { Data } from "@/components/tour/tourSearch/search-container.layout";
// import { create } from "zustand";
// import { devtools } from "zustand/middleware";

// interface ITourFilterState {
//   tourPackageSearchData: {
//     tagList?: ITag[];
//     priceRange: {
//       max: number;
//       min: number;
//     };
//     categoryList: {
//       forEach: (callback: (packageResult: TourDataProps[]) => void) => void;
//       packageResult: TourDataProps[];
//     };
//     packageResult: TourDataProps[];
//   };
//   categoryFilter: number[];
//   priceFilter: number[];
//   // priceLimit: { min: number; max: number };
//   durationFilter: {
//     min: number;
//     max: number;
//   };
//   tagsFilter: number[];
//   withFlight: boolean;
//   withoutFlight: boolean;
//   selectedMonthFilter: string;
//   filteredPackages: TourDataProps[];
//   searchedPackages: TourDataProps[];
//   setCategoryFilter: (categories: number[]) => void;
//   setPriceFilter: (value: number[]) => void;
//   setDurationFilter: (value: { min: number; max: number }) => void;
//   setTagsFilter: (tags: number[]) => void;
//   setSelectedMonthFilter: (newMonth: string) => void;
//   toggleWithFlightFilter: () => void;
//   toggleWithoutFlightFilter: () => void;
//   setFilteredPackage: (value: TourDataProps[]) => void;
//   setSearchedPackage: (value: TourDataProps[]) => void;
//   setTourPackageSearchData: (data: Data) => void;
//   reset: () => void;
// }

// const currentYear = new Date().getFullYear();
// const currentMonth = new Date().getMonth() + 1;

// const useTourFilterStore = create<ITourFilterState>()(
//   devtools(
//     (set) => ({
//       tourPackageSearchData: {
//         priceRange: {
//           max: 0,
//           min: 0,
//         },
//         categoryList: {
//           packageResult: [],
//           forEach: (callback) => callback([]),
//         },
//         packageResult: [],
//       },
//       categoryFilter: [],
//       priceFilter: [],
//       durationFilter: { min: 0, max: 4 },
//       tagsFilter: [],
//       flightFilter: null,
//       selectedMonthFilter: `${currentYear}-${currentMonth
//         .toString()
//         .padStart(2, "0")}`,
//       withFlight: false,
//       withoutFlight: false,
//       filteredPackages: [],
//       searchedPackages: [],
//       setTourPackageSearchData: (data: any) =>
//         set({ tourPackageSearchData: data }),
//       setCategoryFilter: (categories) => set({ categoryFilter: categories }),
//       setFilteredPackage: (value: TourDataProps[]) =>
//         set({ filteredPackages: value }),
//       setSearchedPackage: (value: TourDataProps[]) =>
//         set({ searchedPackages: value }),
//       setPriceFilter: (value) => set({ priceFilter: value }),
//       setDurationFilter: (value) => set({ durationFilter: value }),
//       setTagsFilter: (tags) => set({ tagsFilter: tags }),
//       setSelectedMonthFilter: (newMonth) =>
//         set({ selectedMonthFilter: newMonth }),
//       toggleWithFlightFilter: () =>
//         set((state) => ({ withFlight: !state.withFlight })),
//       toggleWithoutFlightFilter: () =>
//         set((state) => ({ withoutFlight: !state.withoutFlight })),
//       reset: () => {
//         set({
//           tourPackageSearchData: {
//             tagList: [],
//             priceRange: {
//               max: 0,
//               min: 0,
//             },
//             categoryList: {
//               forEach: (callback) => callback([]),
//               packageResult: [],
//             },
//             packageResult: [],
//           },
//           categoryFilter: [],
//           priceFilter: [],
//           durationFilter: { min: 0, max: 4 },
//           tagsFilter: [],
//           withFlight: false,
//           withoutFlight: false,
//           selectedMonthFilter: `${currentYear}-${currentMonth
//             .toString()
//             .padStart(2, "0")}`,
//           filteredPackages: [],
//           searchedPackages: [],
//         });
//       },
//     }),
//     {
//       name: "ft-b2c-tour-filter",
//     }
//   )
// );

// export default useTourFilterStore;

