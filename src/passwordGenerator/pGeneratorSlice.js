import { createSlice } from "@reduxjs/toolkit";

const passwordGeneratorSlice = createSlice({
  name: "password",
  initialState: {
    min: 1,
    max: 20,
    current: 10,
    doublArrayZnakov: [
      [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [
        "@",
        "#",
        "$",
        "&",
        "*",
        "/",
        "?",
        "!",
        "'",
        '"',
        "(",
        ")",
        "+",
        "-",
        ",",
        ".",
        ":",
        ";",
        "<",
        ">",
        "=",
        "[",
        "]",
        "^",
        "{",
        "}",
        "|",
        "~",
      ],
    ],
    arrayZnakov: [],
    alphabet: [
      "Lowercase",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    numbers: ["Numbers", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    symbols: [
      "Symbols",
      "@",
      "#",
      "$",
      "&",
      "*",
      "/",
      "?",
      "!",
      "'",
      '"',
      "(",
      ")",
      "+",
      "-",
      ",",
      ".",
      ":",
      ";",
      "<",
      ">",
      "=",
      "[",
      "]",
      "^",
      "{",
      "}",
      "|",
      "~",
    ],
    defaultPassword: "Qwerty12345",
    password: "Your Password",
    upperCaseQ: false,
    arrayValues: [],
  },
  reducers: {
    moveSlider: (state, actions) => {
      state.current = actions.payload.target.value;
    },
    generatePassword: (state) => {
      let lengthALLArray = state.arrayZnakov.length - 1;
      state.password = "";
      // console.log(" lengthALLArray :  ", lengthALLArray);
      if (lengthALLArray >= 0) {
        for (let i = 1; i <= state.current; i++) {
          let randomArr = Math.round(Math.random() * lengthALLArray);
          let lengthArr = state.arrayZnakov[randomArr].length;
          let randomLetter = Math.round(Math.random() * (lengthArr - 2) + 1);
          state.password =
            state.password + state.arrayZnakov[randomArr][randomLetter];
        }
      } else {
        state.password = state.defaultPassword;
      }
    },
    clickChecked: (state, actions) => {
      state.arrayZnakov = [];
      let e = actions.payload.target;
      let index = state.arrayValues.findIndex((el) => el === e.value);

      e.checked
        ? (state.arrayValues = [...state.arrayValues, e.value])
        : state.arrayValues.splice(index, 1);

      state.arrayValues.map((item, index) => {
        // console.log("item [ 0 ] : ", item);
        if (item === "Lowercase") {
          state.arrayZnakov = [...state.arrayZnakov, state.alphabet];
        } else if (item === "Numbers") {
          state.arrayZnakov = [...state.arrayZnakov, state.numbers];
        } else if (item === "Symbols") {
          state.arrayZnakov = [...state.arrayZnakov, state.symbols];
        } else if (item === "Uppercase") {
          let upArr = state.alphabet.map((el) => {
            return el.toUpperCase();
          });
          state.arrayZnakov = [...state.arrayZnakov, upArr];
        }
      });
    },
  },
});

export const { moveSlider, generatePassword, clickChecked } =
  passwordGeneratorSlice.actions;
export default passwordGeneratorSlice.reducer;
// let upLow = Math.round(Math.random());
// randomArr[0] === "Lowercase"
//   ? upLow === 0
//     ? (state.password =
//         state.password +
//         state.arrayZnakov[randomArr][randomLetter].toUpperCase())
//     : (state.password =
//         state.password + state.arrayZnakov[randomArr][randomLetter])
//   : (state.password =
//       state.password + state.arrayZnakov[randomArr][randomLetter]);
// console.log("arrayValues : ", state.arrayValues);
// console.log("arrayZnakov : ", state.arrayZnakov);
// console.log("arrayZnakov : ", state.arrayZnakov.length);
// console.log(state.arrayZnakov[0]);
// const map1 = new Map([
//   [
//     { value: 0 },
//     "asd",
//     // (state.arrayZnakov = [...state.arrayZnakov, state.alphabet]),
//   ],
//   [
//     { value: 1 },
//     (state.arrayZnakov = [...state.arrayZnakov, state.numbers]),
//   ],
//   [
//     { value: 2 },
//     (state.arrayZnakov = [...state.arrayZnakov, state.symbols]),
//   ],
//   [{ value: 3 }, (state.upperCaseQ = !state.upperCaseQ)],
// ]);

// const fnMap = (e) => {
//   console.log("e : ", e);
//   return Array.from(map1.keys()).find((el) => {
//     console.log("return value: ", +e.value === el.value);
//     return +e.value === el.value;
//   });
// };
// fnMap(e);

// console.log("arrayZnakov : ", state.arrayZnakov.length);
// console.log("arrayZnakov : ", state.arrayZnakov[0][0]);
// console.log("arrayZnakov : ", state.arrayZnakov[1][0]);
// console.log("arrayZnakov : ", state.arrayZnakov[2][0]);
// console.log("arrayZnakov : ", state.arrayZnakov[3][0]);
// console.log("arrayZnakov : ", state.arrayZnakov[4][0]);
// console.log("arrayZnakov : ", state.arrayZnakov[5][0]);
// console.log("state.arrayValues : ", state.arrayValues);
